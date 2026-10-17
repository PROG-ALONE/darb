# OPENCODE-FIX-BRIEF.md
## حزمة إصلاح الرسوم — دَرْب (السادس الإعدادي العلمي)
> كتبها Claude بعد فحص التسليم السابق على القرص بـ Node. كل رقم هنا مُتحقَّق منه، لا تقدير.
> المشروع: `darb-main/` — ملف واحد `index.html` + `content/*.js` + `sw.js`. RTL. PWA على GitHub Pages.

---

## 0) لماذا هذا الملف؟ (نتيجة الفحص)

التسليم السابق **لم يصل إلى التطبيق إطلاقاً**. بعد تحميل كل `content/figs*.js` في بيئة فعلية:

- عدد الرسوم في `window.FIGS` = **62** (كلها القديمة camelCase). رسوم opencode العشرة الجديدة (`electricField_lines, gauss_surface, capacitor_plates, mendel_first, bacterial_fission, reaction_energy, derivative_tangent, noon_tanween, passive_voice, conditional_ladder`) = **صفر مسجَّل**.
- السبب: `figs-5.js` (السطر 469) يعرّف `window.FIGS` كـ **getter** يُرجع نسخة اتحاد *جديدة* عند كل قراءة. لذلك النمط الذي استعملته:
  ```js
  window.FIGS['key'] = {...}   // يقرأ getter → كائن مؤقت → يكتب فيه → يُرمى. ضائع.
  ```
- `index.html` يحمّل `figs-5.js` (سطر 939) **قبل** ملفاتك (940–945)، فالـ getter فعّال وقت تشغيل ملفاتك.
- مجلد `svgs/` (144 ملف) و`darb-main.zip` **يتيمة**: `figs-*.js` تضمّن الـ SVG inline ولا تشير إلى `svgs/` أبداً. المجلد غير مستعمل من التطبيق.
- الرسوم التفاعلية الـ11 في `content/mathviz.js` مُعرّفة، والدالة `mathvizHTML()` و`case 'mathviz'` موجودتان في `index.html`، **لكن عدد استدعاءات `{t:'mathviz',k}` في كل المحتوى = صفر** → لا طالب يراها.

**لذلك: تجاهل مفاتيحك العشرة القديمة ومجلد `svgs/`.** المطلوب أدناه مختلف ومحدّد.

---

## 1) القاعدة التقنية الإلزامية — نمط التسجيل الصحيح

في أي ملف رسوم جديد، **لا تستعمل `window.FIGS['k']=...` أبداً**. استعمل الإسناد عبر الـ setter (مُجرَّب — يسجّل فعلاً ويُبقي القديم):

```js
;(function(){
  // 1) علّم السهم (id فريد لكل ملف)
  var DEFS = '<defs><marker id="figArrow_fix" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#555"/></marker></defs>';
  window.FIG_DEFS = (window.FIG_DEFS||'').indexOf('figArrow_fix')>=0 ? window.FIG_DEFS : (window.FIG_DEFS||'')+DEFS;

  // 2) ابنِ الرسوم في كائن محلي
  var ADD = {};
  ADD['istifhamNida'] = {
    title:'...', teaches:'...', subj:'اللغة العربية', chapter:'...',
    svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">...</svg>',
    parts:[{id:'p1',label:'...',note:'...'}],
    steps:['...','...']
  };
  // ... بقية المفاتيح ...

  // 3) سجّل عبر الإسناد (يشغّل setter الـ figs-5) — لا تكتب على getter بالمفتاح
  window.FIGS     = Object.assign({}, window.FIGS, ADD);
  var SUBJ = {}; Object.keys(ADD).forEach(function(k){ SUBJ[k]=ADD[k].subj; });
  window.FIG_SUBJ = Object.assign({}, window.FIG_SUBJ, SUBJ);
})();
```

تحقّق سريع (يجب أن يطبع العدد +1 وأن يبقى `spark` موجوداً):
```js
// بعد تحميل figs.js..figs-5.js ثم ملفك الجديد
console.log(Object.keys(window.FIGS).length, 'istifhamNida' in window.FIGS, 'spark' in window.FIGS);
```

---

## 2) المهمة الأساسية — الرسوم الثمانية المكسورة (أولوية قصوى)

هذه مفاتيح **يستدعيها المحتوى الآن لكنها غير مُعرّفة في أي ملف** → تظهر فراغاً للطالب. حقل `cap` في المحتوى يحدّد بالضبط ما يجب أن يعرضه كل رسم. **المصدر إلزامي: الكتاب الرسمي للصفحة المذكورة؛ لا مصدر لمعلومة → لا ترسمها.**

اكتبها في ملف واحد `content/figs-fix.js` بنمط القسم (1)، بمفاتيح camelCase **بالاسم نفسه حرفياً**:

| المفتاح (حرفياً) | المادة | الدرس / الفصل | الصفحة | ما يجب أن يعرضه الرسم (من `cap`) |
|---|---|---|---|---|
| `istifhamNida` | اللغة العربية | أسلوب الاستفهام ونوعاه | 8–9 | الاستفهام تصديقًا وتعيينًا، والنداء بمنادٍ ونادٍ |
| `i3rabSentence` | اللغة العربية | إعراب أسماء الاستفهام (مَن، ما، ماذا، أيّ) | 13–16 | الإعراب البصري — إعراب اسم الاستفهام في جوابه |
| `jumlaTypes` | اللغة العربية | خلاصة القواعد وتحويل الجمل إلى استفهام | 21–23، 31 | أنواع الجملة (اسمية/فعلية) وكيف تتحوّل إلى استفهام |
| `mafoulBiNaWaibih` | اللغة العربية | تقديم المفعول به على فعله | 92–93 | المفعول به ونوائبه عند التقديم (ظرف، جار ومجرور، مصدر مؤول) |
| `carbonPhotosynthesis` | الأحياء | العضيات / البلاستيدات | 15–19 | البلاستيدة الخضراء: ماء + CO₂ → سكر + O₂ |
| `cellularRespiration` | الأحياء | الأيض الخلوي والتنفس | 29–33 | التنفس الخلوي: تحطيم الكلوكوز في المايتوكوندريا لتحرير الطاقة |
| `cellReproCycle` | الأحياء | الانقسام المباشر والخيطي | 34–36 | دورة الخلية: المباشر يحافظ على العدد؛ والاختزالي من زوجية إلى نصفية (الرسم يُستدعى مرتين لكلا المفهومين) |
| `inheritanceChromosomes` | الأحياء | الوراثة المندلية (5-3) | — | الصبغيات: كيف تنتقل الصفات من الأبوين إلى الأبناء |

شروط كل رسم: `viewBox="0 0 300 200"` (أو 300×220)، `font-family="system-ui, Arial, sans-serif"`، ألوان النظام (#2f7d5b أخضر، #c0563f أحمر، #555 بنية، #d8a53a ذهبي)، نصوص عربية `text-anchor="middle"/"end"`، الأسهم `marker-end="url(#figArrow_fix)"`، لا صور base64، < 8KB، `parts` و`steps` غير فارغتين.

ثم في `index.html` أضف **بعد** السطر 945:
```html
<script src="content/figs-fix.js"></script>
```

---

## 3) ربط الرسوم التفاعلية mathviz (الـ11 معطّلة حالياً)

الملفات والدالة جاهزة؛ الناقص هو **استدعاؤها من الدروس**. أضف كتلة `{ t:'mathviz', k:'<key>' }` داخل مصفوفة `explain` للدرس المطابق، **فقط إذا كان الدرس موجوداً في الفهرس الرسمي**. لا تُنشئ درساً جديداً.

| mathviz key | الملف المستهدف | الفصل (مؤكَّد) |
|---|---|---|
| `complex_plane` | `content/math-12-c1.js` | الأعداد المركبة |
| `parabola`, `ellipse`, `hyperbola`, `circle` | `content/math-12-c2.js` | القطع المخروطي |
| `derivative_tangent` | `content/math-12-c3.js` | التفاضل/المشتقات |
| `capacitor`, `rc_circuit` | `content/physics-12-c1.js` | الفصل الأول: المتسعات |
| `optics_lens` | `content/physics-12-c5.js` | البصريات |
| `wave_interference` | تحقّق: درس «الموجات» إن وُجد (`physics-12-c4.js`) | وإلا اتركه |
| `projectile` | ⚠️ لا يوجد فصل «رمي مائل» في منهج السادس — **لا تربطه** إلا إذا أثبتَّ درساً مطابقاً | — |

قاعدة: قبل أي إدراج، افتح الملف وتأكد أن هناك درساً فعلياً عن الموضوع؛ ضع الكتلة في `explain` قرب الشرح النظري ذي الصلة. لا تضف mathviz بلا درس مضيف.

---

## 4) تصحيح `figs-index.json`

الحالي خاطئ: `total:10` بينما يسرد 15، ويذكر مفاتيح غير مُعرّفة (`rc_circuit, kirchhoff, convex_lens, parabola, circle`) وبلا كيمياء. أعد توليده ليعكس **ما هو مسجَّل فعلاً** بعد إصلاحك: اجمع مفاتيح `window.FIGS` الحقيقية برمجياً، واجعل `total` = العدد الفعلي، وكل عنصر يحمل `key, title, subj, chapter`.

---

## 5) تصحيح `sw.js`

`CACHE='darb-v61'` و`mathviz.js` مضافان ✓. الناقص: ملفات الرسوم الجديدة غير مخزَّنة للعمل دون إنترنت. أضف إلى مصفوفة `CORE`: `'./content/figs-fix.js'` (وأي ملف رسوم جديد تنشئه)، وارفع `CACHE` إلى **`darb-v62`**.

---

## 6) القواعد الصارمة (لا تتجاوزها)

```
1. لا مصدر → لا رسم. كل معلومة من الكتاب الرسمي للصفحة المذكورة فقط. ممنوع الاختراع.
2. لا تعدّل محتوى دروس قائم سوى إضافة كتلة الرسم في موضعها. لا تحذف ولا تعيد صياغة.
3. لا تكتب window.FIGS['k']=... — استعمل نمط Object.assign في القسم (1) حصراً.
4. مفاتيح camelCase بالاسم الحرفي في الجدول (القسم 2). خطأ حرف = رسم مكسور.
5. SVG نقي inline فقط، بلا مكتبات ولا روابط خارجية ولا base64، < 8KB.
6. لا تلمس PAT/بيانات اعتماد git. لا git commit — Claude/حيدر يتولّى ذلك بموافقة صريحة.
7. مفاتيحك العشرة القديمة ومجلد svgs/ متروكة؛ لا تبنِ عليها.
```

---

## 7) سكربت التحقق الذاتي الإلزامي (شغّله وألصق ناتجه مع التسليم)

```js
// node check-fix.js   (من جذر darb-main)
const fs=require('fs'), vm=require('vm'), path=require('path');
const C='content';
const order=['figs.js','figs-2.js','figs-3.js','figs-4.js','figs-5.js','figs-fix.js'];
const ctx={window:{}}; vm.createContext(ctx);
order.forEach(f=>{const p=path.join(C,f); if(fs.existsSync(p)) vm.runInContext(fs.readFileSync(p,'utf8'),ctx,{filename:f});});
const FIGS=ctx.window.FIGS||{};
const need=['istifhamNida','i3rabSentence','jumlaTypes','mafoulBiNaWaibih','carbonPhotosynthesis','cellularRespiration','cellReproCycle','inheritanceChromosomes'];
const missing=need.filter(k=>!(k in FIGS));
console.log('FIGS total =', Object.keys(FIGS).length);
console.log('الرسوم الثمانية المسجّلة =', need.length-missing.length, '/ 8');
if(missing.length) console.log('ما زال مكسوراً:', missing.join(', '));
let err=[];
need.filter(k=>k in FIGS).forEach(k=>{const v=FIGS[k];
  if(!v.title) err.push(k+':no title'); if(!v.svg) err.push(k+':no svg');
  else if(v.svg.length>8192) err.push(k+':svg>8KB');
  if(!v.subj) err.push(k+':no subj'); if(!v.chapter) err.push(k+':no chapter');
  if(!v.parts||!v.parts.length) err.push(k+':no parts'); if(!v.steps||!v.steps.length) err.push(k+':no steps');});
// استدعاءات mathviz في المحتوى
let mv=0; fs.readdirSync(C).filter(f=>f.endsWith('.js')).forEach(f=>{mv+=(fs.readFileSync(path.join(C,f),'utf8').match(/t\s*:\s*['"]mathviz['"]/g)||[]).length;});
console.log('استدعاءات mathviz في المحتوى =', mv);
console.log(err.length ? ('أخطاء بنية:\n'+err.join('\n')) : 'بنية الرسوم الثمانية سليمة');
process.exit(missing.length||err.length ? 1 : 0);
```

**معيار القبول:** `FIGS total` زاد بمقدار 8، و«الرسوم الثمانية المسجّلة = 8/8»، و«بنية الرسوم الثمانية سليمة»، و«استدعاءات mathviz» ≥ عدد ما ربطتَه فعلاً.

---

## 8) التسليم المطلوب لـ Claude

1. `content/figs-fix.js` (الرسوم الثمانية).
2. تعديل `index.html` (سطر `<script>` واحد بعد 945) + كتل mathviz المُدرجة في ملفات الدروس.
3. `figs-index.json` معاد توليده.
4. `sw.js` → `darb-v62` + figs-fix.js في CORE.
5. ناتج `check-fix.js` حرفياً (يجب أن يكون نجاحاً).
6. قائمة بأي رسم أو mathviz لم تربطه ولماذا (لم تجد مصدراً / لا درس مضيف).
