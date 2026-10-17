;(function(){
  if(!window.FIGS) window.FIGS={};
  if(!window.FIG_SUBJ) window.FIG_SUBJ={};
  const DEFS = `<defs><marker id="figArrow_bio" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#555"/></marker></defs>`;
  const defsNow = window.FIG_DEFS || '';
  window.FIG_DEFS = defsNow.indexOf('figArrow_bio') >= 0 ? defsNow : defsNow + DEFS;
  window.FIGS['fig_bio_ف1_الوراثة_مندل'] = {
    title: 'الوراثة مندل',
    teaches: 'الوراثة مندل — الأحياء',
    subj: 'الأحياء',
    chapter: 'الفصل الأول — الوراثة',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="مربع بانيت مندل Aa × Aa قانون الوراثة الأول">
  <!-- الأصل -->
  <text x="30" y="24" text-anchor="start" font-size="11" fill="#555" font-family="system-ui, Arial, sans-serif">الأب Aa × الأم Aa</text>
  <!--quared gametes top -->
  <text x="130" y="48" text-anchor="middle" font-size="11" fill="#555" font-family="system-ui, Arial, sans-serif">البويضات</text>
  <text x="108" y="70" text-anchor="middle" font-size="11" fill="#2f7d5b" font-family="system-ui, Arial, sans-serif">A</text>
  <text x="162" y="70" text-anchor="middle" font-size="11" fill="#2f7d5b" font-family="system-ui, Arial, sans-serif">a</text>
  <!-- gametes left -->
  <text x="70" y="100" text-anchor="middle" font-size="11" fill="#2f7d5b" font-family="system-ui, Arial, sans-serif">A</text>
  <text x="70" y="130" text-anchor="middle" font-size="11" fill="#2f7d5b" font-family="system-ui, Arial, sans-serif">a</text>
  <!-- cellules -->
  <rect x="100" y="80" width="50" height="40" rx="4" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/>
  <text x="125" y="102" text-anchor="middle" font-size="12" font-weight="700" fill="#1a5c3a" font-family="system-ui, Arial, sans-serif">AA</text>
  <rect x="150" y="80" width="50" height="40" rx="4" fill="#efe9dd" stroke="#8a3020" stroke-width="2"/>
  <text x="175" y="102" text-anchor="middle" font-size="12" font-weight="700" fill="#8a3020" font-family="system-ui, Arial, sans-serif">Aa</text>
  <rect x="100" y="120" width="50" height="40" rx="4" fill="#efe9dd" stroke="#8a3020" stroke-width="2"/>
  <text x="125" y="142" text-anchor="middle" font-size="12" font-weight="700" fill="#8a3020" font-family="system-ui, Arial, sans-serif">Aa</text>
  <rect x="150" y="120" width="50" height="40" rx="4" fill="#faf0d4" stroke="#8a6d1f" stroke-width="2"/>
  <text x="175" y="142" text-anchor="middle" font-size="12" font-weight="700" fill="#8a6d1f" font-family="system-ui, Arial, sans-serif">aa</text>
  <!-- النتيجة -->
  <text x="150" y="176" text-anchor="middle" font-size="11" fill="#555" font-family="system-ui, Arial, sans-serif">1 AA : 2 Aa : 1 aa  (3 سائد : 1 متنحي)</text>
  <text x="150" y="194" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui, Arial, sans-serif">قانون مندل الأول — فصل الأزواج الوراثية</text>
</svg>`,
    parts: [{id:'p1', label:'الوراثة مندل', note:'الفصل الأول — الوراثة'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_bio_ف2_البناء_الضوئي'] = {
    title: 'البناء الضوئي',
    teaches: 'البناء الضوئي — الأحياء',
    subj: 'الأحياء',
    chapter: 'الفصل الثاني — البناء الضوئي والتنفس',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="مخطط البناء الضوئي الطور الضوئي والمظلم">
  <!-- الشمس -->
  <circle cx="40" cy="40" r="14" fill="#d8a53a" stroke="#b87a1e" stroke-width="2"/>
  <text x="40" y="44" text-anchor="middle" fill="#fff" font-size="10" font-weight="700" font-family="system-ui, Arial, sans-serif">ضوء</text>
  <!-- الورقة -->
  <ellipse cx="150" cy="120" rx="60" ry="45" fill="#7ca85b" stroke="#4e7a37" stroke-width="3"/>
  <text x="150" y="124" text-anchor="middle" fill="#fff" font-size="11" font-weight="700" font-family="system-ui, Arial, sans-serif">الورقة / الكلوروفيل</text>
  <!-- ثاني أكسيد الكربون -->
  <line x1="230" y1="70" x2="205" y2="100" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_phy)"/>
  <text x="238" y="74" text-anchor="start" font-size="10" fill="#555" font-family="system-ui, Arial, sans-serif">CO₂ من الهواء</text>
  <!-- الماء -->
  <line x1="150" y1="170" x2="150" y2="140" stroke="#2f7d5b" stroke-width="2" marker-end="url(#figArrow_phy)"/>
  <text x="150" y="184" text-anchor="middle" font-size="10" fill="#2f7d5b" font-family="system-ui, Arial, sans-serif">ماء من الجذور</text>
  <!-- المخرجات -->
  <line x1="210" y1="120" x2="260" y2="90" stroke="#2f7d5b" stroke-width="2" marker-end="url(#figArrow_phy)"/>
  <text x="268" y="94" text-anchor="start" font-size="10" fill="#2f7d5b" font-family="system-ui, Arial, sans-serif">O₂ خارج</text>
  <line x1="210" y1="120" x2="270" y2="150" stroke="#8a6d1f" stroke-width="2" marker-end="url(#figArrow_phy)"/>
  <text x="278" y="154" text-anchor="start" font-size="10" fill="#8a6d1f" font-family="system-ui, Arial, sans-serif">غلوكوز</text>
  <text x="150" y="196" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui, Arial, sans-serif">الطور الضوئي (يحتاج ضوء) → الطور المظلم (يتركب الغلوكوز)</text>
</svg>`,
    parts: [{id:'p1', label:'البناء الضوئي', note:'الفصل الثاني — البناء الضوئي والتنفس'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_bio_ف2_التنفس_الهوائي'] = {
    title: 'التنفس الهوائي',
    teaches: 'التنفس الهوائي — الأحياء',
    subj: 'الأحياء',
    chapter: 'الفصل الثاني — البناء الضوئي والتنفس',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="مراحل التنفس الهوائي الهدم كريبس سلسلة نقل الإلكترون">
  <!-- الجلوكوز -->
  <rect x="20" y="40" width="56" height="30" rx="5" fill="#faf0d4" stroke="#8a6d1f" stroke-width="2"/>
  <text x="48" y="60" text-anchor="middle" font-size="10" fill="#8a6d1f" font-family="system-ui, Arial, sans-serif">الجلوكوز C₆H₁₂O₆</text>
  <!-- الهدم -->
  <line x1="76" y1="55" x2="94" y2="55" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_phy)"/>
  <rect x="100" y="40" width="52" height="30" rx="5" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/>
  <text x="126" y="60" text-anchor="middle" font-size="10" fill="#1a5c3a" font-family="system-ui, Arial, sans-serif">الهدم (الغليكوليز)</text>
  <line x1="152" y1="55" x2="170" y2="55" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_phy)"/>
  <!-- كريبس -->
  <rect x="176" y="40" width="50" height="30" rx="5" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/>
  <text x="201" y="60" text-anchor="middle" font-size="10" fill="#1a5c3a" font-family="system-ui, Arial, sans-serif">دورة كريبس</text>
  <line x1="226" y1="55" x2="244" y2="55" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_phy)"/>
  <!-- سلسلة نقل الإلكترون -->
  <rect x="250" y="40" width="50" height="30" rx="5" fill="#efe9dd" stroke="#8a3020" stroke-width="2"/>
  <text x="275" y="60" text-anchor="middle" font-size="10" fill="#8a3020" font-family="system-ui, Arial, sans-serif">سلسلة نقل</text>
  <text x="275" y="70" text-anchor="middle" font-size="8.5" fill="#8a3020" font-family="system-ui, Arial, sans-serif">الإلكترون</text>
  <!-- ATP -->
  <line x1="126" y1="70" x2="126" y2="90" stroke="#555" stroke-width="1.4" marker-end="url(#figArrow_phy)"/>
  <line x1="201" y1="70" x2="201" y2="90" stroke="#555" stroke-width="1.4" marker-end="url(#figArrow_phy)"/>
  <line x1="275" y1="70" x2="275" y2="90" stroke="#555" stroke-width="1.4" marker-end="url(#figArrow_phy)"/>
  <text x="126" y="106" text-anchor="middle" font-size="10" fill="#2f7d5b">ATP</text>
  <text x="201" y="106" text-anchor="middle" font-size="10" fill="#2f7d5b">ATP</text>
  <text x="275" y="106" text-anchor="middle" font-size="10" fill="#2f7d5b">ATP + ماء</text>
  <text x="150" y="140" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui, Arial, sans-serif">التنفس الهوائي: الجلوكوز + أكسجين → ثاني أكسيد الكربون + ماء + طاقة</text>
</svg>`,
    parts: [{id:'p1', label:'التنفس الهوائي', note:'الفصل الثاني — البناء الضوئي والتنفس'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_bio_ف3_الانقسام_الخيطي'] = {
    title: 'الانقسام الخيطي',
    teaches: 'الانقسام الخيطي — الأحياء',
    subj: 'الأحياء',
    chapter: 'الفصل الثالث — انقسام الخلية',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="مراحل الانقسام الخيطي أربع مراحل">
  <rect x="30" y="30" width="52" height="40" rx="4" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/><text x="56" y="55" text-anchor="middle" font-size="9" fill="#1a5c3a">التكثف</text>
  <rect x="100" y="30" width="52" height="40" rx="4" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/><text x="126" y="55" text-anchor="middle" font-size="9" fill="#1a5c3a">التثاؤب</text>
  <rect x="170" y="30" width="52" height="40" rx="4" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/><text x="196" y="55" text-anchor="middle" font-size="9" fill="#1a5c3a">الانفصال</text>
  <rect x="240" y="30" width="52" height="40" rx="4" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/><text x="266" y="55" text-anchor="middle" font-size="9" fill="#1a5c3a">التجزئة</text>
  <line x1="82" y1="50" x2="100" y2="50" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_bio)"/>
  <line x1="152" y1="50" x2="170" y2="50" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_bio)"/>
  <line x1="222" y1="50" x2="240" y2="50" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_bio)"/>
  <text x="150" y="140" text-anchor="middle" font-size="10" fill="#555">4 مراحل: تكثف → تثاؤب → انفصال → تجزئة</text>
</svg>`,
    parts: [{id:'p1', label:'الانقسام الخيطي', note:'الفصل الثالث — انقسام الخلية'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  window.FIGS['fig_bio_ف4_الانشطار_الثنائي'] = {
    title: 'الانشطار الثنائي',
    teaches: 'الانشطار الثنائي — الأحياء',
    subj: 'الأحياء',
    chapter: 'الفصل الرابع — تكاثر الكائنات',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria_label="بناء الفيروس القفيصة والحمض النووي والذيل">
  <!-- الرأس -->
  <rect x="80" y="50" width="40" height="50" rx="4" fill="#d7ebe0" stroke="#1a5c3a" stroke-width="2"/>
  <text x="100" y="82" text-anchor="middle" font-size="11" fill="#1a5c3a" font-family="system-ui, Arial, sans-serif">الحمض النووي</text>
  <!-- القفيصة -->
  <rect x="85" y="100" width="30" height="30" rx="3" fill="#efe9dd" stroke="#8a3020" stroke-width="2"/>
  <text x="100" y="118" text-anchor="middle" font-size="10" fill="#8a3020" font-family="system-ui, Arial, sans-serif">القفيصة</text>
  <!-- الذيل -->
  <line x1="100" y1="130" x2="100" y2="160" stroke="#555" stroke-width="4" marker-end="url(#figArrow_phy)"/>
  <text x="100" y="174" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui, Arial, sans-serif">الذيل اللزج</text>
  <!-- التسميات -->
  <text x="130" y="62" text-anchor="start" font-size="10" fill="#555">الحمض النووي (DNA/RNA)</text>
  <text x="130" y="108" text-anchor="start" font-size="10" fill="#555">القفيصة البروتينية</text>
  <text x="130" y="156" text-anchor="start" font-size="10" fill="#555">الذيل — يرتبط بالخيط البكتيري</text>
  <text x="150" y="192" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui, Arial, sans-serif">بنية الفيروس — طفيلي cell obligate</text>
</svg>`,
    parts: [{id:'p1', label:'الانشطار الثنائي', note:'الفصل الرابع — تكاثر الكائنات'}],
    steps: ['ادرس الرسم', 'لاحظ التسميات', 'اكتب الخلاصة']
  };
  Object.keys(window.FIGS).forEach(k=>{if(!window.FIG_SUBJ[k]) window.FIG_SUBJ[k]=window.FIGS[k].subj||'';});
})();
