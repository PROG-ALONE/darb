/* content/figs-fix.js — الرسوم الثمانية المكسورة
 * نمط التسجيل: Object.assign عبر setter، لا كتابة بالمفتاح المباشر
 * المرجع: OPENCODE-FIX-BRIEF.md § 2
 */
;(function(){

  /* ── 1. تعريف السهم (id فريد لهذا الملف) ─────────────────────── */
  var DEFS = '<defs>'
    + '<marker id="figArrow_fix" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">'
    + '<path d="M0,0 L0,6 L8,3 z" fill="#555"/>'
    + '</marker>'
    + '</defs>';
  window.FIG_DEFS = (window.FIG_DEFS||'').indexOf('figArrow_fix') >= 0
    ? window.FIG_DEFS
    : (window.FIG_DEFS||'') + DEFS;

  /* ── 2. الرسوم في كائن محلي ───────────────────────────────────── */
  var ADD = {};

  /* ■ 1/8  istifhamNida — الاستفهام والنداء (اللغة العربية ص 8–9) */
  ADD['istifhamNida'] = {
    title: 'الاستفهام والنداء — مقارنة',
    teaches: 'الفرق بين أسلوبي الاستفهام والنداء وعناصر كل منهما',
    subj: 'اللغة العربية',
    chapter: 'أسلوب الاستفهام ونوعاه',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" font-family="system-ui,Arial,sans-serif" direction="rtl">'
      + (window.FIG_DEFS||'')
      /* عنوان */
      + '<text x="150" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#2f7d5b">الاستفهام والنداء</text>'
      /* عمود الاستفهام */
      + '<rect x="10" y="30" width="130" height="30" rx="5" fill="#e8f5e9" stroke="#2f7d5b" stroke-width="1.5"/>'
      + '<text x="75" y="50" text-anchor="middle" font-size="12" font-weight="bold" fill="#2f7d5b">الاستفهام</text>'
      + '<text x="75" y="75" text-anchor="middle" font-size="10" fill="#555">طلب معرفة الحكم</text>'
      + '<text x="75" y="92" text-anchor="middle" font-size="10" fill="#c0563f">هل / أدوات الاستفهام</text>'
      + '<rect x="15" y="100" width="55" height="25" rx="4" fill="#fff8e1" stroke="#d8a53a" stroke-width="1"/>'
      + '<text x="42" y="117" text-anchor="middle" font-size="10" fill="#555">تصديقي</text>'
      + '<rect x="75" y="100" width="60" height="25" rx="4" fill="#fff8e1" stroke="#d8a53a" stroke-width="1"/>'
      + '<text x="105" y="117" text-anchor="middle" font-size="10" fill="#555">تعييني</text>'
      + '<text x="42" y="140" text-anchor="middle" font-size="9" fill="#666">جوابه: نعم/لا</text>'
      + '<text x="105" y="140" text-anchor="middle" font-size="9" fill="#666">جوابه: تعيين</text>'
      /* عمود النداء */
      + '<rect x="160" y="30" width="130" height="30" rx="5" fill="#fce4ec" stroke="#c0563f" stroke-width="1.5"/>'
      + '<text x="225" y="50" text-anchor="middle" font-size="12" font-weight="bold" fill="#c0563f">النداء</text>'
      + '<text x="225" y="75" text-anchor="middle" font-size="10" fill="#555">طلب الإقبال بالصوت</text>'
      + '<text x="225" y="92" text-anchor="middle" font-size="10" fill="#c0563f">يا / أيا / هيا / أَ / أيْ</text>'
      + '<rect x="165" y="100" width="55" height="25" rx="4" fill="#f3e5f5" stroke="#9c27b0" stroke-width="1"/>'
      + '<text x="192" y="117" text-anchor="middle" font-size="10" fill="#555">نادٍ</text>'
      + '<rect x="225" y="100" width="60" height="25" rx="4" fill="#f3e5f5" stroke="#9c27b0" stroke-width="1"/>'
      + '<text x="255" y="117" text-anchor="middle" font-size="10" fill="#555">منادى</text>'
      + '<text x="192" y="140" text-anchor="middle" font-size="9" fill="#666">المتكلم</text>'
      + '<text x="255" y="140" text-anchor="middle" font-size="9" fill="#666">المخاطَب</text>'
      /* فاصل */
      + '<line x1="150" y1="28" x2="150" y2="165" stroke="#ccc" stroke-width="1" stroke-dasharray="4,3"/>'
      /* مثال */
      + '<text x="75" y="165" text-anchor="middle" font-size="10" fill="#2f7d5b">هل أنجزتَ واجبك؟</text>'
      + '<text x="225" y="165" text-anchor="middle" font-size="10" fill="#c0563f">يا محمدُ أقبِل!</text>'
      + '<text x="150" y="190" text-anchor="middle" font-size="9" fill="#999">مصدر: الكتاب المدرسي ص8–9</text>'
      + '</svg>',
    parts: [
      { id: 'p1', label: 'الاستفهام التصديقي', note: 'يُطلب فيه التصديق — جوابه نعم أو لا' },
      { id: 'p2', label: 'الاستفهام التعييني', note: 'يُطلب فيه تعيين أحد الأمرين أو الأمور' },
      { id: 'p3', label: 'النداء — النادي', note: 'المتكلم الذي يطلب الإقبال' },
      { id: 'p4', label: 'النداء — المنادى', note: 'المخاطَب المُستدعى بحرف النداء' }
    ],
    steps: [
      'الاستفهام طلب الإفهام؛ ويُقسم إلى تصديقي (جوابه نعم/لا) وتعييني (جوابه تعيين أحد الأمرين).',
      'النداء طلب الإقبال بالصوت؛ يتكون من نادٍ ومنادى وأداة نداء (يا وأخواتها).',
      'أدوات الاستفهام: هل، الهمزة، مَن، ما، ماذا، متى، أين، كيف، كم، أيّ.',
      'أدوات النداء: يا (الأكثر شيوعاً)، أيا، هيا، أَ، أيْ.'
    ]
  };

  /* ■ 2/8  i3rabSentence — إعراب أسماء الاستفهام (ص 13–16) */
  ADD['i3rabSentence'] = {
    title: 'إعراب أسماء الاستفهام',
    teaches: 'إعراب (مَن / ما / ماذا / أيّ) حسب موضعها من الجملة',
    subj: 'اللغة العربية',
    chapter: 'إعراب أسماء الاستفهام',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" font-family="system-ui,Arial,sans-serif" direction="rtl">'
      /* عنوان */
      + '<text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#2f7d5b">إعراب أسماء الاستفهام</text>'
      /* رأس الجدول */
      + '<rect x="5" y="24" width="290" height="20" fill="#2f7d5b"/>'
      + '<text x="148" y="38" text-anchor="middle" font-size="10" fill="#fff">الاسم</text>'
      + '<text x="55" y="38" text-anchor="middle" font-size="10" fill="#fff">موضعه</text>'
      + '<text x="235" y="38" text-anchor="middle" font-size="10" fill="#fff">إعرابه</text>'
      /* صفوف */
      + '<rect x="5" y="44" width="290" height="18" fill="#f1f8e9"/>'
      + '<text x="148" y="57" text-anchor="middle" font-size="10" fill="#333">مَن</text>'
      + '<text x="55" y="57" text-anchor="middle" font-size="9" fill="#555">فاعل / مبتدأ / خبر</text>'
      + '<text x="235" y="57" text-anchor="middle" font-size="9" fill="#555">مبني على السكون</text>'
      + '<rect x="5" y="62" width="290" height="18" fill="#fff"/>'
      + '<text x="148" y="75" text-anchor="middle" font-size="10" fill="#333">ما</text>'
      + '<text x="55" y="75" text-anchor="middle" font-size="9" fill="#555">فاعل / مفعول / مبتدأ</text>'
      + '<text x="235" y="75" text-anchor="middle" font-size="9" fill="#555">مبني على السكون</text>'
      + '<rect x="5" y="80" width="290" height="18" fill="#f1f8e9"/>'
      + '<text x="148" y="93" text-anchor="middle" font-size="10" fill="#333">ماذا</text>'
      + '<text x="55" y="93" text-anchor="middle" font-size="9" fill="#555">مفعول به / مبتدأ</text>'
      + '<text x="235" y="93" text-anchor="middle" font-size="9" fill="#555">مبني على السكون</text>'
      + '<rect x="5" y="98" width="290" height="18" fill="#fff"/>'
      + '<text x="148" y="111" text-anchor="middle" font-size="10" fill="#333">أيّ</text>'
      + '<text x="55" y="111" text-anchor="middle" font-size="9" fill="#555">حسب موقعها</text>'
      + '<text x="235" y="111" text-anchor="middle" font-size="9" fill="#555">معربة بالحركات</text>'
      /* مثال */
      + '<rect x="5" y="120" width="290" height="40" rx="4" fill="#e8f5e9" stroke="#2f7d5b" stroke-width="1"/>'
      + '<text x="150" y="135" text-anchor="middle" font-size="11" fill="#2f7d5b">مَن درسَ؟ ← فاعل مبني على السكون</text>'
      + '<text x="150" y="152" text-anchor="middle" font-size="11" fill="#c0563f">أيَّ كتابٍ قرأتَ؟ ← مفعول به منصوب</text>'
      /* خط فاصل */
      + '<line x1="5" y1="44" x2="295" y2="44" stroke="#2f7d5b" stroke-width="1"/>'
      + '<line x1="118" y1="24" x2="118" y2="116" stroke="#bbb" stroke-width="0.8"/>'
      + '<line x1="178" y1="24" x2="178" y2="116" stroke="#bbb" stroke-width="0.8"/>'
      + '<text x="150" y="192" text-anchor="middle" font-size="9" fill="#999">مصدر: الكتاب المدرسي ص13–16</text>'
      + '</svg>',
    parts: [
      { id: 'p1', label: 'مَن / ما / ماذا', note: 'مبنية على السكون في محل حسب الموقع' },
      { id: 'p2', label: 'أيّ', note: 'معربة بالحركات حسب موقعها من الجملة' }
    ],
    steps: [
      'أسماء الاستفهام (مَن، ما، ماذا) مبنية على السكون وتُعرب في محل رفع أو نصب أو جر حسب موضعها.',
      'أيّ معربة بالحركات: تُرفع وتُنصب وتُجر حسب موقعها في الجملة.',
      'لتحديد إعراب اسم الاستفهام: احذفه واستبدله باسم ظاهر وأعرب الاسم الظاهر.'
    ]
  };

  /* ■ 3/8  jumlaTypes — أنواع الجملة وتحولها إلى استفهام (ص 21–23، 31) */
  ADD['jumlaTypes'] = {
    title: 'أنواع الجملة وتحويلها إلى استفهام',
    teaches: 'تمييز الجملة الاسمية والفعلية وكيفية تحويلها إلى أسلوب استفهامي',
    subj: 'اللغة العربية',
    chapter: 'خلاصة القواعد وتحويل الجمل إلى استفهام',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" font-family="system-ui,Arial,sans-serif" direction="rtl">'
      /* عنوان */
      + '<text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#2f7d5b">أنواع الجملة</text>'
      /* اسمية */
      + '<rect x="10" y="25" width="125" height="80" rx="6" fill="#e8f5e9" stroke="#2f7d5b" stroke-width="1.5"/>'
      + '<text x="72" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#2f7d5b">الجملة الاسمية</text>'
      + '<text x="72" y="58" text-anchor="middle" font-size="10" fill="#555">تبدأ باسم</text>'
      + '<text x="72" y="72" text-anchor="middle" font-size="10" fill="#555">مبتدأ + خبر</text>'
      + '<text x="72" y="90" text-anchor="middle" font-size="10" fill="#c0563f">الطالبُ مجتهدٌ</text>'
      /* فعلية */
      + '<rect x="165" y="25" width="125" height="80" rx="6" fill="#fce4ec" stroke="#c0563f" stroke-width="1.5"/>'
      + '<text x="227" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#c0563f">الجملة الفعلية</text>'
      + '<text x="227" y="58" text-anchor="middle" font-size="10" fill="#555">تبدأ بفعل</text>'
      + '<text x="227" y="72" text-anchor="middle" font-size="10" fill="#555">فعل + فاعل (+ مفعول)</text>'
      + '<text x="227" y="90" text-anchor="middle" font-size="10" fill="#2f7d5b">نجحَ الطالبُ</text>'
      /* سهم التحويل */
      + '<text x="150" y="125" text-anchor="middle" font-size="10" fill="#d8a53a" font-weight="bold">↓ التحويل إلى استفهام ↓</text>'
      /* مثالان */
      + '<rect x="10" y="133" width="125" height="35" rx="4" fill="#fff8e1" stroke="#d8a53a" stroke-width="1"/>'
      + '<text x="72" y="147" text-anchor="middle" font-size="10" fill="#555">هل الطالبُ مجتهدٌ؟</text>'
      + '<text x="72" y="162" text-anchor="middle" font-size="9" fill="#999">أداة استفهام + جملة</text>'
      + '<rect x="165" y="133" width="125" height="35" rx="4" fill="#fff8e1" stroke="#d8a53a" stroke-width="1"/>'
      + '<text x="227" y="147" text-anchor="middle" font-size="10" fill="#555">هل نجحَ الطالبُ؟</text>'
      + '<text x="227" y="162" text-anchor="middle" font-size="9" fill="#999">هل تُصدّر الفعلية</text>'
      + '<text x="150" y="192" text-anchor="middle" font-size="9" fill="#999">مصدر: الكتاب المدرسي ص21–23، 31</text>'
      + '</svg>',
    parts: [
      { id: 'p1', label: 'الجملة الاسمية', note: 'تبدأ باسم: مبتدأ وخبر' },
      { id: 'p2', label: 'الجملة الفعلية', note: 'تبدأ بفعل: فعل وفاعل ومفعول' },
      { id: 'p3', label: 'التحويل إلى استفهام', note: 'بإضافة أداة استفهام في صدر الجملة' }
    ],
    steps: [
      'الجملة الاسمية تبدأ باسم وتتكون من مبتدأ وخبر.',
      'الجملة الفعلية تبدأ بفعل وتتكون من فعل وفاعل ومفعول به (إن وُجد).',
      'تُحوّل الجملة إلى استفهامية بوضع أداة الاستفهام (هل، أم، مَن…) في صدرها.',
      'مع «هل» لا تدخل إلا على الجملة الفعلية في الغالب؛ أما الهمزة فتدخل على الاسمية والفعلية.'
    ]
  };

  /* ■ 4/8  mafoulBiNaWaibih — المفعول به ونوائبه (ص 92–93) */
  ADD['mafoulBiNaWaibih'] = {
    title: 'المفعول به ونوائبه عند التقديم',
    teaches: 'أنواع ما يقع موقع المفعول به عند حذفه أو تقديمه',
    subj: 'اللغة العربية',
    chapter: 'تقديم المفعول به على فعله',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" font-family="system-ui,Arial,sans-serif" direction="rtl">'
      /* عنوان */
      + '<text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#2f7d5b">المفعول به ونوائبه</text>'
      /* مربع مركزي */
      + '<rect x="100" y="28" width="100" height="30" rx="6" fill="#2f7d5b"/>'
      + '<text x="150" y="48" text-anchor="middle" font-size="11" fill="#fff">المفعول به</text>'
      /* فروع */
      /* ظرف */
      + '<line x1="150" y1="58" x2="50" y2="90" stroke="#555" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<rect x="5" y="90" width="90" height="40" rx="5" fill="#fff8e1" stroke="#d8a53a" stroke-width="1.5"/>'
      + '<text x="50" y="107" text-anchor="middle" font-size="10" font-weight="bold" fill="#d8a53a">الظرف</text>'
      + '<text x="50" y="122" text-anchor="middle" font-size="9" fill="#555">سافرتُ يومَ الجمعةِ</text>'
      /* جار ومجرور */
      + '<line x1="150" y1="58" x2="150" y2="90" stroke="#555" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<rect x="100" y="90" width="100" height="40" rx="5" fill="#fce4ec" stroke="#c0563f" stroke-width="1.5"/>'
      + '<text x="150" y="107" text-anchor="middle" font-size="10" font-weight="bold" fill="#c0563f">الجار والمجرور</text>'
      + '<text x="150" y="122" text-anchor="middle" font-size="9" fill="#555">بالعلمِ نرتقي</text>'
      /* مصدر مؤول */
      + '<line x1="150" y1="58" x2="250" y2="90" stroke="#555" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<rect x="205" y="90" width="90" height="40" rx="5" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>'
      + '<text x="250" y="107" text-anchor="middle" font-size="10" font-weight="bold" fill="#1565c0">المصدر المؤوّل</text>'
      + '<text x="250" y="122" text-anchor="middle" font-size="9" fill="#555">يسرّني أن تنجحَ</text>'
      /* ملاحظة */
      + '<rect x="5" y="142" width="290" height="28" rx="4" fill="#f1f8e9" stroke="#2f7d5b" stroke-width="1"/>'
      + '<text x="150" y="155" text-anchor="middle" font-size="10" fill="#2f7d5b">التقديم للاهتمام أو الاختصاص</text>'
      + '<text x="150" y="168" text-anchor="middle" font-size="10" fill="#555">إياكَ نعبد ← ضمير المفعول متقدم</text>'
      + '<text x="150" y="192" text-anchor="middle" font-size="9" fill="#999">مصدر: الكتاب المدرسي ص92–93</text>'
      + '</svg>',
    parts: [
      { id: 'p1', label: 'الظرف', note: 'يقع موقع المفعول به عند تقديمه (ظرف زمان أو مكان)' },
      { id: 'p2', label: 'الجار والمجرور', note: 'يسد مسد المفعول به في الجملة المتقدمة' },
      { id: 'p3', label: 'المصدر المؤول', note: 'أن + الفعل يؤول بمصدر فيقع موقع المفعول به' }
    ],
    steps: [
      'المفعول به الصريح: اسم منصوب يقع عليه فعل الفاعل مباشرة.',
      'نائب المفعول به قد يكون: ظرفاً، أو جاراً ومجروراً، أو مصدراً مؤولاً.',
      'يُقدَّم المفعول به على فعله للاهتمام أو الاختصاص أو التحقيق.',
      'إذا تقدّم الظرف أو الجار والمجرور أصبحا في محل نصب مفعول به.'
    ]
  };

  /* ■ 5/8  carbonPhotosynthesis — البلاستيدة الخضراء (الأحياء ص 15–19) */
  ADD['carbonPhotosynthesis'] = {
    title: 'البناء الضوئي في البلاستيدة الخضراء',
    teaches: 'دور البلاستيدة الخضراء في تحويل الطاقة الضوئية إلى طاقة كيميائية',
    subj: 'الأحياء',
    chapter: 'العضيات / البلاستيدات',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" font-family="system-ui,Arial,sans-serif" direction="rtl">'
      /* خلفية خضراء فاتحة */
      + '<rect width="300" height="200" fill="#f1f8e9"/>'
      /* بلاستيدة */
      + '<ellipse cx="150" cy="100" rx="80" ry="55" fill="#c8e6c9" stroke="#2f7d5b" stroke-width="2"/>'
      + '<text x="150" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#1b5e20">البلاستيدة الخضراء</text>'
      /* ثايلاكويد */
      + '<rect x="105" y="78" width="90" height="14" rx="7" fill="#4caf50" opacity="0.7"/>'
      + '<text x="150" y="90" text-anchor="middle" font-size="8" fill="#fff">ثايلاكويد (كلوروفيل)</text>'
      /* سدى */
      + '<text x="150" y="112" text-anchor="middle" font-size="9" fill="#2e7d32">السدى (ستروما)</text>'
      /* مدخلات — ماء وضوء */
      + '<text x="35" y="55" text-anchor="middle" font-size="10" fill="#1565c0">ماء</text>'
      + '<text x="35" y="68" text-anchor="middle" font-size="10" fill="#1565c0">H₂O</text>'
      + '<line x1="60" y1="62" x2="90" y2="82" stroke="#1565c0" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<text x="35" y="108" text-anchor="middle" font-size="10" fill="#f57c00">ضوء ☀</text>'
      + '<line x1="62" y1="105" x2="90" y2="100" stroke="#f57c00" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<text x="35" y="145" text-anchor="middle" font-size="10" fill="#555">CO₂</text>'
      + '<line x1="60" y1="143" x2="90" y2="120" stroke="#555" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      /* مخرجات */
      + '<text x="262" y="75" text-anchor="middle" font-size="10" fill="#2f7d5b">سكر</text>'
      + '<text x="262" y="88" text-anchor="middle" font-size="10" fill="#2f7d5b">C₆H₁₂O₆</text>'
      + '<line x1="210" y1="85" x2="238" y2="83" stroke="#2f7d5b" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<text x="262" y="120" text-anchor="middle" font-size="10" fill="#00838f">O₂</text>'
      + '<line x1="210" y1="115" x2="240" y2="118" stroke="#00838f" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      /* معادلة */
      + '<rect x="5" y="162" width="290" height="24" rx="4" fill="#fff" stroke="#2f7d5b" stroke-width="1"/>'
      + '<text x="150" y="178" text-anchor="middle" font-size="10" fill="#2f7d5b">6CO₂ + 6H₂O + ضوء → C₆H₁₂O₆ + 6O₂</text>'
      + '<text x="150" y="197" text-anchor="middle" font-size="8" fill="#999">مصدر: الكتاب المدرسي ص15–19</text>'
      + '</svg>',
    parts: [
      { id: 'p1', label: 'الثايلاكويد', note: 'يحتوي الكلوروفيل — محل تفاعلات الضوء' },
      { id: 'p2', label: 'السدى (ستروما)', note: 'محل دورة كالفن لتثبيت CO₂' },
      { id: 'p3', label: 'المدخلات', note: 'ماء H₂O وثاني أكسيد الكربون CO₂ وطاقة الضوء' },
      { id: 'p4', label: 'المخرجات', note: 'جلوكوز C₆H₁₂O₆ وأكسجين O₂' }
    ],
    steps: [
      'البلاستيدة الخضراء عضية مزدوجة الغشاء توجد في خلايا النبات.',
      'تمتص الكلوروفيل (في الثايلاكويد) الطاقة الضوئية وتستخدمها لتحليل الماء.',
      'يُثبَّت CO₂ في السدى عبر دورة كالفن لإنتاج الجلوكوز.',
      'المعادلة الإجمالية: 6CO₂ + 6H₂O + طاقة ضوء → C₆H₁₂O₆ + 6O₂'
    ]
  };

  /* ■ 6/8  cellularRespiration — التنفس الخلوي (الأحياء ص 29–33) */
  ADD['cellularRespiration'] = {
    title: 'التنفس الخلوي في الميتوكوندريا',
    teaches: 'تحطيم الجلوكوز في الميتوكوندريا لإنتاج ATP (الطاقة)',
    subj: 'الأحياء',
    chapter: 'الأيض الخلوي والتنفس',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" font-family="system-ui,Arial,sans-serif" direction="rtl">'
      /* خلفية */
      + '<rect width="300" height="200" fill="#fff3e0"/>'
      /* ميتوكوندريا */
      + '<ellipse cx="150" cy="100" rx="85" ry="55" fill="#ffe0b2" stroke="#e65100" stroke-width="2"/>'
      /* طيات داخلية */
      + '<path d="M110,80 Q130,100 110,120" fill="none" stroke="#ef6c00" stroke-width="1.5"/>'
      + '<path d="M140,75 Q160,100 140,125" fill="none" stroke="#ef6c00" stroke-width="1.5"/>'
      + '<path d="M170,80 Q190,100 170,120" fill="none" stroke="#ef6c00" stroke-width="1.5"/>'
      + '<text x="150" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#bf360c">الميتوكوندريا</text>'
      + '<text x="150" y="108" text-anchor="middle" font-size="9" fill="#e65100">الطيات الداخلية (كريستا)</text>'
      + '<text x="150" y="120" text-anchor="middle" font-size="9" fill="#e65100">+ الميتريكس</text>'
      /* مدخلات */
      + '<text x="28" y="72" text-anchor="middle" font-size="10" fill="#2f7d5b">جلوكوز</text>'
      + '<text x="28" y="84" text-anchor="middle" font-size="10" fill="#2f7d5b">C₆H₁₂O₆</text>'
      + '<line x1="55" y1="80" x2="82" y2="85" stroke="#2f7d5b" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<text x="28" y="120" text-anchor="middle" font-size="10" fill="#1565c0">O₂</text>'
      + '<line x1="50" y1="118" x2="80" y2="108" stroke="#1565c0" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      /* مخرجات */
      + '<text x="270" y="72" text-anchor="middle" font-size="10" fill="#c0563f">ATP</text>'
      + '<text x="270" y="84" text-anchor="middle" font-size="9" fill="#c0563f">(طاقة)</text>'
      + '<line x1="220" y1="85" x2="245" y2="80" stroke="#c0563f" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<text x="270" y="118" text-anchor="middle" font-size="10" fill="#555">CO₂</text>'
      + '<text x="270" y="130" text-anchor="middle" font-size="10" fill="#1565c0">H₂O</text>'
      + '<line x1="218" y1="110" x2="245" y2="118" stroke="#555" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      /* مراحل */
      + '<rect x="5" y="162" width="290" height="14" rx="3" fill="#fff" stroke="#e65100" stroke-width="1"/>'
      + '<text x="150" y="173" text-anchor="middle" font-size="9" fill="#e65100">تحلل السكر → دورة كريبس → سلسلة نقل الإلكترون → ATP</text>'
      /* معادلة */
      + '<rect x="5" y="178" width="290" height="15" rx="3" fill="#fff8e1"/>'
      + '<text x="150" y="189" text-anchor="middle" font-size="9" fill="#555">C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + طاقة (ATP)</text>'
      + '</svg>',
    parts: [
      { id: 'p1', label: 'الميتوكوندريا', note: 'موقع التنفس الهوائي ومصنع ATP' },
      { id: 'p2', label: 'المدخلات', note: 'جلوكوز وأكسجين' },
      { id: 'p3', label: 'المخرجات', note: 'ATP (طاقة) + CO₂ + H₂O' },
      { id: 'p4', label: 'المراحل', note: 'تحلل السكر → دورة كريبس → سلسلة نقل الإلكترون' }
    ],
    steps: [
      'التنفس الخلوي عملية تحرير الطاقة المختزنة في الجلوكوز داخل الخلية.',
      'تحدث في ثلاث مراحل: تحلل السكر في الهيولى → دورة كريبس → سلسلة نقل الإلكترون في الكريستا.',
      'الناتج: ما يصل إلى 38 جزيء ATP لكل جزيء جلوكوز (التنفس الهوائي).',
      'المعادلة: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP'
    ]
  };

  /* ■ 7/8  cellReproCycle — دورة الخلية والانقسامات (الأحياء ص 34–36) */
  ADD['cellReproCycle'] = {
    title: 'دورة الخلية والانقسام الخلوي',
    teaches: 'مقارنة الانقسام المتساوي والاختزالي في دورة الخلية',
    subj: 'الأحياء',
    chapter: 'الانقسام المباشر والخيطي',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" font-family="system-ui,Arial,sans-serif" direction="rtl">'
      /* دائرة دورة الخلية */
      + '<circle cx="150" cy="95" r="65" fill="none" stroke="#2f7d5b" stroke-width="2" stroke-dasharray="8,4"/>'
      /* G1 */
      + '<text x="150" y="35" text-anchor="middle" font-size="10" font-weight="bold" fill="#2f7d5b">G₁ — النمو الأول</text>'
      /* S */
      + '<text x="215" y="100" text-anchor="start" font-size="10" font-weight="bold" fill="#c0563f">S — تضاعف DNA</text>'
      /* G2 */
      + '<text x="150" y="158" text-anchor="middle" font-size="10" font-weight="bold" fill="#1565c0">G₂ — النمو الثاني</text>'
      /* M */
      + '<text x="40" y="100" text-anchor="end" font-size="10" font-weight="bold" fill="#d8a53a">M — الانقسام</text>'
      /* وسط الدائرة */
      + '<text x="150" y="92" text-anchor="middle" font-size="9" fill="#333">دورة</text>'
      + '<text x="150" y="104" text-anchor="middle" font-size="9" fill="#333">الخلية</text>'
      /* أسهم دورية */
      + '<path d="M150,33 A65,65 0 0,1 212,95" fill="none" stroke="#2f7d5b" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<path d="M212,95 A65,65 0 0,1 150,157" fill="none" stroke="#c0563f" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<path d="M150,157 A65,65 0 0,1 88,95" fill="none" stroke="#1565c0" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<path d="M88,95 A65,65 0 0,1 150,33" fill="none" stroke="#d8a53a" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      /* جدول مقارنة */
      + '<rect x="5" y="168" width="140" height="26" rx="3" fill="#e8f5e9" stroke="#2f7d5b" stroke-width="1"/>'
      + '<text x="75" y="180" text-anchor="middle" font-size="9" font-weight="bold" fill="#2f7d5b">المتساوي (2n→2n)</text>'
      + '<text x="75" y="191" text-anchor="middle" font-size="8" fill="#555">يحافظ على العدد الزوجي</text>'
      + '<rect x="155" y="168" width="140" height="26" rx="3" fill="#fce4ec" stroke="#c0563f" stroke-width="1"/>'
      + '<text x="225" y="180" text-anchor="middle" font-size="9" font-weight="bold" fill="#c0563f">الاختزالي (2n→n)</text>'
      + '<text x="225" y="191" text-anchor="middle" font-size="8" fill="#555">ينصف عدد الصبغيات</text>'
      + '</svg>',
    parts: [
      { id: 'p1', label: 'G₁ — النمو الأول', note: 'الخلية تنمو وتُصنّع البروتينات' },
      { id: 'p2', label: 'S — تضاعف DNA', note: 'نسخ كامل للمادة الوراثية' },
      { id: 'p3', label: 'G₂ — النمو الثاني', note: 'استعداد للانقسام' },
      { id: 'p4', label: 'M — الانقسام', note: 'متساوٍ (2n→2n) أو اختزالي (2n→n)' }
    ],
    steps: [
      'دورة الخلية أربع مراحل: G₁ (نمو) → S (تضاعف DNA) → G₂ (نمو) → M (انقسام).',
      'الانقسام المتساوي: خلية (2n) → خليتان (2n) — يُستخدم في النمو والتجديد.',
      'الانقسام الاختزالي: خلية (2n) → أربع خلايا (n) — يُستخدم في إنتاج الأمشاج.',
      'الانقسام الاختزالي يضمن الحفاظ على عدد الصبغيات ثابتاً عبر الأجيال.'
    ]
  };

  /* ■ 8/8  inheritanceChromosomes — الوراثة المندلية والصبغيات (الأحياء) */
  ADD['inheritanceChromosomes'] = {
    title: 'انتقال الصفات الوراثية عبر الصبغيات',
    teaches: 'كيف تنتقل الصفات الوراثية من الأبوين إلى الأبناء عبر الصبغيات',
    subj: 'الأحياء',
    chapter: 'الوراثة المندلية',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" font-family="system-ui,Arial,sans-serif" direction="rtl">'
      /* خلفية */
      + '<rect width="300" height="200" fill="#f3e5f5"/>'
      /* عنوان */
      + '<text x="150" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#6a1b9a">انتقال الصفات الوراثية</text>'
      /* أب */
      + '<rect x="15" y="28" width="60" height="50" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>'
      + '<text x="45" y="48" text-anchor="middle" font-size="11" fill="#1565c0">الأب</text>'
      + '<text x="45" y="64" text-anchor="middle" font-size="10" fill="#333">Aa Bb</text>'
      + '<text x="45" y="76" text-anchor="middle" font-size="9" fill="#555">(2n=46)</text>'
      /* أم */
      + '<rect x="225" y="28" width="60" height="50" rx="6" fill="#fce4ec" stroke="#c0563f" stroke-width="1.5"/>'
      + '<text x="255" y="48" text-anchor="middle" font-size="11" fill="#c0563f">الأم</text>'
      + '<text x="255" y="64" text-anchor="middle" font-size="10" fill="#333">Aa Bb</text>'
      + '<text x="255" y="76" text-anchor="middle" font-size="9" fill="#555">(2n=46)</text>'
      /* أمشاج */
      + '<rect x="30" y="92" width="30" height="20" rx="3" fill="#bbdefb" stroke="#1565c0" stroke-width="1"/>'
      + '<text x="45" y="106" text-anchor="middle" font-size="9" fill="#1565c0">AB / Ab</text>'
      + '<rect x="240" y="92" width="30" height="20" rx="3" fill="#f8bbd0" stroke="#c0563f" stroke-width="1"/>'
      + '<text x="255" y="106" text-anchor="middle" font-size="9" fill="#c0563f">AB / Ab</text>'
      /* أسهم */
      + '<line x1="45" y1="78" x2="45" y2="90" stroke="#1565c0" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<line x1="255" y1="78" x2="255" y2="90" stroke="#c0563f" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<text x="45" y="122" text-anchor="middle" font-size="9" fill="#1565c0">أمشاج الأب</text>'
      + '<text x="255" y="122" text-anchor="middle" font-size="9" fill="#c0563f">أمشاج الأم</text>'
      /* إخصاب */
      + '<line x1="75" y1="102" x2="120" y2="140" stroke="#555" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<line x1="225" y1="102" x2="180" y2="140" stroke="#555" stroke-width="1.5" marker-end="url(#figArrow_fix)"/>'
      + '<text x="150" y="133" text-anchor="middle" font-size="10" fill="#6a1b9a">الإخصاب</text>'
      /* أبناء */
      + '<rect x="90" y="142" width="120" height="40" rx="6" fill="#e8eaf6" stroke="#3949ab" stroke-width="1.5"/>'
      + '<text x="150" y="158" text-anchor="middle" font-size="10" font-weight="bold" fill="#3949ab">الأبناء</text>'
      + '<text x="150" y="173" text-anchor="middle" font-size="9" fill="#333">9 : 3 : 3 : 1 (نسبة مندل)</text>'
      + '<text x="150" y="196" text-anchor="middle" font-size="8" fill="#999">قانون التفريق وقانون الانتشار الحر</text>'
      + '</svg>',
    parts: [
      { id: 'p1', label: 'الأبوان', note: 'كل منهما (2n) يحمل نسختين من كل صفة' },
      { id: 'p2', label: 'الأمشاج', note: 'عبر الانقسام الاختزالي تُنتج أمشاج (n)' },
      { id: 'p3', label: 'الإخصاب', note: 'اتحاد مشيجين لتكوين اللاقحة (2n)' },
      { id: 'p4', label: 'نسبة مندل', note: 'التهجين الثنائي الهجين ينتج 9:3:3:1' }
    ],
    steps: [
      'كل صفة تُحكمها ألليلات على أزواج الصبغيات المتماثلة.',
      'الأبوان (2n) يُنتجان أمشاجاً (n) عبر الانقسام الاختزالي.',
      'عند الإخصاب تُعاد الزوجية (2n) في اللاقحة.',
      'قانون التفريق: الألليلان ينفصلان عند تكوين الأمشاج.',
      'قانون الانتشار الحر: الصفات غير المرتبطة تنتشر باستقلالية → نسبة 9:3:3:1.'
    ]
  };

  /* ── 3. تسجيل الرسوم ──────────────────────────────────────────── */
  window.FIGS = Object.assign({}, window.FIGS, ADD);

  var SUBJ = {};
  Object.keys(ADD).forEach(function(k){ SUBJ[k] = ADD[k].subj; });
  window.FIG_SUBJ = Object.assign({}, window.FIG_SUBJ, SUBJ);

})();
