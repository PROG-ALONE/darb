/* ══════════════════════════════════════════════════════════════════════
   الرسوم التفاعلية — الأحياء (أسئلة «وضّح بالرسم» الوزارية) — figs-4.js
   ──────────────────────────────────────────────────────────────────────
   قاعدة صارمة: لا مصدر → لا اختلاق. كل رسم هنا من سؤال وزاري حقيقي أو شكل
   مرقّم في كتاب الأحياء للصف السادس العلمي، مع الصفحة ورقم الشكل:
     · spermatogenesis  — سؤال الفصل (10-1)، ص138: تكوين النطف في الثدييات.
     · fruitStructure   — سؤال الفصل (10-2)، ص138: تركيب الثمرة.
     · bacterialFission — شكل (4-3): الانشطار الثنائي في البكتيريا.
   نفس بنية figs.js: svg (متجه) + parts (تشرح نفسها) + steps (كيف أرسمه؟).
   المعرّفات figArrow4/DEFS4 حتى لا تتعارض مع figs.js و figs-3.js.
   ══════════════════════════════════════════════════════════════════════ */
(function () {
  const DEFS4 = '<defs><marker id="figArrow4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>';
  const F = o => o;
  const arw = (x1, y1, x2, y2, c) => {
    const col = c || 'var(--acc)';
    const a = Math.atan2(y2 - y1, x2 - x1), W = 4.6, back = 8.5;
    const bx = x2 - Math.cos(a) * back, by = y2 - Math.sin(a) * back;
    const p2 = [bx - Math.sin(a) * W, by + Math.cos(a) * W];
    const p3 = [bx + Math.sin(a) * W, by - Math.cos(a) * W];
    const n = v => (Math.round(v * 10) / 10);
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + n(bx) + '" y2="' + n(by) + '" stroke="' + col + '" stroke-width="2.4" stroke-linecap="round"/>' +
      '<polygon points="' + n(x2) + ',' + n(y2) + ' ' + n(p2[0]) + ',' + n(p2[1]) + ' ' + n(p3[0]) + ',' + n(p3[1]) + '" fill="' + col + '"/>';
  };
  const txt = (x, y, s, size, col, anchor) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || 'middle') + '" font-size="' + (size || 12) + '" fill="' + (col || 'var(--muted)') + '">' + s + '</text>';
  const say = (n, s) => '<text x="175" y="232" text-anchor="middle" font-size="12.5" fill="var(--muted)">' + n + ') ' + s + '</text>';

  const FIGS = {

    /* ══════ الأحياء: تكوين النطف في الثدييات — ص138، سؤال الفصل (10-1) ══════ */
    spermatogenesis: F({
      title: 'تكوين النطف في الثدييات (وضّح بالرسم مع البيانات)',
      teaches: 'سؤال وزاري متكرر: الخطوات الخمس من سليفة النطف حتى النطفة الناضجة، مع عدد الصبغيات (2س → س) وتركيب النطفة النهائي: رأس وقععة وسطية وذيل. المصدر: ص138، الفصل الثالث.',
      svg: '<svg viewBox="0 0 350 250" role="img" aria-label="مراحل تكوين النطف الخمس">' + DEFS4 +
        '<circle cx="55" cy="40" r="20" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.4"/><circle cx="55" cy="40" r="8" fill="var(--acc)"/>' +
        txt(55, 76, 'سليفة النطف (2س)', 10, 'var(--muted)') +
        arw(55, 90, 55, 112, 'var(--muted)') +
        '<circle cx="55" cy="135" r="19" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.4"/><circle cx="55" cy="135" r="7" fill="var(--acc)"/>' +
        txt(55, 170, 'نطفية أولية (2س)', 10, 'var(--muted)') +
        arw(78, 135, 120, 100, 'var(--bad)') + txt(150, 95, 'اختزالي ١', 9.5, 'var(--bad)') +
        '<circle cx="175" cy="120" r="15" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.2"/>' +
        '<circle cx="175" cy="160" r="15" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.2"/>' +
        txt(175, 190, 'نطفية ثانوية (س)', 10, 'var(--muted)') +
        arw(198, 140, 235, 140, 'var(--bad)') + txt(258, 128, 'اختزالي ٢', 9.5, 'var(--bad)') +
        '<circle cx="270" cy="120" r="11" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2"/>' +
        '<circle cx="270" cy="150" r="11" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2"/>' +
        txt(270, 178, 'أرومات النطف (س)', 9.5, 'var(--muted)') +
        arw(270, 192, 270, 208, 'var(--ok)') +
        '<ellipse cx="248" cy="226" rx="12" ry="8" fill="var(--ok)" opacity="0.5" stroke="var(--ok)" stroke-width="1.8"/>' +
        '<line x1="260" y1="226" x2="280" y2="226" stroke="var(--ink)" stroke-width="2"/><line x1="280" y1="226" x2="320" y2="226" stroke="var(--muted)" stroke-width="1.6" stroke-dasharray="3 3"/>' +
        txt(290, 244, 'نطفة ناضجة: رأس–وسط–ذيل', 9.5, 'var(--muted)') + '</svg>',
      parts: [
        { x: 55, y: 40, label: 'سليفة النطف (2س)', note: 'الخلية الأولى ثنائية المجموعة الصبغية (2س)، تنقسم انقساماً متساوياً لتعطي الخلية النطفية الأولية.' },
        { x: 55, y: 135, label: 'الخلية النطفية الأولية (2س)', note: 'ما تزال ثنائية الصبغيات (2س)، تدخل الانقسام الاختزالي الأول.' },
        { x: 175, y: 140, label: 'الخلية النطفية الثانوية (س)', note: 'ناتج الانقسام الاختزالي الأول: خليتان أحادية المجموعة الصبغية (س).' },
        { x: 270, y: 135, label: 'أرومات النطف (س)', note: 'ناتج الانقسام الاختزالي الثاني: أربع خلايا أحادية (س)، تتغير شكلاً وتركيباً.' },
        { x: 290, y: 226, label: 'النطفة الناضجة', note: 'رأس فيه النواة والقبعة الرأسية (الأكروسوم)، وقععة وسطية فيها محور من نُبيبات، وذيل للحركة.' }
      ],
      steps: [
        '<circle cx="55" cy="40" r="20" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.4"/><circle cx="55" cy="40" r="8" fill="var(--acc)"/>' + say(1, 'ارسم سليفة النطف (2س) في الأعلى'),
        arw(55, 90, 55, 112, 'var(--muted)') + '<circle cx="55" cy="135" r="19" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.4"/><circle cx="55" cy="135" r="7" fill="var(--acc)"/>' + say(2, 'سهم للأسفل إلى الخلية النطفية الأولية (2س)'),
        arw(78, 135, 120, 100, 'var(--bad)') + '<circle cx="175" cy="120" r="15" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.2"/><circle cx="175" cy="160" r="15" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.2"/>' + say(3, 'اختزالي أول ← خليتان نطفيتان ثانويتان (س)'),
        arw(198, 140, 235, 140, 'var(--bad)') + '<circle cx="270" cy="120" r="11" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2"/><circle cx="270" cy="150" r="11" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2"/>' + say(4, 'اختزالي ثانٍ ← أرومات النطف (س)'),
        arw(270, 192, 270, 208, 'var(--ok)') + '<ellipse cx="248" cy="226" rx="12" ry="8" fill="var(--ok)" opacity="0.5" stroke="var(--ok)" stroke-width="1.8"/><line x1="260" y1="226" x2="320" y2="226" stroke="var(--ink)" stroke-width="2"/>' + say(5, 'التغير الشكلي ← نطفة ناضجة: رأس ووسط وذيل')
      ]
    }),

    /* ══════ الأحياء: تركيب الثمرة — ص138، سؤال الفصل (10-2) ══════ */
    fruitStructure: F({
      title: 'تركيب الثمرة: الطبقات الثلاث (وضّح بالرسم)',
      teaches: 'سؤال وزاري: جدار الثمرة ثلاث طبقات — الخارجية (Exocarp) جلد، والوسطى (Mesocarp) الجزء الطري، والداخلية (Endocarp) النواة. تختلف الطبقات نمواً وسمكاً. المصدر: ص138.',
      svg: '<svg viewBox="0 0 320 250" role="img" aria-label="قطاع ثمرة يبيّن طبقاتها الثلاث">' + DEFS4 +
        '<ellipse cx="150" cy="125" rx="118" ry="105" fill="#7CA85B" stroke="#4e7a37" stroke-width="3"/>' +
        '<ellipse cx="150" cy="125" rx="100" ry="88" fill="#F1C14B" stroke="#d6a52f" stroke-width="2"/>' +
        '<ellipse cx="150" cy="125" rx="42" ry="52" fill="#8a5a33" stroke="#5e3c20" stroke-width="2.4"/>' +
        '<ellipse cx="150" cy="125" rx="20" ry="28" fill="#c9a07a" stroke="#5e3c20" stroke-width="1.6"/>' +
        arw(300, 40, 250, 70, 'var(--ink)') + txt(300, 34, 'Exocarp — الطبقة الخارجية (جلد)', 10, 'var(--ink)', 'end') +
        arw(300, 125, 232, 120, 'var(--ink)') + txt(314, 128, 'Mesocarp — الوسطى (الطري)', 10, 'var(--ink)', 'end') +
        arw(300, 210, 182, 150, 'var(--ink)') + txt(300, 224, 'Endocarp — الداخلية (النواة)', 10, 'var(--ink)', 'end') +
        txt(150, 125, 'البذرة', 10, '#3a2614') + '</svg>',
      parts: [
        { x: 150, y: 35, label: 'الطبقة الخارجية (Exocarp)', note: 'جلد الثمرة أو غطاؤها الخارجي، أرق الطبقات عادةً.' },
        { x: 95, y: 125, label: 'الطبقة الوسطى (Mesocarp)', note: 'الجزء الطري اللحمي من الثمرة، وهو الأكثر سمكاً في كثير من الثمار.' },
        { x: 150, y: 90, label: 'الطبقة الداخلية (Endocarp)', note: 'النواة التي تحيط بالبذرة، قد تتصلب لتكوّن غلافاً صلباً.' },
        { x: 150, y: 125, label: 'البذرة', note: 'ناتج إخصاب البويضة، محاطة بطبقات جدار الثمرة الثلاث.' }
      ],
      steps: [
        '<ellipse cx="150" cy="125" rx="118" ry="105" fill="#7CA85B" stroke="#4e7a37" stroke-width="3"/>' + say(1, 'ارسم الحد الخارجي = الطبقة الخارجية (Exocarp)'),
        '<ellipse cx="150" cy="125" rx="118" ry="105" fill="#7CA85B" stroke="#4e7a37" stroke-width="3"/><ellipse cx="150" cy="125" rx="100" ry="88" fill="#F1C14B" stroke="#d6a52f" stroke-width="2"/>' + say(2, 'بداخلها الطبقة الوسطى (Mesocarp) الطرية'),
        '<ellipse cx="150" cy="125" rx="118" ry="105" fill="#7CA85B" stroke="#4e7a37" stroke-width="3"/><ellipse cx="150" cy="125" rx="100" ry="88" fill="#F1C14B" stroke="#d6a52f" stroke-width="2"/><ellipse cx="150" cy="125" rx="42" ry="52" fill="#8a5a33" stroke="#5e3c20" stroke-width="2.4"/>' + say(3, 'ثم الطبقة الداخلية (Endocarp) = النواة'),
        '<ellipse cx="150" cy="125" rx="20" ry="28" fill="#c9a07a" stroke="#5e3c20" stroke-width="1.6"/>' + txt(150, 128, 'البذرة', 10, '#3a2614') + say(4, 'في المركز البذرة، واكتب بيانات الطبقات الثلاث')
      ]
    }),

    /* ══════ الأحياء: الانشطار الثنائي في البكتيريا — شكل (4-3) ══════ */
    bacterialFission: F({
      title: 'الانشطار الثنائي في البكتيريا (التكاثر اللاجنسي)',
      teaches: 'سؤال وزاري: خطوات الانشطار الثنائي — اتصال الكروموسوم بالغشاء، توسع الجدار، تضاعف DNA مع تخصر، ثم تسحب الكروموسومين وانقسام الخلية إلى خليتين. المصدر: شكل (4-3) في الكتاب.',
      svg: '<svg viewBox="0 0 360 220" role="img" aria-label="أربع مراحل للانشطار الثنائي في البكتيريا">' + DEFS4 +
        /* 1 */ '<ellipse cx="55" cy="60" rx="34" ry="20" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.4"/><path d="M38 60 q17 -14 34 0 q-17 14 -34 0" fill="none" stroke="var(--bad)" stroke-width="2.2"/><circle cx="55" cy="60" r="2.5" fill="var(--bad)"/>' + txt(55, 96, '١) اتصال الكروموسوم', 9.5) +
        /* 2 */ '<ellipse cx="160" cy="60" rx="42" ry="21" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.4"/><path d="M140 60 q20 -15 40 0 q-20 15 -40 0" fill="none" stroke="var(--bad)" stroke-width="2.2"/>' + txt(160, 96, '٢) توسع الجدار والغشاء', 9.5) +
        /* 3 */ '<ellipse cx="275" cy="60" rx="46" ry="21" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.4"/><path d="M255 60 q14 -13 28 0 q-14 13 -28 0" fill="none" stroke="var(--bad)" stroke-width="2"/><path d="M271 60 q14 -13 28 0 q-14 13 -28 0" fill="none" stroke="var(--ok)" stroke-width="2"/><line x1="275" y1="42" x2="275" y2="78" stroke="var(--muted)" stroke-width="1.4" stroke-dasharray="3 3"/>' + txt(275, 96, '٣) تضاعف DNA وتخصر', 9.5) +
        /* 4 */ '<ellipse cx="120" cy="155" rx="30" ry="19" fill="var(--ok)" opacity="0.4" stroke="var(--ok)" stroke-width="2.2"/><path d="M104 155 q16 -12 32 0 q-16 12 -32 0" fill="none" stroke="var(--bad)" stroke-width="2"/>' +
        '<ellipse cx="200" cy="155" rx="30" ry="19" fill="var(--ok)" opacity="0.4" stroke="var(--ok)" stroke-width="2.2"/><path d="M184 155 q16 -12 32 0 q-16 12 -32 0" fill="none" stroke="var(--ok)" stroke-width="2"/>' +
        txt(160, 192, '٤) انقسام ← خليتان متماثلتان', 9.5) +
        arw(275, 85, 190, 135, 'var(--muted)') + '</svg>',
      parts: [
        { x: 55, y: 60, label: 'اتصال الكروموسوم بالغشاء', note: 'يتصل الكروموسوم البكتيري بمواقع معينة من غشاء الخلية (Plasma Membrane)، إشارة إلى تهيؤ الخلية للانقسام.' },
        { x: 160, y: 60, label: 'توسع الجدار والغشاء', note: 'تبدأ الخلية الانشطار بتوسع جدارها وغشائها، فتتسع الخلية بأكملها.' },
        { x: 275, y: 60, label: 'تضاعف DNA والتخصر', note: 'يتضاعف DNA فينتج كروموسومان متماثلان، ويبدأ الجدار والغشاء بالتخصر في الوسط.' },
        { x: 160, y: 155, label: 'الانقسام إلى خليتين', note: 'يتسحب الكروموسومان في اتجاهين متعاكسين، وتنقسم الخلية إلى خليتين متماثلتين وراثياً.' }
      ],
      steps: [
        '<ellipse cx="55" cy="60" rx="34" ry="20" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.4"/><path d="M38 60 q17 -14 34 0 q-17 14 -34 0" fill="none" stroke="var(--bad)" stroke-width="2.2"/>' + say(1, 'خلية بكتيرية، والكروموسوم متصل بالغشاء'),
        '<ellipse cx="160" cy="60" rx="42" ry="21" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.4"/>' + say(2, 'توسّع الجدار والغشاء فتكبر الخلية'),
        '<ellipse cx="275" cy="60" rx="46" ry="21" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="2.4"/><line x1="275" y1="42" x2="275" y2="78" stroke="var(--muted)" stroke-width="1.4" stroke-dasharray="3 3"/>' + say(3, 'تضاعف DNA (كروموسومان) وتخصّر في الوسط'),
        '<ellipse cx="120" cy="155" rx="30" ry="19" fill="var(--ok)" opacity="0.4" stroke="var(--ok)" stroke-width="2.2"/><ellipse cx="200" cy="155" rx="30" ry="19" fill="var(--ok)" opacity="0.4" stroke="var(--ok)" stroke-width="2.2"/>' + say(4, 'الانقسام ← خليتان بكتيريتان متماثلتان')
      ]
    })

  };

  const SUBJ = {
    spermatogenesis: 'الأحياء', fruitStructure: 'الأحياء', bacterialFission: 'الأحياء'
  };

  /* ── التصدير: لا يعتمد على ترتيب قراءة الملفات (نفس نمط figs-3.js) ── */
  let baseF = window.FIGS || {};
  let baseS = window.FIG_SUBJ || {};
  const uni = (a, b) => Object.assign(Object.assign({}, a || {}), b);
  Object.defineProperty(window, 'FIGS', {
    configurable: true, enumerable: true,
    get: () => uni(baseF, FIGS),
    set: v => { baseF = v || {}; }
  });
  Object.defineProperty(window, 'FIG_SUBJ', {
    configurable: true, enumerable: true,
    get: () => uni(baseS, SUBJ),
    set: v => { baseS = v || {}; }
  });
  const defsNow = window.FIG_DEFS || '';
  window.FIG_DEFS = defsNow.indexOf('figArrow4') >= 0 ? defsNow : defsNow + DEFS4;

  /* بيئة الفحص (Node) فقط — اتحاد الملفات مهما ترتّب التحميل */
  if (typeof module !== 'undefined' && module.exports && typeof global !== 'undefined' && global.window && !global.window.__figUnion4) {
    try {
      const target = global.window;
      const asObj = v => (v && typeof v === 'object') ? v : {};
      const p = new Proxy(target, {
        get(t, k) {
          const v = t[k];
          if (k === 'FIGS') return Object.assign({}, asObj(v), FIGS);
          if (k === 'FIG_SUBJ') return Object.assign({}, asObj(v), SUBJ);
          if (k === 'FIG_DEFS') return (typeof v === 'string' && v.indexOf('figArrow4') >= 0) ? v : (v || '') + DEFS4;
          return v;
        }
      });
      p.__figUnion4 = true;
      global.window = p;
    } catch (e) { /* يكفي التصدير المباشر */ }
  }
})();
