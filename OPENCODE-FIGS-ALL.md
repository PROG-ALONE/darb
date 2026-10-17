# OPENCODE-FIGS-ALL.md
## مهمة: رسم شارح لكل موضوع في كل كتب السادس الإعدادي العلمي
> كتبها Claude بعد فحص المشروع على القرص بـ Node. كل رقم مُتحقَّق منه، لا تقدير.
> المشروع: `darb-main/` — `index.html` + `content/*.js` + `sw.js`. RTL، PWA، GitHub Pages.
> **المرفق الأساسي: `figs-todo.json`** — قائمة المهام الكاملة (344 موضوعاً). اعمل بالتكرار عليها.

---

## 0) النطاق (مؤكَّد بالفحص)

إجمالي مواضيع السادس العلمي في المحتوى = **344**. الحالة الآن:

| الحالة | العدد | المطلوب |
|---|---|---|
| `need_new_fig` — موضوع بلا أي رسم | **301** | أنشئ رسماً جديداً + أدرج استدعاءه |
| `fix_broken_fig` — مفتاح مُستدعى لكنه غير مُعرّف (فراغ للطالب) | **8 مفاتيح** | أنشئ الرسم بنفس المفتاح حرفياً |
| `has_working_fig` — رسم موجود يعمل | 35 | **لا تلمسه** |

توزيع المواضيع بلا رسم حسب المادة: الفيزياء 61، الكيمياء 76، الأحياء 29، الرياضيات 31، اللغة العربية 41، اللغة الإنكليزية 48، التربية الإسلامية 15.

> **سبب فشل تسليمك السابق:** `figs-5.js` يعرّف `window.FIGS` كـ getter، فنمطك `window.FIGS['k']=...` كتب في كائن مؤقت ضائع. لم يُسجَّل أيٌّ من رسومك العشرة. ومجلد `svgs/` (144 ملف) يتيم (الرسوم القديمة inline ولا تشير إليه). **تجاهل مفاتيحك العشرة ومجلد `svgs/` تماماً وابدأ من `figs-todo.json`.**

---

## 1) القاعدة التقنية الإلزامية — نمط التسجيل الصحيح

**لا تكتب `window.FIGS['k']=...` أبداً.** استعمل الإسناد عبر setter (مُجرَّب: يسجّل ويُبقي القديم):

```js
;(function(){
  var DEFS = '<defs><marker id="figArrow_all" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#555"/></marker></defs>';
  window.FIG_DEFS = (window.FIG_DEFS||'').indexOf('figArrow_all')>=0 ? window.FIG_DEFS : (window.FIG_DEFS||'')+DEFS;

  var ADD = {};
  ADD['fig_r12u1t1'] = {
    title:'...', teaches:'...', subj:'اللغة العربية', chapter:'...',
    svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">...</svg>',
    parts:[{id:'p1',label:'...',note:'...'}],
    steps:['...','...']
  };
  // ... بقية مفاتيح هذا الملف ...

  window.FIGS     = Object.assign({}, window.FIGS, ADD);
  var SUBJ={}; Object.keys(ADD).forEach(function(k){ SUBJ[k]=ADD[k].subj; });
  window.FIG_SUBJ = Object.assign({}, window.FIG_SUBJ, SUBJ);
})();
```

نظّم الرسوم في ملفات لكل مادة (لا ملف عملاق واحد):
`content/figs-phy2.js, figs-chem2.js, figs-bio2.js, figs-math2.js, figs-arabic2.js, figs-eng2.js, figs-islamic2.js`
وكل ملف يستعمل `id` سهم فريداً (`figArrow_phy2` …).

---

## 2) آلية العمل على `figs-todo.json`

لكل عنصر في `topics[]`:

- `status: "has_working_fig"` → **تخطَّه**. لا تنشئ ولا تدرج.
- `status: "need_new_fig"` → أنشئ `window.FIGS[figKey]` (figKey جاهز = `fig_<topicId>`)، **وأدرج** الكتلة في `explain` لذلك الموضوع داخل `file`:
  ```js
  { t:'fig', k:'<figKey>', cap:'الشكل: <وصف موجز من مضمون الموضوع>' }
  ```
  ضعها قرب الشرح النظري ذي الصلة داخل مصفوفة `explain` للموضوع ذي `id === topicId`.
- `status: "fix_broken_fig"` → المفتاح `figKey` مُستدعى في المحتوى أصلاً؛ **أنشئه فقط** بنفس الاسم حرفياً (لا تلمس المحتوى، الاستدعاء موجود). التفاصيل في `broken_refs[]` (key, file, page, cap).

كل عنصر يحمل `subject, file, topicId, title, page, sec` — **هذه مرجعك للمصدر**: افتح الكتاب الرسمي لـ `subject` عند `page`، وارسم ما يخدم `title`.

---

## 3) المصدر والمحتوى — القاعدة الحاكمة

```
لا مصدر لمعلومة في الكتاب الرسمي لصفحة الموضوع → لا ترسمها. ممنوع الاختراع منعاً باتاً.
```

- كل رسم يعكس مفهوم الموضوع كما في الكتاب الرسمي العراقي للسادس العلمي، لصفحته المذكورة.
- موضوع لا يقبل رسماً مفيداً (نص مطالعة/قصيدة حفظ بلا بنية بصرية): **ضعه في قائمة `skipped` مع السبب** بدل اختراع رسم حشو. لا تُجبر رسماً فارغاً.
- أنواع الرسوم المناسبة حسب المادة: مخطط بنية/أجزاء، مخطط شعاعي (تصنيف)، منحنى، دائرة كهربائية، مربع بانيت، خط زمني، جدول مقارنة بصري، مسار خطوات.

---

## 4) معايير SVG (إلزامية لكل رسم)

```
viewBox="0 0 300 200" (أو 300×220 إن لزم ارتفاع)
font-family="system-ui, Arial, sans-serif"
ألوان النظام: #2f7d5b أخضر | #c0563f أحمر | #555 بنية | #d8a53a ذهبي | #efe9dd ناعم
نصوص عربية: text-anchor="middle" أو "end"
الأسهم: marker-end="url(#figArrow_<file>)"
inline SVG نقي فقط — لا مكتبات، لا روابط خارجية، لا base64
< 8KB لكل رسم | parts و steps غير فارغتين | لا تزاحم عناصر
```

---

## 5) الرسوم التفاعلية mathviz (الـ11 معطّلة — اربطها)

الملفات والدالة جاهزة لكن **استدعاءات `{t:'mathviz',k}` في المحتوى = صفر**. أدرج كتلة في الدرس المطابق فقط إن وُجد:

| mathviz key | الملف | الفصل |
|---|---|---|
| `complex_plane` | `math-12-c1.js` | الأعداد المركبة |
| `parabola`,`ellipse`,`hyperbola`,`circle` | `math-12-c2.js` | القطع المخروطي |
| `derivative_tangent` | `math-12-c3.js` | التفاضل |
| `capacitor`,`rc_circuit` | `physics-12-c1.js` | المتسعات |
| `optics_lens` | `physics-12-c5.js` | البصريات |
| `wave_interference` | `physics-12-c4.js` إن وُجد درس موجات | وإلا اترك |
| `projectile` | ⚠️ لا فصل مطابق في منهج السادس — **لا تربطه** إلا بإثبات درس | — |

---

## 6) `figs-index.json` + `index.html` + `sw.js`

- **`figs-index.json`**: أعد توليده من `window.FIGS` الفعلي بعد عملك — `total` = العدد الحقيقي، وكل عنصر `{key,title,subj,chapter}`. (الحالي خاطئ: يقول 10 ويسرد مفاتيح غير معرّفة.)
- **`index.html`**: أضف `<script src="content/figs-<x>2.js">` لكل ملف جديد **بعد السطر 945** (بعد ملفات الرسوم الحالية؛ الترتيب مهم بسبب الـ getter).
- **`sw.js`**: أضف كل ملفات الرسوم الجديدة إلى `CORE`، وارفع `CACHE` إلى **`darb-v62`**.

---

## 7) القواعد الصارمة

```
1. لا مصدر → لا رسم. من الكتاب الرسمي لصفحة الموضوع فقط. لا اختراع.
2. استعمل نمط Object.assign (القسم 1) حصراً. ممنوع window.FIGS['k']=.
3. المفاتيح: need_new → figKey من figs-todo.json حرفياً؛ broken → اسمه حرفياً.
4. has_working_fig: لا تلمسه. لا تعدّل شرحاً قائماً سوى إدراج كتلة الرسم في موضعها.
5. SVG inline نقي < 8KB، بلا مكتبات/روابط/base64.
6. موضوع لا يقبل رسماً → skipped + السبب. لا حشو.
7. لا تلمس PAT/اعتماد git. لا git commit — حيدر/Claude يتولّاه بموافقة صريحة.
8. تجاهل مفاتيحك العشرة القديمة ومجلد svgs/.
```

---

## 8) سكربت التحقق الذاتي الإلزامي (شغّله وألصق ناتجه)

```js
// node check-all.js  (من جذر darb-main)
const fs=require('fs'),vm=require('vm'),path=require('path');
const C='content';
const todo=JSON.parse(fs.readFileSync('figs-todo.json','utf8'));
const figFiles=fs.readdirSync(C).filter(f=>/^figs.*\.js$/.test(f)).sort();
const base=['figs.js','figs-2.js','figs-3.js','figs-4.js','figs-5.js'];
const load=[...base,...figFiles.filter(f=>!base.includes(f))];
const ctx={window:{}};vm.createContext(ctx);
load.forEach(f=>{const p=path.join(C,f);if(fs.existsSync(p))vm.runInContext(fs.readFileSync(p,'utf8'),ctx,{filename:f});});
const FIGS=ctx.window.FIGS||{};
let need=todo.topics.filter(t=>t.status!=='has_working_fig');
let missing=[], badStruct=[];
need.forEach(t=>{const v=FIGS[t.figKey];
  if(!v){missing.push(t.figKey+' ('+t.file+' '+t.topicId+')');return;}
  if(!v.title||!v.svg||!v.subj||!v.chapter||!(v.parts&&v.parts.length)||!(v.steps&&v.steps.length)) badStruct.push(t.figKey+':بنية ناقصة');
  if(v.svg&&v.svg.length>8192) badStruct.push(t.figKey+':svg>8KB');
});
console.log('FIGS total =',Object.keys(FIGS).length);
console.log('مطلوبة =',need.length,'| مفقودة =',missing.length,'| بنية خاطئة =',badStruct.length);
if(missing.length)console.log('مفقودة:\n'+missing.slice(0,50).join('\n'));
if(badStruct.length)console.log('بنية:\n'+badStruct.slice(0,50).join('\n'));
let mv=0;fs.readdirSync(C).filter(f=>f.endsWith('.js')).forEach(f=>{mv+=(fs.readFileSync(path.join(C,f),'utf8').match(/t\s*:\s*['"]mathviz['"]/g)||[]).length;});
console.log('استدعاءات mathviz =',mv);
process.exit(missing.length||badStruct.length?1:0);
```

**معيار القبول:** «مفقودة = 0» (أو = عدد `skipped` المبرَّر فقط)، «بنية خاطئة = 0»، و«استدعاءات mathviz» ≥ ما ربطتَه.

---

## 9) التسليم المطلوب لـ Claude

1. ملفات `content/figs-*2.js` الجديدة (الرسوم، منظّمة حسب المادة).
2. تعديلات `content/*.js`: كتل `{t:'fig',k}` المُدرجة في المواضيع (need_new) + كتل mathviz.
3. `figs-index.json` معاد توليده من الواقع.
4. `index.html` (أسطر `<script>`) + `sw.js` (`darb-v62` + CORE).
5. ناتج `check-all.js` حرفياً (نجاح).
6. قائمة `skipped`: كل موضوع بلا رسم ولماذا (لا مصدر / لا يقبل رسماً).
