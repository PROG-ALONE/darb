# رسالة للتسليم لـ Claude (جلسة جديدة)

**اقرأ أولًا:** `CONTEXT.md` (سياق جلسة `session_01HnDzHUsTgXr97iS7KqT21R`) + `OPENCODE-DELIVERY.md`

**ما أنجزه opencode (مكتمل للتشغيل):**
- `math-viz/` — 11 HTML تفاعلي + `content/mathviz.js` + دمج `mathvizHTML()` في `index.html`
- `content/figs-phy2-full.js` — 69 رسم فيزيائي (النمط الصحيح: ADD + Object.assign + figArrow_phy2)
- `content/figs-phy.js`, `figs-bio.js`, `figs-chem.js`, `figs-math.js`, `figs-arabic.js`, `figs-eng.js`
- `svgs/` — 143 SVG (فيزياء 101 + كيمياء 28 + أحياء 5 + رياضيات 5 + عربي 2 + إنجليزي 2)
- `figs-index.json` — مطابق للفهرس الرسمي من `السادس الاعدادي/فهارس السادس العلمي — للموافقة.md`
- `sw.js` — `darb-v61` + `content/mathviz.js` في CORE
- `index.html` — `<script>` لكل `figs-*.js` + `case 'mathviz'`

**المطلوب منك الآن (حسب CONTEXT.md):**
1. اقرأ `CONTEXT.md` كاملاً
2. اقرأ `OPENCODE-DELIVERY.md` + `figs-todo.json`
3. تحقق من `window.FIGS` عبر `node -e "vm..."` (من `OPENCODE-FIGS.md`)
4. افحص التطبيق **كطالب سادس:** يوم 1 → أكمل أسبوعًا سريعًا → تحقق من وصول المعدل 99 → تأكد كل الرسوم تظهر → لا روابط مكسورة
5. `commit` فقط بعد موافقة صريحة

**قواعد صارمة:** لا مصدر → لا اختراع للمحتوى؛ `PAT` لا يُنشر؛ Attribution:
```
Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01HnDzHUsTgXr97iS7KqT21R
```

**ملاحظة:** 344 موضوعًا من الكتاب الرسمي؛ الرسوم الحالية تغطي كل فصول الكتب (فيزياء 9 / كيمياء 8 / رياضيات 6 / أحياء 5 / عربي 10 / إنجليزي 8). إذا أردت اكتمال كل موضوع رسمًا مفصلًا، استخدم `python3 /tmp/gen_all_figs.py` على باقي `figs-todo.json`. النظام يعمل الآن.
