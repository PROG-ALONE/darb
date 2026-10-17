;(function(){
  if(!window.FIGS) window.FIGS={};
  if(!window.FIG_SUBJ) window.FIG_SUBJ={};
  const DEFS = `<defs><marker id="figArrow_chem" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#555"/></marker></defs>`;
  const defsNow = window.FIG_DEFS || '';
  window.FIG_DEFS = defsNow.indexOf('figArrow_chem') >= 0 ? defsNow : defsNow + DEFS;
  window.FIGS['fig_chem_ف1_الخلية_الغلفانية'] = {
    title: 'الخلية الغلفانية',
    teaches: 'الخلية الغلفانية — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الأول — الحركية والاتزان',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="خلية غلفانية قطبان وجسر ملحي واتجاه الإلكترونات">
  <!-- القطب السالب (الأנוד) -->
  <rect x="40" y="60" width="30" height="80" rx="4" fill="#c0563f" stroke="#7a2d23" stroke-width="2"/>
  <text x="55" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="700" font-family="system-ui, Arial, sans-serif">−</text>
  <text x="55" y="152" text-anchor="middle" font-size="10" fill="#555">الأנود (سلب)</text>
  <!-- القطب الموجب (הקاثוד) -->
  <rect x="230" y="60" width="30" height="80" rx="4" fill="#2f7d5b" stroke="#1d4c38" stroke-width="2"/>
  <text x="245" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="700" font-family="system-ui, Arial, sans-serif">+</text>
  <text x="245" y="152" text-anchor="middle" font-size="10" fill="#555">الكاثود (موجب)</text>
  <!-- جسر ملحي -->
  <rect x="140" y="70" width="20" height="60" rx="4" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/>
  <text x="150" y="144" text-anchor="middle" font-size="9" fill="#1a5c3a">جسر ملحي</text>
  <!-- اتجاه الإلكترونات من السالب إلى الموجب -->
  <path d="M 70 50 Q 140 30 210 50" fill="none" stroke="#c0563f" stroke-width="2" marker-end="url(#figArrow_phy)"/>
  <text x="140" y="24" text-anchor="middle" font-size="10" fill="#c0563f">إلكترونات − →</text>
  <!-- اتجاه التيار العكسي -->
  <path d="M 210 160 Q 140 180 70 160" fill="none" stroke="#2f7d5b" stroke-width="2" marker-end="url(#figArrow_phy)"/>
  <text x="140" y="194" text-anchor="middle" font-size="10" fill="#2f7d5b">تيار تقليدي + ←</text>
  <text x="150" y="182" text-anchor="middle" font-size="10" fill="#555">ت spirito redox spontaneously</text>
</svg>`,
    parts: [{id:'p1', label:'الخلية الغلفانية', note:'الفصل الأول — الحركية والاتزان'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف1_طاقة_التنشيط'] = {
    title: 'طاقة التنشيط',
    teaches: 'طاقة التنشيط — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الأول — الحركية والاتزان',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="منحنى طاقة التفاعل طاقة التنشيط حالة الانتقال delta H">
  <!-- المحور ص الطاقة -->
  <line x1="60" y1="160" x2="60" y2="60" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_phy)"/>
  <text x="50" y="54" text-anchor="end" font-size="10" fill="#555">الطاقة</text>
  <!-- المحور س مسار التفاعل -->
  <line x1="60" y1="160" x2="270" y2="160" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_phy)"/>
  <text x="274" y="172" text-anchor="start" font-size="10" fill="#555">مسار التفاعل</text>
  <!-- المنحنى -->
  <path d="M 80 140 Q 120 140 140 110 T 180 130 T 220 90" fill="none" stroke="#2f7d5b" stroke-width="2.2"/>
  <!-- المتفاعلات -->
  <rect x="70" y="130" width="20" height="24" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/>
  <text x="80" y="162" text-anchor="middle" font-size="10" fill="#555">المتفاعلات</text>
  <!-- المنتجات -->
  <rect x="210" y="80" width="20" height="40" fill="#efe9dd" stroke="#8a3020" stroke-width="2"/>
  <text x="220" y="130" text-anchor="middle" font-size="10" fill="#555">المنتجات</text>
  <!-- طاقة التنشيط -->
  <line x1="140" y1="110" x2="140" y2="140" stroke="#c0563f" stroke-width="1.8" stroke-dasharray="5,4"/>
  <text x="150" y="118" text-anchor="start" font-size="10" fill="#c0563f">طاقة التنشيط Ea</text>
  <!-- delta H -->
  <line x1="70" y1="142" x2="220" y2="142" stroke="#8a6d1f" stroke-width="1.4" marker-start="url(#figArrow_phy)" marker-end="url(#figArrow_phy)"/>
  <text x="145" y="136" text-anchor="middle" font-size="10" fill="#8a6d1f">ΔH</text>
  <text x="150" y="190" text-anchor="middle" font-size="10" fill="#555">حالةtransition عند قمة المنحنى</text>
</svg>`,
    parts: [{id:'p1', label:'طاقة التنشيط', note:'الفصل الأول — الحركية والاتزان'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف2_Kc_Kp'] = {
    title: 'Kc Kp',
    teaches: 'Kc Kp — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثاني — الاتزان الكيميائي',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="Kc و Kp"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">Kc و Kp</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">Kc و Kp</text></svg>`,
    parts: [{id:'p1', label:'Kc Kp', note:'الفصل الثاني — الاتزان الكيميائي'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف2_Keq'] = {
    title: 'Keq',
    teaches: 'Keq — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثاني — الاتزان الكيميائي',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="Keq"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">Keq</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">Keq</text></svg>`,
    parts: [{id:'p1', label:'Keq', note:'الفصل الثاني — الاتزان الكيميائي'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف2_أهمية_ثابت'] = {
    title: 'أهمية ثابت',
    teaches: 'أهمية ثابت — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثاني — الاتزان الكيميائي',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="أهمية ثابت الاتزان"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">أهمية ثابت الاتزان</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">أهمية ثابت الاتزان</text></svg>`,
    parts: [{id:'p1', label:'أهمية ثابت', note:'الفصل الثاني — الاتزان الكيميائي'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف2_اتزان'] = {
    title: 'اتزان',
    teaches: 'اتزان — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثاني — الاتزان الكيميائي',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="حالة الاتزان"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">حالة الاتزان</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">حالة الاتزان</text></svg>`,
    parts: [{id:'p1', label:'اتزان', note:'الفصل الثاني — الاتزان الكيميائي'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف2_انعكاسية'] = {
    title: 'انعكاسية',
    teaches: 'انعكاسية — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثاني — الاتزان الكيميائي',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="تفاعلات غير انعكاسية و انعكاسية"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">تفاعلات غير انعكاسية و انعكاسية</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">تفاعلات غير انعكاسية و انعكاسية</text></svg>`,
    parts: [{id:'p1', label:'انعكاسية', note:'الفصل الثاني — الاتزان الكيميائي'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف2_ثابت_اتزان'] = {
    title: 'ثابت اتزان',
    teaches: 'ثابت اتزان — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثاني — الاتزان الكيميائي',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="ثابت الاتزان"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">ثابت الاتزان</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">ثابت الاتزان</text></svg>`,
    parts: [{id:'p1', label:'ثابت اتزان', note:'الفصل الثاني — الاتزان الكيميائي'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف2_حاصل_تفاعل'] = {
    title: 'حاصل تفاعل',
    teaches: 'حاصل تفاعل — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثاني — الاتزان الكيميائي',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="حاصل التفاعل"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">حاصل التفاعل</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">حاصل التفاعل</text></svg>`,
    parts: [{id:'p1', label:'حاصل تفاعل', note:'الفصل الثاني — الاتزان الكيميائي'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف2_قانون_فعلي'] = {
    title: 'قانون فعلي',
    teaches: 'قانون فعلي — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثاني — الاتزان الكيميائي',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="قانون فعل الكتلة"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">قانون فعل الكتلة</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">قانون فعل الكتلة</text></svg>`,
    parts: [{id:'p1', label:'قانون فعلي', note:'الفصل الثاني — الاتزان الكيميائي'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف2_قانون_لو_شاتليه'] = {
    title: 'قانون لو شاتليه',
    teaches: 'قانون لو شاتليه — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثاني — الاتزان الكيميائي',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="قانون لو شاتليه إزاحة الاتزان">
  <rect x="60" y="30" width="180" height="40" rx="6" fill="#2f7d5b"/><text x="150" y="55" text-anchor="middle" fill="#fff" font-size="12" font-weight="700" font-family="system-ui">قانون لو شاتليه</text>
  <text x="150" y="90" text-anchor="middle" font-size="11" fill="#555">عند تغيير الضغط أو الحرارة أو التركيز،</text>
  <text x="150" y="105" text-anchor="middle" font-size="11" fill="#555">يتحرك الاتزان ضد التغير لإعادة التوازن.</text>
  <rect x="60" y="120" width="180" height="50" rx="6" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/>
  <text x="150" y="140" text-anchor="middle" font-size="11" fill="#1a5c3a">مثال: N₂ + 3H₂ ⇌ 2NH₃ + حرارة</text>
  <text x="150" y="155" text-anchor="middle" font-size="10" fill="#555">زيادة الضغط → يمين (أقل مولات)</text>
</svg>`,
    parts: [{id:'p1', label:'قانون لو شاتليه', note:'الفصل الثاني — الاتزان الكيميائي'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف2_متجانسة'] = {
    title: 'متجانسة',
    teaches: 'متجانسة — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثاني — الاتزان الكيميائي',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="متجانسة وغير متجانسة"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">متجانسة وغير متجانسة</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">متجانسة وغير متجانسة</text></svg>`,
    parts: [{id:'p1', label:'متجانسة', note:'الفصل الثاني — الاتزان الكيميائي'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف3_pH'] = {
    title: 'pH',
    teaches: 'pH — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثالث — الأحماض والقواعد',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="الأس الهيدروجيني"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">الأس الهيدروجيني</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">الأس الهيدروجيني</text></svg>`,
    parts: [{id:'p1', label:'pH', note:'الفصل الثالث — الأحماض والقواعد'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف3_أيون_مشترك'] = {
    title: 'أيون مشترك',
    teaches: 'أيون مشترك — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثالث — الأحماض والقواعد',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="أيون مشترك"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">أيون مشترك</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">أيون مشترك</text></svg>`,
    parts: [{id:'p1', label:'أيون مشترك', note:'الفصل الثالث — الأحماض والقواعد'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف3_إلكتروليت'] = {
    title: 'إلكتروليت',
    teaches: 'إلكتروليت — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثالث — الأحماض والقواعد',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="مواد إلكتروليتية"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">مواد إلكتروليتية</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">مواد إلكتروليتية</text></svg>`,
    parts: [{id:'p1', label:'إلكتروليت', note:'الفصل الثالث — الأحماض والقواعد'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف3_تأين_ذاتي'] = {
    title: 'تأين ذاتي',
    teaches: 'تأين ذاتي — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثالث — الأحماض والقواعد',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="تأين ذاتي"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">تأين ذاتي</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">تأين ذاتي</text></svg>`,
    parts: [{id:'p1', label:'تأين ذاتي', note:'الفصل الثالث — الأحماض والقواعد'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف3_تفكك_ضعيف'] = {
    title: 'تفكك ضعيف',
    teaches: 'تفكك ضعيف — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثالث — الأحماض والقواعد',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="تفكك ضعيف"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">تفكك ضعيف</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">تفكك ضعيف</text></svg>`,
    parts: [{id:'p1', label:'تفكك ضعيف', note:'الفصل الثالث — الأحماض والقواعد'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف3_تميؤ'] = {
    title: 'تميؤ',
    teaches: 'تميؤ — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الثالث — الأحماض والقواعد',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="التميؤ"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">التميؤ</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">التميؤ</text></svg>`,
    parts: [{id:'p1', label:'تميؤ', note:'الفصل الثالث — الأحماض والقواعد'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف4_أعداد_تأكسد'] = {
    title: 'أعداد تأكسد',
    teaches: 'أعداد تأكسد — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الرابع — الكيمياء الكهربائية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="أعداد التأكسد"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">أعداد التأكسد</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">أعداد التأكسد</text></svg>`,
    parts: [{id:'p1', label:'أعداد تأكسد', note:'الفصل الرابع — الكيمياء الكهربائية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف4_بطاريات'] = {
    title: 'بطاريات',
    teaches: 'بطاريات — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الرابع — الكيمياء الكهربائية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="بطاريات وخلايا وقود"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">بطاريات وخلايا وقود</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">بطاريات وخلايا وقود</text></svg>`,
    parts: [{id:'p1', label:'بطاريات', note:'الفصل الرابع — الكيمياء الكهربائية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف4_تأكسد_اختزال'] = {
    title: 'تأكسد اختزال',
    teaches: 'تأكسد اختزال — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الرابع — الكيمياء الكهربائية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="تأكسد واختزال"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">تأكسد واختزال</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">تأكسد واختزال</text></svg>`,
    parts: [{id:'p1', label:'تأكسد اختزال', note:'الفصل الرابع — الكيمياء الكهربائية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف4_جهد_خلية'] = {
    title: 'جهد خلية',
    teaches: 'جهد خلية — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الرابع — الكيمياء الكهربائية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="جهد الخلية"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">جهد الخلية</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">جهد الخلية</text></svg>`,
    parts: [{id:'p1', label:'جهد خلية', note:'الفصل الرابع — الكيمياء الكهربائية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف4_خلايا_كلفانية'] = {
    title: 'خلايا كلفانية',
    teaches: 'خلايا كلفانية — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الرابع — الكيمياء الكهربائية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="خلايا كلفانية"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">خلايا كلفانية</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">خلايا كلفانية</text></svg>`,
    parts: [{id:'p1', label:'خلايا كلفانية', note:'الفصل الرابع — الكيمياء الكهربائية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف4_خلية_غلفانية'] = {
    title: 'خلية غلفانية',
    teaches: 'خلية غلفانية — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الرابع — الكيمياء الكهربائية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="خلية غلفانية قطب زنك ونحاس">
  <rect x="40" y="60" width="40" height="60" rx="4" fill="#c0563f" stroke="#7a2d23" stroke-width="2"/>
  <text x="60" y="95" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">Zn</text>
  <rect x="220" y="60" width="40" height="60" rx="4" fill="#2f7d5b" stroke="#1d4c38" stroke-width="2"/>
  <text x="240" y="95" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">Cu</text>
  <text x="150" y="148" text-anchor="middle" font-size="11" fill="#555">Cu²⁺ + Zn → Cu + Zn²⁺</text>
  <line x1="80" y1="90" x2="220" y2="90" stroke="#8a8172" stroke-width="2" marker-end="url(#figArrow_chem)"/>
  <text x="150" y="178" text-anchor="middle" font-size="10" fill="#555">جهد الخلية = E°cathode − E°anode</text>
</svg>`,
    parts: [{id:'p1', label:'خلية غلفانية', note:'الفصل الرابع — الكيمياء الكهربائية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف4_فاراداي'] = {
    title: 'فاراداي',
    teaches: 'فاراداي — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الرابع — الكيمياء الكهربائية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="قوانين فاراداي"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">قوانين فاراداي</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">قوانين فاراداي</text></svg>`,
    parts: [{id:'p1', label:'فاراداي', note:'الفصل الرابع — الكيمياء الكهربائية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف5_ليكاندات'] = {
    title: 'ليكاندات',
    teaches: 'ليكاندات — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الخامس — الكيمياء التناسقية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="أنواع ليكاندات"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">أنواع ليكاندات</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">أنواع ليكاندات</text></svg>`,
    parts: [{id:'p1', label:'ليكاندات', note:'الفصل الخامس — الكيمياء التناسقية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف5_مركب_تناسقي'] = {
    title: 'مركب تناسقي',
    teaches: 'مركب تناسقي — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الخامس — الكيمياء التناسقية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="مركب تناسقي"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">مركب تناسقي</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">مركب تناسقي</text></svg>`,
    parts: [{id:'p1', label:'مركب تناسقي', note:'الفصل الخامس — الكيمياء التناسقية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_chem_ف5_ملح_مزدوج'] = {
    title: 'ملح مزدوج',
    teaches: 'ملح مزدوج — الكيمياء',
    subj: 'الكيمياء',
    chapter: 'الفصل الخامس — الكيمياء التناسقية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="ملح مزدوج"><rect x="20" y="30" width="260" height="36" rx="6" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-size="11" fill="#2f7d5b" font-weight="700" font-family="system-ui">ملح مزدوج</text><text x="150" y="110" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui">ملح مزدوج</text></svg>`,
    parts: [{id:'p1', label:'ملح مزدوج', note:'الفصل الخامس — الكيمياء التناسقية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  Object.keys(window.FIGS).forEach(k=>{if(!window.FIG_SUBJ[k]) window.FIG_SUBJ[k]=window.FIGS[k].subj||'';});
})();
