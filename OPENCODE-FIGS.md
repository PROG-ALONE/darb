# OPENCODE-FIGS.md
## مهمة opencode: الرسوم الشارحة لمواضيع السادس الإعدادي العلمي

---

## السياق

المشروع: دَرْب — PWA للسادس الإعدادي العلمي العراقي  
دورك: تبني الرسوم الشارحة SVG لكل مواضيع السادس.  
بعدك: Claude (claude.ai) يستلم ناتجك، يدمجه في النظام، يفحص كل شيء.

---

## قواعد صارمة لا تتجاوزها

```
1. لا اختراع للمحتوى — كل رسم يعكس المنهج الرسمي العراقي للسادس
2. كل SVG يعمل standalone بدون مكتبات خارجية (inline SVG فقط)
3. لا JS خارجي في ملفات الرسوم — SVG نقي فقط
4. لا تكسر البنية المحددة أدناه — Claude يعتمد عليها للدمج
5. اعمل بالترتيب: الفيزياء أولاً ← الأحياء ← الكيمياء ← الرياضيات ← العربية ← الإنكليزية
6. كل ملف SVG = موضوع واحد، لا تجمع مواضيع في ملف
7. احفظ بنظام التسمية المحدد أدناه بالضبط
```

---

## بنية التسمية (إلزامية)

```
svgs/
  فيزياء/
    ف1_المجال_الكهربائي_رسم1.svg
    ف1_المجال_الكهربائي_رسم2.svg
    ف2_التيار_المتردد_رسم1.svg
  أحياء/
    ف1_الوراثة_مندل_رسم1.svg
  كيمياء/
    ف1_طاقة_التنشيط_رسم1.svg
  رياضيات/
    ف1_الاعداد_التخيلية_رسم1.svg
  عربي/
    ف1_احكام_النون_الساكنة_رسم1.svg
  إنكليزي/
    ف1_passive_voice_رسم1.svg

figs-phy.js    ← كل رسوم الفيزياء مجمّعة
figs-bio.js    ← كل رسوم الأحياء
figs-chem.js   ← كل رسوم الكيمياء
figs-math.js   ← كل رسوم الرياضيات
figs-arabic.js ← كل رسوم العربية
figs-eng.js    ← كل رسوم الإنكليزية
figs-index.json ← فهرس كل الرسوم
```

---

## بنية ملف JS (إلزامية بالضبط)

```js
// figs-phy.js — رسوم الفيزياء — السادس الإعدادي العلمي العراقي
;(function(){
  if(!window.FIGS) window.FIGS={};
  if(!window.FIG_SUBJ) window.FIG_SUBJ={};

  const DEFS = `<defs>
    <marker id="figArrow_phy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#555"/>
    </marker>
  </defs>`;
  const defsNow = window.FIG_DEFS || '';
  window.FIG_DEFS = defsNow.indexOf('figArrow_phy') >= 0 ? defsNow : defsNow + DEFS;

  window.FIGS['electricField_lines'] = {
    title: 'خطوط المجال الكهربائي',
    teaches: 'كيف تنتشر خطوط المجال حول شحنة موجبة وسالبة',
    subj: 'الفيزياء',
    chapter: 'الفصل الأول — المجال الكهربائي',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
      <!-- SVG كامل هنا -->
    </svg>`,
    parts: [
      { id:'p1', label:'الشحنة الموجبة', note:'مصدر المجال' },
      { id:'p2', label:'خطوط المجال', note:'تتجه من + إلى −' },
      { id:'p3', label:'الشحنة السالبة', note:'بالوعة المجال' }
    ],
    steps: [
      'خطوط المجال تخرج من الشحنة الموجبة وتدخل في السالبة',
      'كثافة الخطوط تعكس شدة المجال',
      'الخطوط لا تتقاطع أبداً'
    ]
  };

  // ... باقي الرسوم ...

  // هذا السطر في نهاية كل ملف بدون استثناء
  Object.keys(window.FIGS).forEach(k => {
    if(!window.FIG_SUBJ[k]) window.FIG_SUBJ[k] = window.FIGS[k].subj || '';
  });
})();
```

**تنبيه:** id السهم يختلف لكل ملف:
- figs-phy.js → figArrow_phy
- figs-bio.js → figArrow_bio
- figs-chem.js → figArrow_chem
- figs-math.js → figArrow_math
- figs-arabic.js → figArrow_arabic
- figs-eng.js → figArrow_eng

---

## معايير جودة SVG (إلزامية)

```
• viewBox="0 0 300 200" (أو 300x300 للمربعة)
• font-family="system-ui, Arial, sans-serif"
• الألوان الرئيسية: #2f7d5b (أخضر) للتمييز، #555 للبنية، #c0563f (أحمر) للتنبيهات
• font-size="12" للتسميات، font-size="14" للعناوين
• النصوص العربية: direction="rtl" text-anchor="end" أو "middle"
• الأسهم: marker-end="url(#figArrow_phy)"
• لا تزاحم — مسافات كافية بين العناصر
• كل SVG أقل من 8KB — لا صور base64
• الخطوط المنقّطة: stroke-dasharray="5,4"
```

---

## أمثلة على جودة الرسم

### مثال 1 — أحكام النون الساكنة (عربي)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260">
  <!-- مركز -->
  <rect x="130" y="110" width="100" height="40" rx="8" fill="#2f7d5b"/>
  <text x="180" y="135" text-anchor="middle" fill="white"
        font-size="12" font-family="system-ui">ن الساكنة / التنوين</text>
  <!-- فرع: الإظهار -->
  <line x1="180" y1="110" x2="80" y2="60" stroke="#555" stroke-width="1.5"
        marker-end="url(#figArrow_arabic)"/>
  <rect x="20" y="38" width="80" height="28" rx="6" fill="#d7ebe0"/>
  <text x="60" y="57" text-anchor="middle" font-size="11"
        font-family="system-ui" fill="#1a5c3a">الإظهار الحلقي</text>
  <!-- فرع: الإدغام -->
  <line x1="230" y1="110" x2="290" y2="60" stroke="#555" stroke-width="1.5"
        marker-end="url(#figArrow_arabic)"/>
  <rect x="260" y="38" width="80" height="28" rx="6" fill="#faf0d4"/>
  <text x="300" y="57" text-anchor="middle" font-size="11"
        font-family="system-ui" fill="#8a6d1f">الإدغام</text>
  <!-- فرع: الإقلاب -->
  <line x1="155" y1="150" x2="80" y2="200" stroke="#555" stroke-width="1.5"
        marker-end="url(#figArrow_arabic)"/>
  <rect x="20" y="192" width="80" height="28" rx="6" fill="#f6ddd6"/>
  <text x="60" y="211" text-anchor="middle" font-size="11"
        font-family="system-ui" fill="#8a3020">الإقلاب</text>
  <!-- فرع: الإخفاء -->
  <line x1="205" y1="150" x2="280" y2="200" stroke="#555" stroke-width="1.5"
        marker-end="url(#figArrow_arabic)"/>
  <rect x="260" y="192" width="80" height="28" rx="6" fill="#efe9dd"/>
  <text x="300" y="211" text-anchor="middle" font-size="11"
        font-family="system-ui" fill="#27231d">الإخفاء الحقيقي</text>
</svg>
```

### مثال 2 — الأعداد التخيلية (رياضيات)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220">
  <!-- محاور -->
  <line x1="20" y1="110" x2="280" y2="110" stroke="#333" stroke-width="1.5"
        marker-end="url(#figArrow_math)"/>
  <line x1="150" y1="200" x2="150" y2="20" stroke="#333" stroke-width="1.5"
        marker-end="url(#figArrow_math)"/>
  <!-- تسمية المحاور -->
  <text x="272" y="125" font-size="12" font-family="system-ui" fill="#555">Re</text>
  <text x="155" y="18" font-size="12" font-family="system-ui" fill="#555">Im</text>
  <!-- النقطة z = 3+2i -->
  <circle cx="220" cy="70" r="5" fill="#2f7d5b"/>
  <text x="228" y="66" font-size="11" font-family="system-ui" fill="#2f7d5b">z=3+2i</text>
  <!-- خطوط المكوّنين -->
  <line x1="150" y1="70" x2="220" y2="70" stroke="#c0563f" stroke-dasharray="4,3" stroke-width="1.5"/>
  <line x1="220" y1="110" x2="220" y2="70" stroke="#2f7d5b" stroke-dasharray="4,3" stroke-width="1.5"/>
  <!-- a على المحور الحقيقي -->
  <text x="185" y="125" text-anchor="middle" font-size="11" font-family="system-ui" fill="#c0563f">a=3</text>
  <!-- bi على المحور التخيلي -->
  <text x="235" y="92" font-size="11" font-family="system-ui" fill="#2f7d5b">bi=2i</text>
  <!-- متجه z -->
  <line x1="150" y1="110" x2="220" y2="70" stroke="#8a8172" stroke-width="2"
        marker-end="url(#figArrow_math)"/>
  <!-- زاوية theta -->
  <path d="M 170 110 A 20 20 0 0 0 165 93" fill="none" stroke="#d8a53a" stroke-width="1.5"/>
  <text x="168" y="100" font-size="10" font-family="system-ui" fill="#d8a53a">θ</text>
</svg>
```

### مثال 3 — المتسعة (فيزياء)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <!-- اللوح الموجب -->
  <rect x="80" y="30" width="12" height="140" rx="3" fill="#c0563f"/>
  <text x="72" y="25" text-anchor="middle" font-size="14"
        font-family="system-ui" fill="#c0563f">+</text>
  <!-- اللوح السالب -->
  <rect x="208" y="30" width="12" height="140" rx="3" fill="#2f7d5b"/>
  <text x="230" y="25" text-anchor="middle" font-size="14"
        font-family="system-ui" fill="#2f7d5b">−</text>
  <!-- خطوط المجال (3 خطوط متوازية) -->
  <line x1="92" y1="60" x2="208" y2="60" stroke="#8a8172" stroke-width="1.5"
        marker-end="url(#figArrow_phy)"/>
  <line x1="92" y1="100" x2="208" y2="100" stroke="#8a8172" stroke-width="1.5"
        marker-end="url(#figArrow_phy)"/>
  <line x1="92" y1="140" x2="208" y2="140" stroke="#8a8172" stroke-width="1.5"
        marker-end="url(#figArrow_phy)"/>
  <!-- تسمية E -->
  <text x="150" y="88" text-anchor="middle" font-size="12"
        font-family="system-ui" fill="#555">E</text>
  <!-- المسافة d -->
  <line x1="92" y1="175" x2="208" y2="175" stroke="#555" stroke-width="1"
        marker-start="url(#figArrow_phy)" marker-end="url(#figArrow_phy)"/>
  <text x="150" y="190" text-anchor="middle" font-size="11"
        font-family="system-ui" fill="#555">d</text>
</svg>
```

---

## قائمة المواضيع المطلوبة (بالأولوية)

### الفيزياء — ابدأ هنا

```
الفصل 1: المجال الكهربائي
  - خطوط المجال حول شحنتين (موجبة + سالبة)
  - سطح غاوس الكروي حول شحنة
  - المتسعة (اللوحان + المجال + الشحنة + d)
  - دائرة RC (مقاومة + متسعة + مصدر)

الفصل 2: التيار الكهربائي المستمر
  - مقاومات على التسلسل والتوازي في دائرة
  - تقاطع كيرشهوف (جمع التيارات = صفر)
  - منحنى V-I (أومي وغير أومي)

الفصل 3: المجال المغناطيسي
  - قاعدة اليد اليمنى — موصل مستقيم
  - خطوط المجال حول ملف دائري
  - مسار جسيم مشحون في مجال مغناطيسي

الفصل 4: الحث الكهرومغناطيسي
  - قانون فاراداي (تغير الفيض في ملف)
  - المحوّل (لفّتان + قلب حديدي + السهام)

الفصل 5: الضوء
  - انعكاس على مرآة مقعّرة (الأشعة الثلاثة)
  - انكسار عند سطح فاصل (زاوية السقوط + الانكسار)
  - العدسة المحدبة (الأشعة الثلاثة + البؤرة + الصورة)
```

### الأحياء — الثاني

```
الفصل 1: الوراثة
  - قانون مندل الأول (مربع بانيت Aa × Aa)
  - قانون مندل الثاني (مربع بانيت ثنائي AaBb × AaBb)
  - انتقال الصفات المرتبطة بالجنس (X-linked)

الفصل 2: التكاثر
  - الانقسام الميوزي (8 مراحل — profase I إلى telophase II)
  - الانقسام الخيطي (4 مراحل)

الفصل 3: الأيض
  - مراحل التنفس الهوائي (الهدم → كريبس → سلسلة نقل الإلكترون)
  - مخطط البناء الضوئي (الطور الضوئي + المظلم)

الفصل 4: الميكروبيولوجيا
  - بناء الفيروس (capsid + nucleic acid + tail)
  - الانشطار الثنائي البكتيري (المراحل)
```

### الكيمياء — الثالث

```
الفصل 1: الحركية والاتزان
  - منحنى طاقة التفاعل (طاقة التنشيط، حالة الانتقال، ΔH)
  - تأثير درجة الحرارة على سرعة التفاعل
  - مبدأ لوشاتيليه (إزاحة الاتزان)

الفصل 2: الكهروكيمياء
  - خلية غلفانية (قطبان + جسر ملحي + اتجاه الإلكترونات)
  - خلية التحليل الكهربائي (قطبان + مصدر خارجي)

الفصل 3: العضوية
  - سلسلة الألكانات (CH4 → C4H10) — بنية مبسطة
  - حلقة البنزين (بنيتا كيكولي)
```

### الرياضيات — الرابع

```
الفصل 1: الأعداد التخيلية
  - المستوى المركّب (محور حقيقي + تخيلي + نقطة z + المثلث)
  - الصيغة القطبية r(cosθ + i sinθ)

الفصل 2: القطوع المخروطية
  - القطع المكافئ (الرأس، محور التماثل، الفتح)
  - القطع الناقص (البؤرتان، الوتر الأكبر/الأصغر)
  - القطع الزائد (البؤرتان، المقاربتان المنقّطتان)
  - الدائرة (المركز، النصف قطر)

الفصل 3: المشتق والتكامل
  - تفسير هندسي للمشتق (مماس المنحنى عند نقطة)
  - المساحة تحت المنحنى (منطقة مظللة)
```

### العربية — الخامس

```
التجويد:
  - أحكام النون الساكنة والتنوين (4 فروع — مخطط شعاعي)
  - أحكام الميم الساكنة (3 أحكام)
  - المدود وأنواعها (جدول)

النحو:
  - الجملة الاسمية والفعلية (مخطط التحليل)
  - أنواع الخبر (مفرد، جملة، شبه جملة)
  - المفعول به ونائبه
```

### الإنكليزية — السادس

```
- Passive Voice (Active → Passive — مخطط التحويل)
- Conditional Sentences (Types 1, 2, 3 — خط زمني)
- Reported Speech (statement/question/command)
- Modal Verbs (جدول الاستخدامات)
```

---

## ملف الفهرس (إلزامي بعد الانتهاء)

```json
{
  "generated": "2026-10-17",
  "total": 0,
  "subjects": {
    "الفيزياء": [
      {
        "key": "electricField_lines",
        "title": "خطوط المجال الكهربائي",
        "chapter": "الفصل الأول",
        "svg_file": "svgs/فيزياء/ف1_المجال_الكهربائي_رسم1.svg",
        "js_file": "figs-phy.js",
        "parts_count": 3,
        "steps_count": 3
      }
    ]
  }
}
```

---

## التحقق الذاتي قبل التسليم

```js
// node check-figs.js
const fs = require('fs');
const vm = require('vm');
const files = ['figs-phy.js','figs-bio.js','figs-chem.js','figs-math.js','figs-arabic.js','figs-eng.js'];
const ctx = { window: {} };
vm.createContext(ctx);
files.filter(f => fs.existsSync(f)).forEach(f => {
  vm.runInContext(fs.readFileSync(f,'utf8'), ctx);
});
const figs = ctx.window.FIGS || {};
let errors = [];
Object.entries(figs).forEach(([k,v]) => {
  if(!v.title)   errors.push(k + ': missing title');
  if(!v.svg)     errors.push(k + ': missing svg');
  if(!v.parts || v.parts.length===0) errors.push(k + ': empty parts');
  if(!v.steps || v.steps.length===0) errors.push(k + ': empty steps');
  if(!v.subj)    errors.push(k + ': missing subj');
  if(!v.chapter) errors.push(k + ': missing chapter');
  if(v.svg.length > 8192) errors.push(k + ': svg too large (>8KB)');
});
if(errors.length){console.error('ERRORS:\n'+errors.join('\n'));process.exit(1);}
console.log('OK: All', Object.keys(figs).length, 'figures valid');
```

---

## التسليم لـ Claude

أعطِ Claude:
1. مجلد `svgs/` بكل الملفات
2. ملفات `figs-phy.js, figs-bio.js, figs-chem.js, figs-math.js, figs-arabic.js, figs-eng.js`
3. ملف `figs-index.json`
4. ناتج سكريبت التحقق (`OK: All X figures valid`)

Claude يستلم ويدمج بدون أن يقرأ كل SVG على حدة.
