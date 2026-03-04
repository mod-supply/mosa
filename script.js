'use strict';

/* ============================================================
   CONFIGURATION — edit here only
   ============================================================ */
const WHATSAPP_NUMBER = '0530286992'; // ← change number here

/* ============================================================
   i18n TRANSLATIONS
   ============================================================ */
const TRANSLATIONS = {
  ar: {
    pageTitle         : 'موسى | مصمم ومطور',
    'nav.about'       : 'عن',
    'nav.skills'      : 'مهارات',
    'nav.projects'    : 'مشاريع',
    'nav.experience'  : 'خبرات',
    'nav.services'    : 'خدمات',
    'nav.contact'     : 'تواصل',
    'hero.name'       : 'موسى',
    'hero.subtitle'   : 'مؤسس كوكب الفن ومنصة آرت سبيس',
    'hero.tagline'    : 'مصمم هويات بصرية | مصمم سوشيال ميديا | مطور واجهات أمامية',
    'cmd.about'       : 'about',
    'cmd.skills'      : 'skills',
    'cmd.projects'    : 'projects',
    'cmd.experience'  : 'experience',
    'cmd.services'    : 'services',
    'cmd.contact'     : 'contact',
    'cmd.clear'       : 'clear',
    'about.title'     : '// عن موسى',
    'about.panelLabel': 'cat about.txt',
    'about.stat1'     : 'سنوات خبرة',
    'about.stat2'     : 'منصات مؤسِّسها',
    'about.stat3'     : 'أفكار إبداعية',
    'skills.title'    : '// المهارات',
    'skills.panelLabel': 'ls -la skills/',
    'skills.s1'       : 'تصميم الهوية البصرية',
    'skills.s2'       : 'تصميم سوشيال ميديا',
    'skills.s3'       : 'تطوير الواجهات الأمامية',
    'skills.s4'       : 'أساسيات UI/UX',
    'projects.title'  : '// المشاريع',
    'cat.prog.ar'     : 'برمجة',
    'cat.prog.en'     : 'Programming',
    'cat.prog.desc'   : 'مواقع وتطبيقات ويب فرونت اند',
    'cat.brand.ar'    : 'تصميم هويات بصرية',
    'cat.brand.en'    : 'Visual Identity',
    'cat.brand.desc'  : 'شعارات وهويات وأدلة براند',
    'cat.social.ar'   : 'تصميم سوشيال ميديا',
    'cat.social.en'   : 'Social Media',
    'cat.social.desc' : 'بوستات وستوري ورييلز وقوالب',
    'cat.projects'    : 'مشاريع',
    'proj.backLabel'  : 'الفئات',
    'exp.title'       : '// الخبرات',
    'exp.e1company'   : 'الإمداد العصري',
    'exp.e1date'      : 'يوليو 2025 – الآن',
    'exp.e1company_en': 'Al-Imdad Al-Asri',
    'exp.e1t1'        : 'تجهيز ومتابعة طلبات المتجر الإلكتروني',
    'exp.e2company'   : 'لوليفا شوكليت',
    'exp.e2date'      : 'يناير 2025 – مارس 2025',
    'exp.e2company_en': 'Loliva Chocolate · شهران',
    'exp.e2t1'        : 'تصميم المتجر الإلكتروني (واجهة وتجربة المستخدم)',
    'srv.title'       : '// الخدمات',
    'srv.s1ar'        : 'تصميم هوية بصرية',
    'srv.s2ar'        : 'تصميم واجهات',
    'srv.s3ar'        : 'تصميم سوشيال ميديا',
    'srv.s4ar'        : 'برمجة مواقع فرونت اند',
    'srv.waBtn'       : 'تواصل عبر واتساب',
    'contact.title'   : '// تواصل معي',
    'contact.panelLabel': 'cat contact.json',
    'contact.phoneKey': '"الهاتف"',
    'contact.waKey'   : '"واتساب"',
    'contact.xKey'    : '"تويتر"',
    'footer.text'     : 'صُنع بـ',
    'footer.by'       : 'موسى',
    'lga.toggleLabel' : 'مساعد التسويق',
    'lga.title'       : 'مساعد الخدمات',
    'lga.back'        : '← رجوع',
    'lga.restart'     : '↺ إعادة',
  },
  en: {
    pageTitle         : 'Mousa | Designer & Developer',
    'nav.about'       : 'About',
    'nav.skills'      : 'Skills',
    'nav.projects'    : 'Projects',
    'nav.experience'  : 'Experience',
    'nav.services'    : 'Services',
    'nav.contact'     : 'Contact',
    'hero.name'       : 'Mousa',
    'hero.subtitle'   : 'Founder of Kokab Al-Fan and Art Space',
    'hero.tagline'    : 'Visual Identity Designer | Social Media Designer | Frontend Developer',
    'cmd.about'       : 'about',
    'cmd.skills'      : 'skills',
    'cmd.projects'    : 'projects',
    'cmd.experience'  : 'experience',
    'cmd.services'    : 'services',
    'cmd.contact'     : 'contact',
    'cmd.clear'       : 'clear',
    'about.title'     : '// About Mousa',
    'about.panelLabel': 'cat about.txt',
    'about.stat1'     : 'Years Experience',
    'about.stat2'     : 'Platforms Founded',
    'about.stat3'     : 'Creative Ideas',
    'skills.title'    : '// Skills',
    'skills.panelLabel': 'ls -la skills/',
    'skills.s1'       : 'Visual Identity Design',
    'skills.s2'       : 'Social Media Design',
    'skills.s3'       : 'Frontend Development (HTML/CSS/JS)',
    'skills.s4'       : 'UI/UX Basics',
    'projects.title'  : '// Projects',
    'cat.prog.ar'     : 'Programming',
    'cat.prog.en'     : 'Programming',
    'cat.prog.desc'   : 'Frontend websites and web applications',
    'cat.brand.ar'    : 'Visual Identity Design',
    'cat.brand.en'    : 'Visual Identity',
    'cat.brand.desc'  : 'Logos, identities and brand guides',
    'cat.social.ar'   : 'Social Media Design',
    'cat.social.en'   : 'Social Media',
    'cat.social.desc' : 'Posts, stories, reels and templates',
    'cat.projects'    : 'Projects',
    'proj.backLabel'  : 'Categories',
    'exp.title'       : '// Experience',
    'exp.e1company'   : 'modren supply',
    'exp.e1date'      : 'July 2025 – Present',
    'exp.e1company_en': 'modren supply',
    'exp.e1t1'        : 'Preparing and tracking online store orders',
    'exp.e2company'   : 'Loliva Chocolate',
    'exp.e2date'      : 'January 2025 – March 2025',
    'exp.e2company_en': 'Loliva Chocolate · 2 months',
    'exp.e2t1'        : 'Designed the online store (UI & UX)',
    'srv.title'       : '// Services',
    'srv.s1ar'        : 'Visual Identity',
    'srv.s2ar'        : 'UI Design',
    'srv.s3ar'        : 'Social Media Design',
    'srv.s4ar'        : 'Frontend Websites',
    'srv.waBtn'       : 'Contact on WhatsApp',
    'contact.title'   : '// Contact',
    'contact.panelLabel': 'cat contact.json',
    'contact.phoneKey': '"phone"',
    'contact.waKey'   : '"whatsapp"',
    'contact.xKey'    : '"x_twitter"',
    'footer.text'     : 'Crafted with',
    'footer.by'       : 'Mousa',
    'lga.toggleLabel' : 'Marketing Assistant',
    'lga.title'       : 'Service Assistant',
    'lga.back'        : '← Back',
    'lga.restart'     : '↺ Restart',
  }
};

/* ============================================================
   BOOT SEQUENCE LINES
   ============================================================ */
const BOOT_LINES = {
  ar: [
    'تهيئة النظام...                [■■■■■■■■■■] 100%',
    'تحميل بيانات المستخدم...       [■■■■■■■■■■] 100%',
    'اتصال آمن مشفر...              [■■■■■■■■■■]  OK',
    'تحميل الوحدات الإبداعية...     [■■■■■■■■■■]  OK',
    'مرحباً، موسى. المنفذ جاهز ●',
  ],
  en: [
    'SYSTEM INIT...                 [■■■■■■■■■■] 100%',
    'LOADING USER DATA...           [■■■■■■■■■■] 100%',
    'ESTABLISHING SECURE LINK...    [■■■■■■■■■■]  OK',
    'LOADING CREATIVE MODULES...    [■■■■■■■■■■]  OK',
    'WELCOME, MOUSA. TERMINAL READY ●',
  ]
};

/* ============================================================
   PROJECTS DATA
   ── Edit objects below to add your real projects ──
   image : '' = show placeholder icon
   link  : '' = button disabled
   ============================================================ */
const PROJECTS_DATA = {
  programming: [
    { title_ar:'مشروع برمجة 01', title_en:'Programming Project 01', desc_ar:'وصف مختصر للمشروع — ما هو وما الذي يحله.', desc_en:'Short description — what it is and what it solves.', image:'', link:'' },
    { title_ar:'مشروع برمجة 02', title_en:'Programming Project 02', desc_ar:'وصف مختصر للمشروع — ما هو وما الذي يحله.', desc_en:'Short description — what it is and what it solves.', image:'', link:'' },
    { title_ar:'مشروع برمجة 03', title_en:'Programming Project 03', desc_ar:'وصف مختصر للمشروع — ما هو وما الذي يحله.', desc_en:'Short description — what it is and what it solves.', image:'', link:'' },
    { title_ar:'مشروع برمجة 04', title_en:'Programming Project 04', desc_ar:'وصف مختصر للمشروع — ما هو وما الذي يحله.', desc_en:'Short description — what it is and what it solves.', image:'', link:'' },
    { title_ar:'مشروع برمجة 05', title_en:'Programming Project 05', desc_ar:'وصف مختصر للمشروع — ما هو وما الذي يحله.', desc_en:'Short description — what it is and what it solves.', image:'', link:'' },
    { title_ar:'مشروع برمجة 06', title_en:'Programming Project 06', desc_ar:'وصف مختصر للمشروع — ما هو وما الذي يحله.', desc_en:'Short description — what it is and what it solves.', image:'', link:'' },
  ],
  branding: [
    { title_ar:'مشروع هوية 01', title_en:'Branding Project 01', desc_ar:'شعار واجهة ودليل هوية بصرية كاملة.', desc_en:'Full visual identity: logo, palette, brand guide.', image:'', link:'' },
    { title_ar:'مشروع هوية 02', title_en:'Branding Project 02', desc_ar:'شعار واجهة ودليل هوية بصرية كاملة.', desc_en:'Full visual identity: logo, palette, brand guide.', image:'', link:'' },
    { title_ar:'مشروع هوية 03', title_en:'Branding Project 03', desc_ar:'شعار واجهة ودليل هوية بصرية كاملة.', desc_en:'Full visual identity: logo, palette, brand guide.', image:'', link:'' },
    { title_ar:'مشروع هوية 04', title_en:'Branding Project 04', desc_ar:'شعار واجهة ودليل هوية بصرية كاملة.', desc_en:'Full visual identity: logo, palette, brand guide.', image:'', link:'' },
    { title_ar:'مشروع هوية 05', title_en:'Branding Project 05', desc_ar:'شعار واجهة ودليل هوية بصرية كاملة.', desc_en:'Full visual identity: logo, palette, brand guide.', image:'', link:'' },
    { title_ar:'مشروع هوية 06', title_en:'Branding Project 06', desc_ar:'شعار واجهة ودليل هوية بصرية كاملة.', desc_en:'Full visual identity: logo, palette, brand guide.', image:'', link:'' },
  ],
  social_media: [
    { title_ar:'مشروع سوشيال 01', title_en:'Social Media Project 01', desc_ar:'تصاميم بوستات وستوري لحسابات السوشيال ميديا.', desc_en:'Posts and stories designs for social media accounts.', image:'', link:'' },
    { title_ar:'مشروع سوشيال 02', title_en:'Social Media Project 02', desc_ar:'تصاميم بوستات وستوري لحسابات السوشيال ميديا.', desc_en:'Posts and stories designs for social media accounts.', image:'', link:'' },
    { title_ar:'مشروع سوشيال 03', title_en:'Social Media Project 03', desc_ar:'تصاميم بوستات وستوري لحسابات السوشيال ميديا.', desc_en:'Posts and stories designs for social media accounts.', image:'', link:'' },
    { title_ar:'مشروع سوشيال 04', title_en:'Social Media Project 04', desc_ar:'تصاميم بوستات وستوري لحسابات السوشيال ميديا.', desc_en:'Posts and stories designs for social media accounts.', image:'', link:'' },
    { title_ar:'مشروع سوشيال 05', title_en:'Social Media Project 05', desc_ar:'تصاميم بوستات وستوري لحسابات السوشيال ميديا.', desc_en:'Posts and stories designs for social media accounts.', image:'', link:'' },
    { title_ar:'مشروع سوشيال 06', title_en:'Social Media Project 06', desc_ar:'تصاميم بوستات وستوري لحسابات السوشيال ميديا.', desc_en:'Posts and stories designs for social media accounts.', image:'', link:'' },
  ]
};

const CAT_META = {
  programming:  { ar:'برمجة',              en:'Programming',     icon:'⟨/⟩' },
  branding:     { ar:'تصميم هويات بصرية', en:'Visual Identity', icon:'◈'   },
  social_media: { ar:'سوشيال ميديا',      en:'Social Media',    icon:'▣'   },
};

/* ============================================================
   LEAD-GEN ASSISTANT DATA
   ============================================================ */
const LGA_STRINGS = {
  ar: {
    s1q:'وش تحتاج؟', s1q_en:'What do you need?',
    s2q:'مجال مشروعك؟', s2q_en:'Your industry?',
    s3q:'متى تحتاجه؟', s3q_en:'Timeline?',
    s4q:'ميزانيتك التقريبية؟', s4q_en:'Budget (optional)',
    s5q:'أي تفاصيل إضافية؟', s5q_en:'Extra details (optional)',
    s5ph:'اكتب أي تفاصيل تساعدنا نخدمك بشكل أفضل…',
    skip:'تخطي (اختياري)', continue:'التالي ←', waBtn:'ابدأ على واتساب ◉',
    recHeader:'// التوصية', delivLabel:'ما ستحصل عليه', nextStep:'تواصل معنا على واتساب وسنرسل لك عرض سعر خلال <strong>ساعات</strong>.',
    svc_identity:'هوية بصرية', svc_social:'تصميم سوشيال ميديا', svc_ui:'تصميم واجهات UI', svc_frontend:'برمجة موقع فرونت اند',
    ind_brand:'براند شخصي', ind_biz:'متجر / أعمال', ind_rest:'مطعم', ind_tech:'تقنية', ind_other:'أخرى', ind_ph:'اذكر مجالك…',
    tl_urgent:'⚡ عاجل (1–3 أيام)', tl_week:'📅 أسبوع', tl_flex:'🌀 مرن',
    bud_low:'أقل من 1k', bud_mid:'1k – 3k', bud_high:'3k – 10k', bud_ns:'غير محدد',
  },
  en: {
    s1q:'What do you need?', s1q_en:'',
    s2q:'Your industry?', s2q_en:'',
    s3q:'Timeline?', s3q_en:'',
    s4q:'Budget (optional)', s4q_en:'',
    s5q:'Extra details (optional)', s5q_en:'',
    s5ph:'Any details that help us serve you better…',
    skip:'Skip (optional)', continue:'Next →', waBtn:'Start on WhatsApp ◉',
    recHeader:'// Recommendation', delivLabel:"What You'll Get", nextStep:'Contact us on WhatsApp and we\'ll send a quote within <strong>hours</strong>.',
    svc_identity:'Visual Identity', svc_social:'Social Media Design', svc_ui:'UI Design', svc_frontend:'Frontend Website',
    ind_brand:'Personal Brand', ind_biz:'Business / Store', ind_rest:'Restaurant', ind_tech:'Tech', ind_other:'Other', ind_ph:'Describe your industry…',
    tl_urgent:'⚡ Urgent (1–3 days)', tl_week:'📅 One Week', tl_flex:'🌀 Flexible',
    bud_low:'Under 1k', bud_mid:'1k – 3k', bud_high:'3k – 10k', bud_ns:'Not Sure',
  }
};

const LGA_DELIVERABLES = {
  ar: {
    identity : ['شعار احترافي (ملفات متعددة)','لوحة الألوان والخطوط','دليل الهوية البصرية (Brand Guide)','تطبيق على المواد الأساسية'],
    social   : ['تصاميم بوستات شهرية','قوالب ستوري ورييلز','تناسق بصري مع الهوية','ملفات قابلة للتعديل'],
    ui       : ['تصميم الشاشات الرئيسية (Figma)','نظام تصميم بسيط','نماذج تفاعلية (Prototype)','ملفات جاهزة للتطوير'],
    frontend : ['موقع متجاوب (HTML/CSS/JS)','تصميم سيبرنكي أو حسب الطلب','تحسين الأداء والسرعة','رفع على استضافة (اختياري)'],
  },
  en: {
    identity : ['Professional logo (multiple formats)','Color palette & typography','Brand identity guide','Applied to key materials'],
    social   : ['Monthly post designs','Story & reels templates','Visual consistency with brand','Editable source files'],
    ui       : ['Key screens design (Figma)','Basic design system','Interactive prototype','Dev-ready file handoff'],
    frontend : ['Responsive site (HTML/CSS/JS)','Cyberpunk or custom design','Performance optimized','Hosting deployment (optional)'],
  }
};

/* ============================================================
   APP BOOT
   ============================================================ */
let currentLang = localStorage.getItem('portfolioLang') || 'ar';

document.addEventListener('DOMContentLoaded', () => {
  /* Set WhatsApp links */
  const waNum  = WHATSAPP_NUMBER.replace(/^0/, '966');
  const waLink = `https://wa.me/${waNum}`;
  const wBtn   = document.getElementById('whatsapp-btn');
  const wCont  = document.getElementById('contact-wa-link');
  if (wBtn)   wBtn.href   = waLink;
  if (wCont)  wCont.href  = waLink;

  /* Boot → show site */
  runBoot(currentLang, () => {
    showSite();
    applyLanguage(currentLang);
    initAll();
  });

  /* Lang toggle */
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('portfolioLang', currentLang);
    applyLanguage(currentLang);
    document.dispatchEvent(new Event('langChanged'));
  });
});

/* ── Boot ── */
function runBoot(lang, cb) {
  const screen = document.getElementById('boot-screen');
  const lines  = document.getElementById('boot-lines');
  if (!screen || !lines) { cb(); return; }
  const msgs = BOOT_LINES[lang] || BOOT_LINES.ar;
  let i = 0;
  function next() {
    if (i >= msgs.length) {
      setTimeout(() => {
        screen.style.transition = 'opacity .6s';
        screen.style.opacity = '0';
        setTimeout(() => { screen.style.display = 'none'; cb(); }, 650);
      }, 500);
      return;
    }
    const d = document.createElement('div');
    d.className = 'boot-line';
    d.textContent = msgs[i++];
    lines.appendChild(d);
    setTimeout(next, 380);
  }
  next();
}

/* ── Show site ── */
function showSite() {
  const s = document.getElementById('site');
  if (!s) return;
  s.classList.remove('hidden');
  s.style.opacity = '0';
  s.style.transition = 'opacity .5s';
  requestAnimationFrame(() => requestAnimationFrame(() => { s.style.opacity = '1'; }));
}

/* ── Apply language ── */
function applyLanguage(lang) {
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.body.classList.toggle('lang-ar', lang === 'ar');
  document.body.classList.toggle('lang-en', lang === 'en');

  const lbl = document.getElementById('lang-label');
  if (lbl) lbl.textContent = lang.toUpperCase();

  document.title = TRANSLATIONS[lang].pageTitle || document.title;

  /* Translate all data-i18n elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = TRANSLATIONS[lang][key];
    if (val !== undefined) el.textContent = val;
  });

  /* Hero glitch text */
  const heroName = document.querySelector('.hero-name.glitch');
  if (heroName) heroName.setAttribute('data-glitch-text', TRANSLATIONS[lang]['hero.name']);

  /* About paragraphs */
  document.querySelectorAll('.about-ar').forEach(p => p.classList.toggle('hidden', lang === 'en'));
  document.querySelectorAll('.about-en').forEach(p => p.classList.toggle('hidden', lang === 'ar'));
}

/* ── Init all modules ── */
function initAll() {
  initCommandBar();
  initScrollReveal();
  initCopyButtons();
  initNavHighlight();
  initProjectsSection();
  initLeadGenAssistant();
}

/* ── Command bar ── */
function initCommandBar() {
  document.querySelectorAll('.cmd-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      if (target === 'clear') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.querySelectorAll('.cmd-btn').forEach(b => b.classList.remove('active'));
        return;
      }
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelectorAll('.cmd-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

/* ── Scroll reveal ── */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      if (e.target.id === 'skills') animateSkillBars();
      obs.unobserve(e.target);
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}
function animateSkillBars() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    const pct = getComputedStyle(bar).getPropertyValue('--pct') || bar.style.getPropertyValue('--pct');
    bar.style.setProperty('--pct', '0%');
    requestAnimationFrame(() => requestAnimationFrame(() => bar.style.setProperty('--pct', pct)));
  });
}

/* ── Copy buttons ── */
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      const fb   = btn.nextElementSibling;
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = Object.assign(document.createElement('textarea'), { value: text, style: 'position:fixed;opacity:0' });
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
      }
      if (fb) { fb.textContent = 'copied ✓'; setTimeout(() => fb.textContent = '', 2000); }
    });
  });
}

/* ── Nav highlight on scroll ── */
function initNavHighlight() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const t  = document.getElementById(id);
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
  const navAs = document.querySelectorAll('.nav-links a');
  const secs  = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let cur = '';
    secs.forEach(s => { if (s.getBoundingClientRect().top <= 120) cur = s.id; });
    navAs.forEach(a => {
      const active = a.getAttribute('href') === `#${cur}`;
      a.style.color       = active ? 'var(--cyan)' : '';
      a.style.textShadow  = active ? 'var(--glow-cyan)' : '';
    });
  }, { passive: true });
}

/* ============================================================
   PROJECTS SECTION
   ============================================================ */
let projActiveCat = null;

function initProjectsSection() {
  const cats    = document.getElementById('proj-categories');
  const backBtn = document.getElementById('proj-back-btn');
  if (!cats || !backBtn) return;

  updateCatCounts();

  document.querySelectorAll('.proj-cat-card').forEach(card => {
    card.addEventListener('click', () => showProjectGrid(card.dataset.cat));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showProjectGrid(card.dataset.cat); } });
  });

  backBtn.addEventListener('click', showCategories);

  document.addEventListener('langChanged', () => {
    updateCatCounts();
    updateCatTexts();
    if (projActiveCat) renderProjectCards(projActiveCat);
    syncProjBackLabel();
  });
}

function updateCatCounts() {
  const lang = document.documentElement.getAttribute('lang') || 'ar';
  const word = TRANSLATIONS[lang]['cat.projects'] || 'مشاريع';
  Object.keys(PROJECTS_DATA).forEach(cat => {
    const el = document.getElementById(`pcc-count-${cat}`);
    if (el) el.innerHTML = `${PROJECTS_DATA[cat].length} <span>${word}</span>`;
  });
}

function updateCatTexts() {
  const lang = document.documentElement.getAttribute('lang') || 'ar';
  /* data-i18n elements are already updated by applyLanguage */
  const lbl = document.getElementById('proj-active-cat-label');
  if (lbl && projActiveCat && CAT_META[projActiveCat]) {
    lbl.textContent = CAT_META[projActiveCat][lang === 'ar' ? 'ar' : 'en'];
  }
}

function showCategories() {
  projActiveCat = null;
  const cats = document.getElementById('proj-categories');
  const grid = document.getElementById('proj-grid-view');
  grid.classList.remove('pgv-visible');
  grid.setAttribute('aria-hidden', 'true');
  setTimeout(() => {
    cats.classList.remove('pcc-hidden');
    cats.setAttribute('aria-hidden', 'false');
    cats.querySelector('.proj-cat-card')?.focus();
  }, 300);
}

function showProjectGrid(cat) {
  projActiveCat = cat;
  const lang = document.documentElement.getAttribute('lang') || 'ar';
  const cats = document.getElementById('proj-categories');
  const grid = document.getElementById('proj-grid-view');

  cats.classList.add('pcc-hidden');
  cats.setAttribute('aria-hidden', 'true');

  renderProjectCards(cat);

  const lbl = document.getElementById('proj-active-cat-label');
  if (lbl && CAT_META[cat]) lbl.textContent = CAT_META[cat][lang === 'ar' ? 'ar' : 'en'];

  syncProjBackLabel();

  setTimeout(() => {
    grid.classList.add('pgv-visible');
    grid.setAttribute('aria-hidden', 'false');
    document.getElementById('proj-back-btn')?.focus();
  }, 280);
}

function renderProjectCards(cat) {
  const lang     = document.documentElement.getAttribute('lang') || 'ar';
  const projects = PROJECTS_DATA[cat] || [];
  const grid     = document.getElementById('proj-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const icons = { programming: '⟨/⟩', branding: '◈', social_media: '▣' };
  const soonText = lang === 'ar' ? 'قريباً' : 'Soon';
  const viewText = lang === 'ar' ? 'عرض المشروع ←' : 'View Project →';

  projects.forEach((proj, i) => {
    const title = lang === 'ar' ? proj.title_ar : proj.title_en;
    const desc  = lang === 'ar' ? proj.desc_ar  : proj.desc_en;
    const idx   = String(i + 1).padStart(2, '0');

    const article = document.createElement('article');
    article.className = 'proj-img-card';
    article.setAttribute('role', 'listitem');

    /* Image area */
    const imgWrap = document.createElement('div');
    imgWrap.className = 'pic-img-wrap';
    if (proj.image) {
      const img = Object.assign(document.createElement('img'), { src: proj.image, alt: title, loading: 'lazy' });
      imgWrap.appendChild(img);
    } else {
      imgWrap.innerHTML = `<div class="pic-img-placeholder"><span class="pic-ph-icon">${icons[cat] || '◈'}</span><span class="pic-ph-text">_ ${idx}</span></div>`;
    }

    /* Body */
    const body = document.createElement('div');
    body.className = 'pic-body';

    const indexEl = Object.assign(document.createElement('span'), { className: 'pic-index', textContent: `_${idx}` });
    const titleEl = Object.assign(document.createElement('h3'),   { className: 'pic-title', textContent: title });
    const descEl  = Object.assign(document.createElement('p'),    { className: 'pic-desc',  textContent: desc  });

    let linkEl;
    if (proj.link) {
      linkEl = Object.assign(document.createElement('a'), { className: 'pic-link', href: proj.link, target: '_blank', rel: 'noopener noreferrer', textContent: viewText });
    } else {
      linkEl = Object.assign(document.createElement('span'), { className: 'pic-link disabled', textContent: soonText });
    }

    body.append(indexEl, titleEl, descEl, linkEl);
    article.append(imgWrap, body);
    grid.appendChild(article);
  });
}

function syncProjBackLabel() {
  const lang = document.documentElement.getAttribute('lang') || 'ar';
  const text = TRANSLATIONS[lang]['proj.backLabel'] || 'الفئات';
  document.querySelectorAll('#proj-back-btn [data-i18n="proj.backLabel"]').forEach(s => s.textContent = text);
}

/* ============================================================
   LEAD-GEN ASSISTANT
   ============================================================ */
const lgaState = {
  open: false, minimized: false, step: 1, totalSteps: 5,
  answers: { service: null, industry: null, timeline: null, budget: null, details: '' }
};

let lgaPanel, lgaProgressFill, lgaProgressText, lgaStepContent, lgaBackBtn, lgaRestartBtn;

function initLeadGenAssistant() {
  lgaPanel        = document.getElementById('lga-panel');
  lgaProgressFill = document.getElementById('lga-progress-fill');
  lgaProgressText = document.getElementById('lga-progress-text');
  lgaStepContent  = document.getElementById('lga-step-content');
  lgaBackBtn      = document.getElementById('lga-back');
  lgaRestartBtn   = document.getElementById('lga-restart');
  const toggleBtn = document.getElementById('lga-toggle');
  const minBtn    = document.getElementById('lga-minimize');
  const closeBtn  = document.getElementById('lga-close');
  if (!lgaPanel || !toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    if (!lgaState.open)            lgaOpen();
    else if (lgaState.minimized)   lgaUnminimize();
    else                           lgaMinimize();
  });
  minBtn?.addEventListener('click',    e => { e.stopPropagation(); lgaMinimize(); });
  closeBtn?.addEventListener('click',  e => { e.stopPropagation(); lgaClose(); });
  lgaBackBtn?.addEventListener('click',    () => lgaGoBack());
  lgaRestartBtn?.addEventListener('click', () => lgaRestart());
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && lgaState.open && !lgaState.minimized) lgaMinimize(); });

  /* Re-render on lang change */
  document.addEventListener('langChanged', () => {
    lgaUpdateStaticStrings();
    if (lgaState.open && !lgaState.minimized) lgaRenderStep(lgaState.step);
  });
}

function lgaOpen() {
  lgaState.open = true; lgaState.minimized = false;
  lgaPanel.classList.add('lga-open');
  lgaPanel.classList.remove('lga-minimized');
  lgaPanel.setAttribute('aria-hidden', 'false');
  lgaRenderStep(lgaState.step);
  setTimeout(() => lgaPanel.querySelector('button,[tabindex="0"],textarea,input')?.focus(), 260);
}
function lgaClose() {
  lgaState.open = false;
  lgaPanel.classList.remove('lga-open', 'lga-minimized');
  lgaPanel.setAttribute('aria-hidden', 'true');
}
function lgaMinimize() { lgaState.minimized = true; lgaPanel.classList.add('lga-minimized'); }
function lgaUnminimize() {
  lgaState.minimized = false; lgaPanel.classList.remove('lga-minimized');
  setTimeout(() => lgaPanel.querySelector('button,textarea,input')?.focus(), 100);
}
function lgaGoBack()  { if (lgaState.step > 1) { lgaState.step--; lgaRenderStep(lgaState.step); } }
function lgaRestart() { lgaState.step = 1; lgaState.answers = { service:null, industry:null, timeline:null, budget:null, details:'' }; lgaRenderStep(1); }
function lgaAdvance() { lgaState.step < lgaState.totalSteps ? lgaRenderStep(++lgaState.step) : lgaShowResult(); }

function lgaRenderStep(step) {
  const lang = document.documentElement.getAttribute('lang') || 'ar';
  const T    = LGA_STRINGS[lang];
  /* Update progress */
  lgaProgressFill.style.width = Math.round((step / lgaState.totalSteps) * 100) + '%';
  lgaProgressText.textContent = `${step}/${lgaState.totalSteps}`;

  lgaStepContent.style.opacity = '0';
  lgaStepContent.style.transform = 'translateY(6px)';

  setTimeout(() => {
    lgaStepContent.innerHTML = '';
    if (step === 1) lgaBuildStep1(lang, T);
    if (step === 2) lgaBuildStep2(lang, T);
    if (step === 3) lgaBuildStep3(lang, T);
    if (step === 4) lgaBuildStep4(lang, T);
    if (step === 5) lgaBuildStep5(lang, T);
    if (lgaBackBtn) lgaBackBtn.style.display = step > 1 ? '' : 'none';
    lgaStepContent.style.transition = 'opacity .2s, transform .2s';
    lgaStepContent.style.opacity = '1';
    lgaStepContent.style.transform = 'translateY(0)';
    document.getElementById('lga-body').scrollTop = 0;
  }, 120);
}

function lgaPrompt(ar, en) {
  const d = document.createElement('div');
  d.className = 'lga-step-prompt';
  d.innerHTML = `<span class="lga-prompt-ar">${ar}</span>${en ? `<span class="lga-prompt-en">${en}</span>` : ''}`;
  return d;
}
function lgaMakeChoiceBtn(arText, enText, val, curVal, onSelect) {
  const btn = document.createElement('button');
  btn.className = 'lga-choice-btn' + (curVal === val ? ' selected' : '');
  btn.innerHTML = `<span class="lga-choice-ar">${arText}</span>${enText ? `<span class="lga-choice-en">${enText}</span>` : ''}`;
  btn.addEventListener('click', () => onSelect(val, btn));
  return btn;
}

function lgaBuildStep1(lang, T) {
  lgaStepContent.appendChild(lgaPrompt(T.s1q, T.s1q_en));
  const grid = document.createElement('div'); grid.className = 'lga-choices';
  [['hوية بصرية', 'Visual Identity', 'identity'], ['سوشيال ميديا', 'Social Media', 'social'],
   ['تصميم واجهات', 'UI Design', 'ui'], ['برمجة موقع', 'Frontend', 'frontend']].forEach(([ar, en, val]) => {
    const btn = lgaMakeChoiceBtn(lang==='ar'?T['svc_'+val]:en, lang==='ar'?en:'', val, lgaState.answers.service, v => { lgaState.answers.service=v; lgaAdvance(); });
    grid.appendChild(btn);
  });
  /* Fix display names from T */
  grid.innerHTML = '';
  [['identity','svc_identity'],['social','svc_social'],['ui','svc_ui'],['frontend','svc_frontend']].forEach(([val,key]) => {
    const btn = lgaMakeChoiceBtn(T[key], '', val, lgaState.answers.service, v => { lgaState.answers.service=v; lgaAdvance(); });
    grid.appendChild(btn);
  });
  lgaStepContent.appendChild(grid);
}

function lgaBuildStep2(lang, T) {
  lgaStepContent.appendChild(lgaPrompt(T.s2q, T.s2q_en));
  const grid = document.createElement('div'); grid.className = 'lga-choices';
  const otherWrap = document.createElement('div'); otherWrap.className = 'lga-other-wrap';
  const otherInput = Object.assign(document.createElement('input'), { className:'lga-text-input', type:'text', placeholder:T.ind_ph });
  if (lgaState.answers.industry && !['brand','biz','rest','tech'].includes(lgaState.answers.industry)) otherInput.value = lgaState.answers.industry;
  otherWrap.appendChild(otherInput);
  const contBtn = Object.assign(document.createElement('button'), { className:'lga-continue-btn', type:'button', textContent:T.continue });
  contBtn.style.display = 'none';

  [['ind_brand','brand'],['ind_biz','biz'],['ind_rest','rest'],['ind_tech','tech'],['ind_other','other']].forEach(([key,val]) => {
    const btn = lgaMakeChoiceBtn(T[key], '', val, lgaState.answers.industry, (v, el) => {
      grid.querySelectorAll('.lga-choice-btn').forEach(b => b.classList.remove('selected'));
      el.classList.add('selected');
      if (v === 'other') { otherWrap.classList.add('visible'); contBtn.style.display=''; otherInput.focus(); }
      else { otherWrap.classList.remove('visible'); lgaState.answers.industry=v; lgaAdvance(); }
    });
    grid.appendChild(btn);
  });
  contBtn.addEventListener('click', () => { lgaState.answers.industry = otherInput.value.trim()||'other'; lgaAdvance(); });
  if (lgaState.answers.industry === 'other' || (lgaState.answers.industry && !['brand','biz','rest','tech'].includes(lgaState.answers.industry))) { otherWrap.classList.add('visible'); contBtn.style.display=''; }
  lgaStepContent.append(grid, otherWrap, contBtn);
}

function lgaBuildStep3(lang, T) {
  lgaStepContent.appendChild(lgaPrompt(T.s3q, T.s3q_en));
  const grid = document.createElement('div'); grid.className = 'lga-choices lga-choices-1col';
  [['tl_urgent','urgent'],['tl_week','week'],['tl_flex','flex']].forEach(([key,val]) => {
    grid.appendChild(lgaMakeChoiceBtn(T[key], '', val, lgaState.answers.timeline, v => { lgaState.answers.timeline=v; lgaAdvance(); }));
  });
  lgaStepContent.appendChild(grid);
}

function lgaBuildStep4(lang, T) {
  lgaStepContent.appendChild(lgaPrompt(T.s4q, T.s4q_en));
  const grid = document.createElement('div'); grid.className = 'lga-choices';
  [['bud_low','<1k'],['bud_mid','1k-3k'],['bud_high','3k-10k'],['bud_ns','ns']].forEach(([key,val]) => {
    grid.appendChild(lgaMakeChoiceBtn(T[key], '', val, lgaState.answers.budget, v => { lgaState.answers.budget=v; lgaAdvance(); }));
  });
  const skip = Object.assign(document.createElement('button'), { className:'lga-skip-btn', type:'button', textContent:T.skip });
  skip.addEventListener('click', () => { lgaState.answers.budget=null; lgaAdvance(); });
  lgaStepContent.append(grid, skip);
}

function lgaBuildStep5(lang, T) {
  lgaStepContent.appendChild(lgaPrompt(T.s5q, T.s5q_en));
  const ta = Object.assign(document.createElement('textarea'), { className:'lga-textarea', placeholder:T.s5ph, value:lgaState.answers.details||'' });
  ta.addEventListener('input', () => lgaState.answers.details = ta.value);
  const cont = Object.assign(document.createElement('button'), { className:'lga-continue-btn', type:'button', textContent:T.continue });
  cont.addEventListener('click', () => { lgaState.answers.details = ta.value.trim(); lgaShowResult(); });
  const skip = Object.assign(document.createElement('button'), { className:'lga-skip-btn', type:'button', textContent:T.skip });
  skip.addEventListener('click', () => { lgaState.answers.details=''; lgaShowResult(); });
  lgaStepContent.append(ta, cont, skip);
}

function lgaShowResult() {
  const lang = document.documentElement.getAttribute('lang') || 'ar';
  const T = LGA_STRINGS[lang];
  const D = LGA_DELIVERABLES[lang];
  const a = lgaState.answers;

  lgaProgressFill.style.width = '100%';
  lgaProgressText.textContent = '✓';
  lgaStepContent.style.opacity = '0';
  lgaStepContent.style.transform = 'translateY(6px)';

  setTimeout(() => {
    lgaStepContent.innerHTML = '';
    const sKey   = a.service || 'identity';
    const sName  = T['svc_' + sKey] || sKey;
    const deliv  = D[sKey] || [];
    const indLbl = { brand:T.ind_brand, biz:T.ind_biz, rest:T.ind_rest, tech:T.ind_tech, other:T.ind_other }[a.industry] || a.industry || '';
    const tlLbl  = { urgent:T.tl_urgent, week:T.tl_week, flex:T.tl_flex }[a.timeline] || '';
    const bLbl   = a.budget || '';

    function tag(l, v) { return v ? `<span class="lga-stag">${l}: <span>${v}</span></span>` : ''; }
    const sL = lang==='ar' ? 'الخدمة' : 'Service';
    const iL = lang==='ar' ? 'المجال' : 'Industry';
    const tL = lang==='ar' ? 'الوقت'  : 'Timeline';
    const bL = lang==='ar' ? 'الميزانية' : 'Budget';

    const html = `
      <div class="lga-result">
        <div class="lga-result-header">${T.recHeader}</div>
        <div class="lga-result-service">${sName}</div>
        <div class="lga-summary-tags">${tag(sL,sName)}${tag(iL,indLbl)}${tag(tL,tlLbl)}${bLbl?tag(bL,bLbl):''}</div>
        <div class="lga-result-panel">
          <div class="lga-result-label">${T.delivLabel}</div>
          <ul class="lga-result-deliverables">${deliv.map(d=>`<li>${d}</li>`).join('')}</ul>
        </div>
        <div class="lga-result-next">${T.nextStep}</div>
      </div>`;
    lgaStepContent.innerHTML = html;

    /* WhatsApp button */
    const now = new Date();
    const tStr = now.toLocaleTimeString(lang==='ar'?'ar-SA':'en-US',{hour:'2-digit',minute:'2-digit'});
    const dStr = now.toLocaleDateString(lang==='ar'?'ar-SA':'en-US',{year:'numeric',month:'short',day:'numeric'});
    const num  = WHATSAPP_NUMBER.replace(/^0/,'966');
    const msg  = lang === 'ar'
      ? `مرحباً موسى! 👋\nجيت من الموقع وأبي أستفسر عن خدمة.\n\n🔧 الخدمة: ${sName}\n🏢 المجال: ${indLbl||'غير محدد'}\n⏱ الوقت: ${tlLbl||'غير محدد'}\n💰 الميزانية: ${bLbl||'غير محدد'}${a.details?`\n📝 تفاصيل: ${a.details}`:''}\n\n📅 ${dStr} — ${tStr}`
      : `Hi Mousa! 👋\nI visited your portfolio and I'm interested in a service.\n\n🔧 Service: ${sName}\n🏢 Industry: ${indLbl||'N/A'}\n⏱ Timeline: ${tlLbl||'N/A'}\n💰 Budget: ${bLbl||'N/A'}${a.details?`\n📝 Details: ${a.details}`:''}\n\n📅 ${dStr} — ${tStr}`;

    const waA = Object.assign(document.createElement('a'), { className:'lga-wa-btn', href:`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, target:'_blank', rel:'noopener noreferrer', textContent:T.waBtn });
    lgaStepContent.appendChild(waA);

    if (lgaBackBtn) lgaBackBtn.style.display = '';
    lgaStepContent.style.transition = 'opacity .2s, transform .2s';
    lgaStepContent.style.opacity = '1';
    lgaStepContent.style.transform = 'translateY(0)';
    document.getElementById('lga-body').scrollTop = 0;
  }, 120);
}

function lgaUpdateStaticStrings() {
  const lang = document.documentElement.getAttribute('lang') || 'ar';
  const T = TRANSLATIONS[lang];
  const lbl = document.querySelector('#lga-toggle .lga-toggle-label');
  if (lbl) lbl.textContent = T['lga.toggleLabel'] || '';
  const title = document.getElementById('lga-title');
  if (title) title.textContent = T['lga.title'] || '';
  const back = lgaBackBtn?.querySelector('span');
  if (back) back.textContent = T['lga.back'] || '';
  const restart = lgaRestartBtn?.querySelector('span');
  if (restart) restart.textContent = T['lga.restart'] || '';
}
