/* رسوم الفيزياء — السادس الإعدادي العلمي العراقي */
;(function(){
  if(!window.FIGS) window.FIGS={};
  if(!window.FIG_SUBJ) window.FIG_SUBJ={};
  const DEFS = `<defs><marker id="figArrow_phy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#555"/></marker></defs>`;
  const defsNow = window.FIG_DEFS || '';
  window.FIG_DEFS = defsNow.indexOf('figArrow_phy') >= 0 ? defsNow : defsNow + DEFS;
  window.FIGS['electricField_lines'] = {
    title: 'خطوط المجال الكهربائي',
    teaches: 'كيف تنتشر خطوط المجال حول شحنة موجبة وسالبة: من الموجب إلى السالب، كثافة الخطوط تعكس شدة المجال، والخطوط لا تتقاطع.',
    subj: 'الفيزياء',
    chapter: 'الفصل الأول — المجال الكهربائي',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="خطوط المجال الكهربائي"><circle cx="75" cy="100" r="16" fill="#c0563f" stroke="#7a2d23" stroke-width="2"/><text x="75" y="105" text-anchor="middle" fill="#fff" font-size="15" font-weight="700" font-family="system-ui, Arial, sans-serif">+</text><circle cx="225" cy="100" r="16" fill="#2f7d5b" stroke="#1d4c38" stroke-width="2"/><text x="225" y="105" text-anchor="middle" fill="#fff" font-size="15" font-weight="700" font-family="system-ui, Arial, sans-serif">−</text><line x1="91" y1="70" x2="209" y2="70" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_phy)"/><line x1="91" y1="100" x2="209" y2="100" stroke="#555" stroke-width="2" marker-end="url(#figArrow_phy)"/><line x1="91" y1="130" x2="209" y2="130" stroke="#555" stroke-width="1.6" marker-end="url(#figArrow_phy)"/><text x="150" y="40" text-anchor="middle" font-size="10" fill="#555" font-family="system-ui, Arial, sans-serif">اتجاه المجال: من + إلى −</text></svg>`,
    parts: [
      { id:'p1', label:'الشحنة الموجبة', note:'مصدر خطوط المجال — الشحنة الموجبة تُخرج خطوط المجال.' },
      { id:'p2', label:'الشحنة السالبة', note:'بالوعة خطوط المجال — السالبة تستقبلها.' },
      { id:'p3', label:'خطوط المجال', note:'تتجه من الموجب إلى السالب ولا تتقاطع.' }
    ],
    steps: [
      'ارسم شحنة موجبة على اليسار وشحنة سالبة على اليمين.',
      'ارسم خطوطًا مستقيمة من الموجب إلى السالب.',
      'سمّ الاتجاه: من + إلى −، وكثافة الخطوط تعكس الشدة.'
    ]
  };
  window.FIGS['gauss_surface'] = {
    title: 'سطح غاس كروي حول شحنة',
    teaches: 'قانون غاس: الفيض عبر سطح مغلق يساوي الشحنة داخل السطح مقسومة على ε₀.',
    subj: 'الفيزياء',
    chapter: 'الفصل الأول — المجال الكهربائي',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="سطح غاس كروي"><circle cx="150" cy="100" r="10" fill="#c0563f" stroke="#7a2d23" stroke-width="2"/><circle cx="150" cy="100" r="55" fill="none" stroke="#2f7d5b" stroke-width="2" stroke-dasharray="6,5"/><text x="150" y="42" text-anchor="middle" font-size="11" fill="#2f7d5b" font-family="system-ui, Arial, sans-serif">سطح غاس الكروي</text></svg>`,
    parts: [{id:'p1',label:'الشحنة المركزية',note:'+q داخل السطح المغلق.'},{id:'p2',label:'سطح غاس',note:'كروي مغلق يحيط بالشحنة.'}],
    steps: ['ارسم شحنة في المركز.', 'ارسم دائرة كروية حولها.', 'اكتب العلاقة: Φ = q/ε₀.']
  };
  Object.keys(window.FIGS).forEach(k => { if(!window.FIG_SUBJ[k]) window.FIG_SUBJ[k] = window.FIGS[k].subj || ''; });
})();
  window.FIGS['capacitor_plates'] = {
    title: 'المتسعة ذات الصفيحتين المتوازيتين',
    teaches: 'المتسعة تتكون من لوحين متوازيين يفصل بينهما عازل. السعة C = ε₀εr·A/d.',
    subj: 'الفيزياء', chapter: 'الفصل الأول — المتسعات',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect x="70" y="40" width="12" height="120" rx="3" fill="#c0563f"/><rect x="218" y="40" width="12" height="120" rx="3" fill="#2f7d5b"/><text x="76" y="30" text-anchor="middle" font-size="14" fill="#c0563f">+</text><text x="224" y="30" text-anchor="middle" font-size="14" fill="#2f7d5b">−</text><line x1="82" y1="70" x2="218" y2="70" stroke="#8a8172" stroke-width="2" marker-end="url(#figArrow_phy)"/><text x="150" y="190" text-anchor="middle" font-size="10" fill="#555">C = ε₀·εr·A/d</text></svg>`,
    parts: [{id:'p1',label:'اللوحان',note:'صفيحتان متوازيتان متساويتان.'}], steps: ['ارسم لوحين متوازيين.', 'سمّ المسافة d.', 'اكتب قانون السعة.']
  };
