# تسليم opencode لـ Claude (جلسة جديدة)

> وفق CONTEXT.md: "opencode أنجز الرسوم. مهمتك يا Claude: 1) اقرأ هذا الملف 2) اقرأ ناتج opencode 3) دمج SVG في FIGS 4) أضف script tags 5) ارفع CACHE 6) افحص كطالب سادس"

## ما أنجزه opencode

### 1. الرسوم التفاعلية (OPENCODE-MATHVIZ.md)
- `math-viz/`: 11 ملف HTML مستقل (parabola, ellipse, hyperbola, circle, complex_plane, derivative_tangent, capacitor, rc_circuit, optics_lens, projectile, wave_interference)
- `math-viz/mathviz-index.json`: فهرس JSON بـ 11 عنصر
- `content/mathviz.js`: 58KB، يضم كل HTML كسلاسل `window.MATHVIZ['key']`
- التصميم: RTL، ألوان النظام (#f4f1ea / #2f7d5b / #c0563f / #d8a53a)، canvas/SVG محسوب بـ JS، لا مكتبات خارجية، يعمل داخل iframe `srcdoc`

### 2. الرسوم الشارحة (OPENCODE-FIGS.md)
- `svgs/`: 143 SVG (فيزياء 101 + أحياء 5 + كيمياء 28 + رياضيات 5 + عربي 2 + إنجليزي 2)
- كل SVG: viewBox="0 0 300 200"، font-family="system-ui, Arial, sans-serif"، ألوان النظام، RTL للنصوص العربية، `marker-end="url(#figArrow_...)"`
- `content/figs-phy.js` + `figs-bio.js` + `figs-chem.js` + `figs-math.js` + `figs-arabic.js` + `figs-eng.js`: جميعها وفق بنية FIGS (DEFS + window.FIGS + FIG_SUBJ)
- `figs-index.json`: فهرس يطابق الفصول الرسمية من `السادس الاعدادي/فهارس السادس العلمي — للموافقة.md`

### 3. الدمج في index.html
- `<script src="content/mathviz.js">` + `<script src="content/figs-phy.js">` ... (6 ملفات)
- `case 'mathviz': return mathvizHTML(b.k);` في `blockHTML()`
- `function mathvizHTML(k)` تضمن `iframe srcdoc="..." sandbox="allow-scripts"`

### 4. sw.js
- `CACHE = 'darb-v61'` (من v60)
- `content/mathviz.js` مضاف لـ CORE

### 5. التحقق ضد الكتاب الرسمي
- الفهارس الرسمية (PDF + .md) في `السادس الاعدادي/`
- الفيزياء: 9 فصول (المتسعات، الحث، التيار المتناوب، الموجات، البصريات، الكم، إلكترونيات، أطياف، نووية)
- الأحياء: 5 فصول (الوراثة، التكاثر، الأيض، الميكروبيولوجيا، تطور)
- الرياضيات: 6 فصول (أعداد مركبة، قطوع، تفاضل، تكامل، معادلات تفاضلية، هندسة فضائية)
- الكيمياء: 8 فصول (ثرموداينمك، اتزان، أيوني، تأكسد، تنسقي، تحليلي، عضوي، حياتي)
- العربية: 10 وحدات (تجويد، نحو، بلاغة)
- الإنكليزي: 8 وحدات + أدب

## ما بقي لـ Claude (انتقل إليه)
1. قراءة `CONTEXT.md` كاملاً (تم)
2. قراءة ناتج opencode (هذا الملف + الملفات أعلاه)
3. دمج SVG في بنية FIGS الصحيحة (تم عبر `figs-*.js`)
4. التحقق من كل `figs-*.js` بـ `node -e` (من `OPENCODE-FIGS.md` — يتطلب `vm`)
5. فتح `index.html` كطالب سادس: يوم 1 → أسبوع سريع → تحقق من الوصول لمعدل 99 → كل الرسوم تظهر → لا روابط مكسورة
6. commit فقط بعد موافقة صريحة (حسب القواعد)

## Attribution
- Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
- Claude-Session: https://claude.ai/code/session_01HnDzHUsTgXr97iS7KqT21R
- Session: opencode delivery complete — awaiting Claude.ai integration + student-journey verification.
