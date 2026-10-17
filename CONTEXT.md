# دَرْب — CONTEXT.md
> **آخر تحديث:** أكتوبر 2026  
> **الجلسة:** claude.ai/code/session_01HnDzHUsTgXr97iS7KqT21R  
> **الملف الرئيسي:** `index.html` (~6500 سطر) + `content/` + `sw.js`

---

## ما المشروع؟

**دَرْب** — تطبيق PWA مجاني لطلاب السادس الإعدادي العلمي في العراق.  
ملف واحد `index.html` يحتوي كل JS+CSS. المحتوى في `content/*.js` يُحمَّل بـ `<script>`.  
مستضاف على GitHub Pages. يعمل بدون إنترنت (Service Worker).

---

## الحالة الحالية — ما تم إنجازه

### ما اكتمل هذه الجلسة

| البند | الملف |
|-------|--------|
| حذف المحاكاة الكاملة (minsim) | index.html |
| تبسيط صفحة الاختبارات | index.html |
| تبويبات عصرية (segmented) | index.html |
| توزيع الخطة بطريقتين (تلقائي + يدوي + سحب) | index.html |
| حذف/نقل مواضيع يدوياً (أسبوعي + يومي) | index.html |
| إزالة تكرار البنك في المكتبة | index.html |
| دمج أزرار التصدير | index.html |
| export handlers جديدة (expSubjNb, expSubjRep, expZipAll) | index.html |
| سباق المعدّل avgRace (بدل نقاط — مرتبة + رقم قياسي + sparkline) | index.html |
| figs-4.js — أحياء (3 رسوم وزارية) | content/figs-4.js |
| إصلاح figs-5.js (FIG_DEFS) | content/figs-5.js |
| رفع CACHE إلى darb-v60 | sw.js |

### جاهز غير مربوط

| الملف | المحتوى | الإجراء |
|--------|----------|---------|
| `/home/claude/figs-6.js` | 8 رسوم شارحة مفاتيحها موجودة في content/ | أضف `<script src="content/figs-6.js">` في index.html |

---

## هيكل الرسوم الشارحة (نظام FIGS)

```js
window.FIGS['keyName'] = {
  title: 'عنوان الرسم',
  teaches: 'ماذا يشرح هذا الرسم',
  subj: 'اسم المادة',
  chapter: 'الفصل',
  svg: `<svg>…</svg>`,
  parts: [{ id: '1', label: 'اسم الجزء', note: 'شرح مختصر' }],
  steps: ['الخطوة الأولى…']
}
```

ملفات الرسوم: figs.js / figs-2.js / figs-3.js / figs-4.js / figs-5.js (كلها في content/)

كيف يُدمج ملف رسوم جديد:
```js
;(function(){
  if(!window.FIGS) window.FIGS={};
  if(!window.FIG_SUBJ) window.FIG_SUBJ={};
  const DEFS = `<defs><marker id="figArrow7" …></marker></defs>`;
  const defsNow = window.FIG_DEFS || '';
  window.FIG_DEFS = defsNow.indexOf('figArrow7') >= 0 ? defsNow : defsNow + DEFS;
  window.FIGS['keyName'] = { … };
  Object.keys(window.FIGS).forEach(k => {
    if(!window.FIG_SUBJ[k]) window.FIG_SUBJ[k] = window.FIGS[k].subj || '';
  });
})();
```

كيف يُستدعى الرسم في المحتوى:
```js
{ t:'fig', k:'keyName' }
```

---

## ما تبقى (مهام opencode)

1. **الرسوم الشارحة** — انظر `OPENCODE-FIGS.md`
2. **الرسوم التفاعلية** — انظر `OPENCODE-MATHVIZ.md`

بعد تسليم opencode للرسوم، تعود لـ Claude (claude.ai) ليدمجها في النظام.

---

## للجلسة الجديدة — ابدأ من هنا

opencode أنجز الرسوم. مهمتك يا Claude:
1. اقرأ هذا الملف كاملاً
2. اقرأ ناتج opencode (figs-phy.js, figs-bio.js, … + mathviz/)
3. دمج كل SVG في بنية FIGS الصحيحة
4. أضف script tags في index.html
5. ارفع CACHE في sw.js
6. **افحص التطبيق كطالب سادس:** ابدأ أول يوم → أكمل أسبوعاً بسرعة → تحقق من أن معدّل 99 قابل للوصول → تأكد أن كل الرسوم تظهر → لا روابط مكسورة

---

## قواعد العمل الصارمة

```
لا مصدر → لا اختراع للمحتوى
PAT (git credentials) لا يُنشر أبداً
commit فقط بعد موافقة صريحة
Attribution:
  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01HnDzHUsTgXr97iS7KqT21R
```

---

## graphify

شُغِّل على المشروع — الناتج في graphify-out/
- graph.json — الرسم البياني للتبعيات
- GRAPH_REPORT.md — تقرير المجتمعات
- index.html مركز — يستدعي كل content/*.js
- مجتمعات: UI core / exam engine / plan engine / figs system
