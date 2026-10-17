;(function(){
  if(!window.FIGS) window.FIGS={};
  if(!window.FIG_SUBJ) window.FIG_SUBJ={};
  const DEFS = `<defs><marker id="figArrow_math" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#555"/></marker></defs>`;
  const defsNow = window.FIG_DEFS || '';
  window.FIG_DEFS = defsNow.indexOf('figArrow_math') >= 0 ? defsNow : defsNow + DEFS;
  window.FIGS['fig_math_ف1_الدائرة'] = {
    title: 'الدائرة',
    teaches: 'الدائرة — الرياضيات',
    subj: 'الرياضيات',
    chapter: 'الفصل الأول — الأعداد المركبة والمقاطع المخروطية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" role="img" aria-label="الدائرة المركز والنصف قطر والمحيط">
  <!-- الدائرة -->
  <circle cx="150" cy="110" r="60" fill="#d7ebe0" stroke="#2f7d5b" stroke-width="2.2"/>
  <!-- المركز -->
  <circle cx="150" cy="110" r="4" fill="#555"/>
  <!-- النصف قطر -->
  <line x1="150" y1="110" x2="210" y2="110" stroke="#c0563f" stroke-width="2" marker-end="url(#figArrow_math)"/>
  <text x="182" y="102" text-anchor="middle" font-size="11" fill="#c0563f">r</text>
  <!-- القطر -->
  <line x1="90" y1="110" x2="210" y2="110" stroke="#d8a53a" stroke-width="1.8" stroke-dasharray="5,4"/>
  <text x="150" y="102" text-anchor="middle" font-size="11" fill="#d8a53a">d = 2r</text>
  <text x="150" y="210" text-anchor="middle" font-size="10" fill="#555">المحيط = 2πr ، المساحة = πr²</text>
</svg>`,
    parts: [{id:'p1', label:'الدائرة', note:'الفصل الأول — الأعداد المركبة والمقاطع المخروطية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_math_ف1_القطع_المكافئ'] = {
    title: 'القطع المكافئ',
    teaches: 'القطع المكافئ — الرياضيات',
    subj: 'الرياضيات',
    chapter: 'الفصل الأول — الأعداد المركبة والمقاطع المخروطية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" role="img" aria-label="القطع المكافئ الرأس ومحور التماثل واتجاه الفتح">
  <!-- المحاور -->
  <line x1="40" y1="170" x2="260" y2="170" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_math)"/>
  <line x1="150" y1="200" x2="150" y2="20" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_math)"/>
  <text x="252" y="184" fill="#555">س</text>
  <text x="158" y="28" fill="#555">ص</text>
  <!-- القطع المكافئ يفتح للأعلى -->
  <path d="M 60 170 Q 150 40 240 170" fill="none" stroke="#2f7d5b" stroke-width="2.2"/>
  <!-- الرأس -->
  <circle cx="150" cy="40" r="5" fill="#c0563f"/>
  <text x="150" y="30" text-anchor="middle" font-size="11" fill="#c0563f">الرأس (150, 40)</text>
  <!-- محور التماثل -->
  <line x1="150" y1="20" x2="150" y2="170" stroke="#c0563f" stroke-width="1.4" stroke-dasharray="5,4"/>
  <text x="158" y="100" font-size="10" fill="#c0563f">محور التماثل x = h</text>
  <text x="150" y="210" text-anchor="middle" font-size="10" fill="#555">y = a(x−h)² + k ، إذا a>0 يفتح للأعلى</text>
</svg>`,
    parts: [{id:'p1', label:'القطع المكافئ', note:'الفصل الأول — الأعداد المركبة والمقاطع المخروطية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_math_ف1_المستوى_المركب'] = {
    title: 'المستوى المركب',
    teaches: 'المستوى المركب — الرياضيات',
    subj: 'الرياضيات',
    chapter: 'الفصل الأول — الأعداد المركبة والمقاطع المخروطية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" role="img" aria-label="المستوى المركّب محاور حقيقي وتخيلي نقطة z ومثلث المكونات">
  <!-- المحور الحقيقي -->
  <line x1="40" y1="110" x2="260" y2="110" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_math)"/>
  <text x="252" y="124" font-size="12" fill="#555" font-family="system-ui, Arial, sans-serif">Re</text>
  <!-- المحور التخيلي -->
  <line x1="150" y1="200" x2="150" y2="20" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_math)"/>
  <text x="158" y="18" font-size="12" fill="#555" font-family="system-ui, Arial, sans-serif">Im</text>
  <!-- النقطة z -->
  <circle cx="220" cy="70" r="5" fill="#2f7d5b"/>
  <text x="228" y="66" font-size="11" fill="#2f7d5b" font-family="system-ui, Arial, sans-serif">z = 3+2i</text>
  <!-- مكونات -->
  <line x1="150" y1="70" x2="220" y2="70" stroke="#c0563f" stroke-dasharray="4,3" stroke-width="1.6"/>
  <line x1="220" y1="110" x2="220" y2="70" stroke="#2f7d5b" stroke-dasharray="4,3" stroke-width="1.6"/>
  <text x="185" y="125" text-anchor="middle" font-size="11" fill="#c0563f" font-family="system-ui, Arial, sans-serif">a = 3</text>
  <text x="235" y="92" font-size="11" fill="#2f7d5b" font-family="system-ui, Arial, sans-serif">bi = 2i</text>
  <!-- المتجه z -->
  <line x1="150" y1="110" x2="220" y2="70" stroke="#8a8172" stroke-width="2" marker-end="url(#figArrow_math)"/>
  <!-- زاوية theta -->
  <path d="M 170 110 A 20 20 0 0 1 190 93" fill="none" stroke="#d8a53a" stroke-width="1.6"/>
  <text x="168" y="100" font-size="10" fill="#d8a53a" font-family="system-ui, Arial, sans-serif">θ</text>
  <text x="150" y="210" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui, Arial, sans-serif">|z| = √(a²+b²) ، arg(z) = θ</text>
</svg>`,
    parts: [{id:'p1', label:'المستوى المركب', note:'الفصل الأول — الأعداد المركبة والمقاطع المخروطية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_math_ف3_المعدلات_المرتبطة'] = {
    title: 'المعدلات المرتبطة',
    teaches: 'المعدلات المرتبطة — الرياضيات',
    subj: 'الرياضيات',
    chapter: 'الفصل الثالث — المشتق والتكامل',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="المعدلات المرتبطة في التفاضل">
  <text x="150" y="30" text-anchor="middle" font-size="13" fill="#2f7d5b" font-weight="700">المعدلات المرتبطة (Related Rates)</text>
  <rect x="40" y="60" width="90" height="36" rx="6" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/>
  <text x="85" y="84" text-anchor="middle" font-size="11" fill="#1a5c3a">دائرة نصف قطرها r</text>
  <rect x="170" y="60" width="90" height="36" rx="6" fill="#fa0d4" stroke="#8a3020" stroke-width="2"/>
  <text x="215" y="84" text-anchor="middle" font-size="11" fill="#8a3020">المساحة A = πr²</text>
  <line x1="130" y1="78" x2="170" y2="78" stroke="#555" stroke-width="2" marker-end="url(#figArrow_math)"/>
  <text x="150" y="108" text-anchor="middle" font-size="10" fill="#555">dA/dt = 2πr · dr/dt</text>
  <text x="150" y="186" text-anchor="middle" font-size="10" fill="#555">التفاضل يربط معدل تغير الأبعاد</text>
</svg>`,
    parts: [{id:'p1', label:'المعدلات المرتبطة', note:'الفصل الثالث — المشتق والتكامل'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_math_ف4_المساحة_تحت_المنحنى'] = {
    title: 'المساحة تحت المنحنى',
    teaches: 'المساحة تحت المنحنى — الرياضيات',
    subj: 'الرياضيات',
    chapter: 'الفصل الرابع — تطبيقات التكامل',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="المساحة تحت المنحنى بالتكامل">
  <line x1="40" y1="160" x2="260" y2="160" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_math)"/>
  <line x1="50" y1="160" x2="50" y2="30" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_math)"/>
  <path d="M 60 140 Q 120 60 180 100 T 240 50" fill="none" stroke="#2f7d5b" stroke-width="2.2"/>
  <rect x="60" y="120" width="10" height="40" fill="#d7ebe0" opacity="0.7"/>
  <rect x="70" y="110" width="10" height="50" fill="#d7ebe0" opacity="0.7"/>
  <rect x="80" y="90" width="10" height="70" fill="#d7ebe0" opacity="0.7"/>
  <text x="150" y="190" text-anchor="middle" font-size="11" fill="#555">المساحة = ∫ₐᵇ f(x) dx</text>
</svg>`,
    parts: [{id:'p1', label:'المساحة تحت المنحنى', note:'الفصل الرابع — تطبيقات التكامل'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  Object.keys(window.FIGS).forEach(k=>{if(!window.FIG_SUBJ[k]) window.FIG_SUBJ[k]=window.FIGS[k].subj||'';});
})();
