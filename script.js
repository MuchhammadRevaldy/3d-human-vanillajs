

'use strict';


let currentLang = localStorage.getItem('somalab-lang') || 'en';

const I18N = {
  en: {
    nav: { home: 'Home', about: 'About', content: 'Content', contact: 'Contact', start_explore: 'Start 3D Exploration' },
    home: {
      headline: 'Explore Human Anatomy at <span class="highlight">Your Fingertips</span>',
      subtext: 'Interactive 3D visualization provides a profound understanding of the human body. Gain valuable insights into organ systems, identify early biomarkers, and explore complex systemic conditions through our comprehensive, medically-accurate 3D platform.',
      cta: 'Start 3D Exploration', learn_more: 'Learn More',
      pill1: 'Precise Models', pill2: 'In-depth Systems', pill3: 'Clinical Insights',
      discover_title: 'Why Choose SomaLab?',
      discover_sub: 'Our platform goes beyond traditional 2D textbooks, offering an unprecedented level of clinical depth and interactivity.',
      feat1_title: 'Zoom to Cellular Level', feat1_desc: 'Seamlessly transition from macro organ structures to microscopic cellular activity and neurotransmitter pathways.',
      feat2_title: 'Clinical Biomarkers', feat2_desc: 'Visualize early signs of oxidative stress, toxins, and autoimmune markers before clinical diagnosis.',
      feat3_title: 'Accurate Anatomy', feat3_desc: 'Interact with highly detailed 3D models of the brain, heart, liver, digestive tract, and DNA.',
    },
    about: {
      badge: 'Discover SomaLab',
      title: 'Bridging the Gap Between <span class="text-gradient">Medical Science</span> and You.',
      subtitle: "SomaLab is an interactive digital anatomy and health educational platform designed to provide a deep, accurate, and accessible visualization of the human body's structures and functions.",
      story_title: 'Empowering Through Knowledge',
      story_p1: "This platform was created to bridge the gap between complex medical information and general public comprehension. We believe that knowledge of one's own body is the first step toward a healthier lifestyle.",
      story_p2: 'SomaLab brings modern 3D technology to your fingertips—empowering students, educators, medical professionals, and the general public to explore the wonders of the human body without limits.',
      visual: 'Explore<br>Without Limits',
      pillars_title: 'Our Core Pillars', pillars_sub: 'The foundations that drive our platform forward.',
      vision_title: 'Our Vision', vision_p: 'To be the leading interactive anatomy learning platform that democratizes medical knowledge, enabling individuals from all backgrounds to better recognize and understand their bodies.',
      mission_title: 'Our Mission', mission_li1: 'Present accurate yet lightweight and interactive 3D medical models.', mission_li2: 'Transform rigid biology learning into a fun exploration experience.', mission_li3: 'Provide reliable science-based information to improve public health literacy.',
      why_title: 'Why We Built It', why_p: 'Textbooks and 2D illustrations are often insufficient to represent the complexity of a living, moving body. SomaLab was built to create a virtual laboratory where your curiosity can be answered visually, in detail, and in real-time.',
    },
    content: {
      title: 'Clinical <span class="text-gradient">Insights</span>',
      subtitle: "Explore expertly curated articles on maintaining organ health and understanding your body's complex systems.",
    },
    contact: {
      title: 'Get in <span class="text-gradient">Touch</span>',
      subtitle: "Have questions about our medical visualization platform or interested in collaboration? We'd love to hear from you.",
      form_title: 'Send a Message', first_name: 'First Name', ph_fname: 'John', last_name: 'Last Name', ph_lname: 'Doe',
      email: 'Email Address', ph_email: 'john@example.com', message: 'Message', ph_message: 'How can we help you today?',
      submit: 'Send Message', hq: 'Headquarters', email_us: 'Email Us', call_us: 'Call Us', hours: 'Mon - Fri, 9:00 AM - 5:00 PM',
    },
    explore: {
      categories: { neurology: 'Neurology', hormones: 'Hormones', cardiovascular: 'Cardiovascular', toxins: 'Toxins', gut_health: 'Gut Health', genetics: 'Genetics', longevity: 'Longevity' },
      hotspots: { neural: 'Neural Zoomer', neurotrans: 'Neurotransmitters', hormone_z: 'Hormones Zoomer', cardio: 'Cardio Zoomer', toxins_panel: 'Toxins Panel', food: 'Food Sensitivity', gutzoomer: 'Gut Zoomer', genetics_test: 'Genetics Testing Suite', oxi: 'Oxidative Stress', nutri: 'Nutrition', auto: 'Autoimmunity' },
      video_labels: { rna_damage: 'RNA\nDamage', toxins_load: 'Toxins\nLoad', neural_health: 'Neural\nHealth', synapse_activity: 'Synapse\nActivity', microbiome_flora: 'Microbiome\nFlora', arterial_plaque: 'Arterial\nPlaque', steroid_pathways: 'Steroid\nPathways' },
      ui: { test_overview: 'Test Overview', endothelial: 'The Endothelial Dysfunction', metabolic: 'The Metabolic Syndrome', intestinal_perm: 'The Intestinal Permeability Pattern', estrogen_dom: 'The Estrogen Dominance', neurotransmitter: 'The Neurotransmitter', hormone_def: 'The Hormone Deficiency', tox_burden: 'The Total Tox Burden', oxi_damage: 'The Multi-System Oxidative Damage', demyelination: 'The Mild Demyelination', coming_soon: 'Test overview coming soon...' },
      select_system: 'SELECT SYSTEM', explore_cats: 'EXPLORE CATEGORIES', back: 'Back to Overview',
      sound_on: 'SOUND ON', sound_off: 'SOUND OFF', female: 'Female', male: 'Male',
    },
  },
  id: {
    nav: { home: 'Beranda', about: 'Tentang', content: 'Konten', contact: 'Kontak', start_explore: 'Mulai Eksplorasi 3D' },
    home: {
      headline: 'Jelajahi Anatomi Manusia di <span class="highlight">Ujung Jari Anda</span>',
      subtext: 'Visualisasi 3D interaktif memberikan pemahaman mendalam tentang tubuh manusia. Dapatkan wawasan berharga tentang sistem organ, identifikasi biomarker awal, dan jelajahi kondisi sistemik kompleks melalui platform 3D komprehensif kami yang akurat secara medis.',
      cta: 'Mulai Eksplorasi 3D', learn_more: 'Pelajari Lebih',
      pill1: 'Model Presisi', pill2: 'Sistem Mendalam', pill3: 'Wawasan Klinis',
      discover_title: 'Mengapa Memilih SomaLab?',
      discover_sub: 'Platform kami melampaui buku teks 2D tradisional, menawarkan tingkat kedalaman klinis dan interaktivitas yang belum pernah ada sebelumnya.',
      feat1_title: 'Zoom ke Level Sel', feat1_desc: 'Transisi mulus dari struktur organ makro ke aktivitas sel mikroskopis dan jalur neurotransmiter.',
      feat2_title: 'Biomarker Klinis', feat2_desc: 'Visualisasikan tanda-tanda awal stres oksidatif, toksin, dan penanda autoimun sebelum diagnosis klinis.',
      feat3_title: 'Anatomi Akurat', feat3_desc: 'Berinteraksi dengan model 3D sangat detail dari otak, jantung, hati, saluran pencernaan, dan DNA.',
    },
    about: {
      badge: 'Temukan SomaLab',
      title: 'Menjembatani Kesenjangan antara <span class="text-gradient">Ilmu Kedokteran</span> dan Anda.',
      subtitle: 'SomaLab adalah platform pendidikan anatomi digital interaktif yang dirancang untuk memberikan visualisasi mendalam, akurat, dan mudah diakses tentang struktur dan fungsi tubuh manusia.',
      story_title: 'Memberdayakan Melalui Pengetahuan',
      story_p1: 'Platform ini dibuat untuk menjembatani kesenjangan antara informasi medis yang kompleks dengan pemahaman masyarakat umum. Kami percaya bahwa pengetahuan tentang tubuh sendiri adalah langkah pertama menuju gaya hidup yang lebih sehat.',
      story_p2: 'SomaLab menghadirkan teknologi 3D modern ke ujung jari Anda—memberdayakan siswa, pendidik, profesional medis, dan masyarakat umum untuk menjelajahi keajaiban tubuh manusia tanpa batas.',
      visual: 'Jelajahi<br>Tanpa Batas',
      pillars_title: 'Pilar Utama Kami', pillars_sub: 'Fondasi yang mendorong platform kami ke depan.',
      vision_title: 'Visi Kami', vision_p: 'Menjadi platform pembelajaran anatomi interaktif terdepan yang mendemokratisasi pengetahuan medis, memungkinkan individu dari semua latar belakang untuk lebih mengenali dan memahami tubuh mereka.',
      mission_title: 'Misi Kami', mission_li1: 'Menyajikan model medis 3D yang akurat namun ringan dan interaktif.', mission_li2: 'Mengubah pembelajaran biologi yang kaku menjadi pengalaman eksplorasi yang menyenangkan.', mission_li3: 'Menyediakan informasi berbasis sains yang andal untuk meningkatkan literasi kesehatan masyarakat.',
      why_title: 'Mengapa Kami Membangunnya', why_p: 'Buku teks dan ilustrasi 2D seringkali tidak memadai untuk merepresentasikan kompleksitas tubuh yang hidup dan bergerak. SomaLab dibangun untuk menciptakan laboratorium virtual di mana rasa ingin tahu Anda dapat dijawab secara visual, detail, dan real-time.',
    },
    content: {
      title: 'Wawasan <span class="text-gradient">Klinis</span>',
      subtitle: 'Jelajahi artikel-artikel terkurasi tentang menjaga kesehatan organ dan memahami sistem kompleks tubuh Anda.',
    },
    contact: {
      title: 'Hubungi <span class="text-gradient">Kami</span>',
      subtitle: 'Punya pertanyaan tentang platform visualisasi medis kami atau tertarik berkolaborasi? Kami senang mendengar dari Anda.',
      form_title: 'Kirim Pesan', first_name: 'Nama Depan', ph_fname: 'Budi', last_name: 'Nama Belakang', ph_lname: 'Santoso',
      email: 'Alamat Email', ph_email: 'budi@contoh.com', message: 'Pesan', ph_message: 'Bagaimana kami dapat membantu Anda?',
      submit: 'Kirim Pesan', hq: 'Kantor Pusat', email_us: 'Email Kami', call_us: 'Hubungi Kami', hours: 'Sen - Jum, 09.00–17.00 WIB',
    },
    explore: {
      categories: { neurology: 'Neurologi', hormones: 'Hormon', cardiovascular: 'Kardiovaskular', toxins: 'Toksin', gut_health: 'Kesehatan Usus', genetics: 'Genetika', longevity: 'Longevitas' },
      hotspots: { neural: 'Neural Zoomer', neurotrans: 'Neurotransmiter', hormone_z: 'Hormon Zoomer', cardio: 'Kardio Zoomer', toxins_panel: 'Panel Toksin', food: 'Sensitivitas Makanan', gutzoomer: 'Usus Zoomer', genetics_test: 'Suite Tes Genetika', oxi: 'Stres Oksidatif', nutri: 'Nutrisi', auto: 'Autoimunitas' },
      video_labels: { rna_damage: 'Kerusakan\nRNA', toxins_load: 'Beban\nToksin', neural_health: 'Kesehatan\nNeural', synapse_activity: 'Aktivitas\nSinaps', microbiome_flora: 'Flora\nMikrobiom', arterial_plaque: 'Plak\nArterial', steroid_pathways: 'Jalur\nSteroid' },
      ui: { test_overview: 'Ikhtisar Tes', endothelial: 'Disfungsi Endotelial', metabolic: 'Sindrom Metabolik', intestinal_perm: 'Pola Permeabilitas Usus', estrogen_dom: 'Dominasi Estrogen', neurotransmitter: 'Neurotransmiter', hormone_def: 'Defisiensi Hormon', tox_burden: 'Beban Toksin Total', oxi_damage: 'Kerusakan Oksidatif Multi-Sistem', demyelination: 'Demielinasi Ringan', coming_soon: 'Ikhtisar tes segera hadir...' },
      select_system: 'PILIH SISTEM', explore_cats: 'KATEGORI EKSPLORASI', back: 'Kembali ke Overview',
      sound_on: 'SUARA ON', sound_off: 'SUARA OFF', female: 'Perempuan', male: 'Laki-laki',
    },
  },
};


const t = (path) => {
  const parts = path.split('.');
  let val = I18N[currentLang];
  for (const p of parts) { val = val?.[p]; }
  if (val !== undefined) return val;

  val = I18N.en;
  for (const p of parts) { val = val?.[p]; }
  return val ?? path;
};


function _setTxt(elOrSel, text) {
  if (!text && text !== '') return;
  const el = typeof elOrSel === 'string' ? document.querySelector(elOrSel) : elOrSel;
  if (el) el.textContent = text;
}
function _setHtml(elOrSel, html) {
  if (!html) return;
  const el = typeof elOrSel === 'string' ? document.querySelector(elOrSel) : elOrSel;
  if (el) el.innerHTML = html;
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('somalab-lang', lang);
  document.documentElement.lang = lang;


  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  const L = I18N[lang];


  _setTxt('a.nav-item[data-page="home"]', L.nav.home);
  _setTxt('a.nav-item[data-page="about"]', L.nav.about);
  _setTxt('a.nav-item[data-page="content"]', L.nav.content);
  _setTxt('a.nav-item[data-page="contact"]', L.nav.contact);
  document.querySelectorAll('.cta-button span:first-child, .btn-primary-large span:first-child').forEach(el => {
    el.textContent = L.nav.start_explore;
  });
  _setTxt('a.btn-secondary-large.spa-link', L.home.learn_more);


  _setHtml('h1.home-headline', L.home.headline);
  _setTxt('p.home-value-prop', L.home.subtext);
  const pills = document.querySelectorAll('.pill-item');
  [L.home.pill1, L.home.pill2, L.home.pill3].forEach((txt, i) => {
    if (!pills[i]) return;
    const icon = pills[i].querySelector('.pill-icon');
    pills[i].innerHTML = '';
    if (icon) pills[i].appendChild(icon);
    pills[i].appendChild(document.createTextNode(' ' + txt));
  });
  _setTxt('.discover-header h2', L.home.discover_title);
  _setTxt('.discover-header p', L.home.discover_sub);
  const feats = document.querySelectorAll('.feature-box');
  const featData = [
    [L.home.feat1_title, L.home.feat1_desc],
    [L.home.feat2_title, L.home.feat2_desc],
    [L.home.feat3_title, L.home.feat3_desc],
  ];
  feats.forEach((fb, i) => {
    if (!featData[i]) return;
    _setTxt(fb.querySelector('h3'), featData[i][0]);
    _setTxt(fb.querySelector('p'), featData[i][1]);
  });


  _setTxt('.about-badge', L.about.badge);
  _setHtml('h1.about-title', L.about.title);
  _setTxt('p.about-subtitle', L.about.subtitle);
  _setTxt('h2.story-heading', L.about.story_title);
  const storyPs = document.querySelectorAll('.story-text-card p');
  if (storyPs[0]) storyPs[0].textContent = L.about.story_p1;
  if (storyPs[1]) storyPs[1].textContent = L.about.story_p2;
  _setHtml('.visual-text', L.about.visual);
  const phHdr = document.querySelector('.about-pillars-header');
  if (phHdr) { _setTxt(phHdr.querySelector('h2'), L.about.pillars_title); _setTxt(phHdr.querySelector('p'), L.about.pillars_sub); }
  const pcards = document.querySelectorAll('.pillar-card');
  if (pcards[0]) { _setTxt(pcards[0].querySelector('h3'), L.about.vision_title); _setTxt(pcards[0].querySelector('p'), L.about.vision_p); }
  if (pcards[1]) {
    _setTxt(pcards[1].querySelector('h3'), L.about.mission_title);
    const lis = pcards[1].querySelectorAll('li');
    [L.about.mission_li1, L.about.mission_li2, L.about.mission_li3].forEach((txt, i) => {
      if (!lis[i]) return;
      const svg = lis[i].querySelector('svg');
      lis[i].innerHTML = '';
      if (svg) lis[i].appendChild(svg);
      lis[i].appendChild(document.createTextNode(' ' + txt));
    });
  }
  if (pcards[2]) { _setTxt(pcards[2].querySelector('h3'), L.about.why_title); _setTxt(pcards[2].querySelector('p'), L.about.why_p); }


  _setHtml('h1.content-title', L.content.title);
  _setTxt('p.content-subtitle', L.content.subtitle);
  initContent();


  _setHtml('h1.contact-title', L.contact.title);
  _setTxt('p.contact-subtitle', L.contact.subtitle);
  const fmHdr = document.querySelector('h2.form-heading');
  if (fmHdr) { const svg = fmHdr.querySelector('svg'); fmHdr.innerHTML = ''; if (svg) fmHdr.appendChild(svg); fmHdr.appendChild(document.createTextNode(' ' + L.contact.form_title)); }
  const fmLabels = document.querySelectorAll('.contact-form .form-group label');
  [L.contact.first_name, L.contact.last_name, L.contact.email, L.contact.message].forEach((txt, i) => { if (fmLabels[i]) fmLabels[i].textContent = txt; });
  const fmFields = document.querySelectorAll('.contact-form input, .contact-form textarea');
  [L.contact.ph_fname, L.contact.ph_lname, L.contact.ph_email, L.contact.ph_message].forEach((ph, i) => { if (fmFields[i]) fmFields[i].placeholder = ph; });
  const submitSpan = document.querySelector('button.submit-btn-premium span');
  if (submitSpan) submitSpan.textContent = L.contact.submit;
  const infoCrdHdrs = document.querySelectorAll('.info-card h3');
  [L.contact.hq, L.contact.email_us, L.contact.call_us].forEach((txt, i) => { if (infoCrdHdrs[i]) infoCrdHdrs[i].textContent = txt; });
  const hoursEl = document.querySelector('.info-card:last-child p');
  if (hoursEl) hoursEl.innerHTML = `+62 811 2345 6789<br>${L.contact.hours}`;


  _setTxt('#organ-sidebar .sidebar-title', L.explore.select_system);

  const backBtn = document.getElementById('back-zoom-btn');
  if (backBtn) { const svg = backBtn.querySelector('svg'); backBtn.innerHTML = ''; if (svg) backBtn.appendChild(svg); backBtn.appendChild(document.createTextNode(' ' + L.explore.back)); }

  const sp = document.getElementById('sound-pill');
  if (sp) sp.textContent = state.explore.soundOn ? L.explore.sound_on : L.explore.sound_off;

  _updateSexBtnLabels(L.explore.female, L.explore.male);

  const sbCont = document.getElementById('sidebar-buttons');
  if (sbCont) { sbCont._built = false; buildSidebar(); }


  if (state.explore.activeSubHotspot && typeof showSubPanel === 'function') {
    const activeSubId = state.explore.activeSubHotspot;
    const CATEGORIES_flat = typeof CATEGORIES !== 'undefined'
      ? CATEGORIES.flatMap(c => c.subHotspots || [])
      : [];
    const subDef = CATEGORIES_flat.find(s => s.id === activeSubId);
    if (subDef) {

      setTimeout(() => showSubPanel(activeSubId, subDef), 60);
    }
  }
}

function _updateSexBtnLabels(female, male) {
  [['btn-female', 'mob-female-btn'], female, ['btn-male', 'mob-male-btn'], male].reduce((_, __, i, arr) => {
    if (i % 2 !== 0) return;
    const ids = arr[i]; const lbl = arr[i + 1];
    ids.forEach(id => {
      const btn = document.getElementById(id);
      if (!btn) return;

      const oldWidth = btn.offsetWidth;
      const svg = btn.querySelector('svg');

      btn.innerHTML = '';
      if (svg) btn.appendChild(svg);
      btn.appendChild(document.createTextNode(' ' + lbl));

      const newWidth = btn.offsetWidth;


      if (oldWidth > 0 && newWidth > 0 && oldWidth !== newWidth) {
        btn.animate([
          { width: oldWidth + 'px', overflow: 'hidden' },
          { width: newWidth + 'px', overflow: 'hidden' }
        ], {
          duration: 350,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });
      }
    });
  }, null);
}




const state = {
  currentPage: 'home',
  explore: {
    sex: 'female',
    activeOrgan: null,
    hoveredOrgan: null,
    activeSubHotspot: null,
    loaded: false,
    soundOn: false,
    isMobile: window.innerWidth <= 768,
  }
};


let scrollAnim = { current: 0, target: 0, animId: null };


const PAGES = ['home', 'about', 'content', 'contact', 'explore'];

function navigateTo(page) {
  if (!PAGES.includes(page)) page = 'home';
  state.currentPage = page;

  document.querySelectorAll('.reveal-item').forEach(el => el.classList.remove('is-visible'));
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add('active');


  const navbar = document.getElementById('navbar');
  if (navbar) navbar.classList.toggle('hidden', page === 'explore');


  const langFloat = document.getElementById('lang-float');
  if (langFloat) langFloat.classList.toggle('hidden', page === 'explore');



  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });


  closeMobileMenu();


  window.scrollTo(0, 0);


  if (page === 'home') initHome();
  else if (page === 'about') { }
  else if (page === 'content') initContent();
  else if (page === 'contact') initContact();
  else if (page === 'explore') initExplore();


  injectFooter(page);


  setTimeout(() => triggerReveal(), 100);


  history.replaceState(null, '', `#${page}`);
}


document.addEventListener('click', (e) => {
  const link = e.target.closest('.spa-link');
  if (!link) return;
  e.preventDefault();
  const page = link.dataset.page;
  if (page) navigateTo(page);
});


function injectFooter(page) {
  if (page === 'explore') return;
  const containerId = `${page}-footer`;
  const container = document.getElementById(containerId);
  if (!container) return;
  const tpl = document.getElementById('footer-template');
  if (!tpl) return;
  container.innerHTML = '';
  container.appendChild(tpl.content.cloneNode(true));
}


const navToggle = document.getElementById('navbar-toggle');
const navMenu = document.getElementById('navbar-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

function closeMobileMenu() {
  navMenu?.classList.remove('is-open');
  navToggle?.classList.remove('is-active');
  if (menuIcon) menuIcon.style.display = '';
  if (closeIcon) closeIcon.style.display = 'none';
}

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.classList.toggle('is-active', isOpen);
  if (menuIcon) menuIcon.style.display = isOpen ? 'none' : '';
  if (closeIcon) closeIcon.style.display = isOpen ? '' : 'none';
});


function triggerReveal() {
  const items = document.querySelectorAll(`#page-${state.currentPage} .reveal-item`);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  items.forEach(item => observer.observe(item));

  setTimeout(() => {
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight) item.classList.add('is-visible');
    });
  }, 50);
}


let homeScene, homeCamera, homeRenderer, homeAnimId;

function initHome() {
  initParticles();
  setTimeout(() => initHome3D(), 200);
}

function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2.5 + 0.5,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    a: Math.random() * 0.4 + 0.1,
  }));

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(100,160,255,${p.a})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });
    if (state.currentPage === 'home') requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

function initHome3D() {
  if (typeof THREE === 'undefined') return;
  const canvas = document.getElementById('home-3d-canvas');
  if (!canvas) return;

  if (canvas._initialized) {
    if (homeRenderer) {
      homeRenderer.setSize(canvas.parentElement.offsetWidth, canvas.parentElement.offsetHeight);
      homeCamera.aspect = canvas.parentElement.offsetWidth / canvas.parentElement.offsetHeight;
      homeCamera.updateProjectionMatrix();
    }
    if (typeof window.animateHomeGlobal === 'function') window.animateHomeGlobal();
    return;
  }
  canvas._initialized = true;

  if (homeRenderer) { homeRenderer.dispose(); cancelAnimationFrame(homeAnimId); }

  homeScene = new THREE.Scene();
  homeCamera = new THREE.PerspectiveCamera(40, canvas.parentElement.offsetWidth / canvas.parentElement.offsetHeight, 0.1, 100);
  homeCamera.position.set(0, 0.6, 3.5);

  homeRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  homeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  homeRenderer.setSize(canvas.parentElement.offsetWidth, canvas.parentElement.offsetHeight);
  homeRenderer.outputEncoding = THREE.sRGBEncoding;

  const ambLight = new THREE.AmbientLight(0xc8d8ff, 0.4);
  homeScene.add(ambLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
  dirLight.position.set(3, 5, 3);
  homeScene.add(dirLight);
  const ptLight = new THREE.PointLight(0xa0c0ff, 0.3);
  ptLight.position.set(0, 3, 2);
  homeScene.add(ptLight);

  const controls = new THREE.OrbitControls(homeCamera, canvas);
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.5;
  controls.minPolarAngle = Math.PI / 2.5;
  controls.maxPolarAngle = Math.PI / 1.5;

  const bodyGroup = new THREE.Group();
  bodyGroup.position.set(0, -0.6, 0);
  homeScene.add(bodyGroup);

  const loader = new THREE.GLTFLoader();
  loader.load('assets/models/female_base_mesh (1).glb', (gltf) => {
    const scene3d = gltf.scene;
    scene3d.traverse(child => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color('#554499'), emissive: new THREE.Color('#3311aa'),
          emissiveIntensity: 0.05, roughness: 0.8, metalness: 0.0,
          transparent: true, opacity: 0.2, clearcoat: 0.6, clearcoatRoughness: 0.15,
          side: THREE.FrontSide, depthWrite: false,
        });
      }
    });
    scene3d.scale.set(2.25, 2.25, 2.25);
    scene3d.position.set(0, -1.9, 0);
    bodyGroup.add(scene3d);
  });

  const clock = new THREE.Clock();
  function animateHome() {
    if (state.currentPage !== 'home') return;
    homeAnimId = requestAnimationFrame(animateHome);
    const t = clock.getElapsedTime();
    bodyGroup.position.y = -0.6 + Math.sin(t * 2) * 0.05;
    controls.update();
    homeRenderer.render(homeScene, homeCamera);
  }
  window.animateHomeGlobal = animateHome;
  animateHome();
}


const ARTICLES_EN = [
  { id: 1, title: 'Cardiovascular Longevity', category: 'Heart Health', icon: '❤️', color: '#ff3366', shortDesc: 'Advanced protocols for maintaining arterial elasticity and heart muscle resilience across your lifespan.', content: 'The human heart beats around 100,000 times a day, pumping blood through a vast network of vessels. To maintain cardiovascular health, focus on a diet rich in omega-3 fatty acids, fiber, and antioxidants. Regular aerobic exercise (like brisk walking or swimming) for at least 150 minutes a week strengthens the heart muscle. Additionally, managing stress through mindfulness and getting 7-9 hours of sleep are crucial for preventing endothelial dysfunction and high blood pressure.', bentoClass: 'bento-hero' },
  { id: 2, title: 'Neuroplasticity', category: 'Brain Systems', icon: '🧠', color: '#a855f7', shortDesc: 'Biohack your brain for sustained focus.', content: 'Your nervous system is the body\'s command center. Protecting your nervous system involves consuming brain-boosting nutrients like vitamins B6 and B12, challenging your brain with new learning activities to build neuroplasticity, and avoiding neurotoxins like excessive alcohol. Chronic stress can lead to neuroinflammation, so daily relaxation techniques are vital.', bentoClass: 'bento-square-small' },
  { id: 3, title: 'Genetics & DNA', category: 'Cellular Health', icon: '🧬', color: '#3b82f6', shortDesc: 'Understanding the building blocks of life and how to protect your telomeres.', content: 'Your DNA contains the instructions for every cell in your body. Protecting your genetics means minimizing DNA damage from oxidative stress. Antioxidant-rich foods, minimizing exposure to environmental toxins and UV radiation, and maintaining metabolic health are key. Fasting or caloric restriction mimetics can trigger autophagy, the body\'s way of clearing out damaged cells and repairing DNA.', bentoClass: 'bento-tall' },
  { id: 4, title: 'Gut Microbiome', category: 'Digestive System', icon: '🦠', color: '#10b981', shortDesc: 'A vital connection between your gut bacteria and immunity.', content: 'The gut microbiome consists of trillions of bacteria that play a profound role in digestion, immunity, and even mood regulation. To support a healthy gut, consume a diverse range of plant-based foods, which provide prebiotics. Fermented foods like yogurt, kefir, and kimchi introduce beneficial probiotics. Limit processed foods and refined sugars, which can promote the growth of harmful bacteria.', bentoClass: 'bento-square-small' },
  { id: 5, title: 'Renal Function & Filtration', category: 'Detoxification', icon: '💧', color: '#f59e0b', shortDesc: 'Supporting your body\'s natural filtration systems.', content: 'The liver and kidneys are your body\'s primary detoxification organs. The liver processes nutrients and neutralizes harmful substances, while the kidneys filter waste from the blood to produce urine. You can maintain their health by drinking plenty of water, limiting sodium intake, and eating antioxidant-rich foods like berries and dark leafy greens.', bentoClass: 'bento-wide' },
  { id: 6, title: 'Cellular Immunity', category: 'Defense System', icon: '🛡️', color: '#0ea5e9', shortDesc: 'Building an impenetrable fortress against pathogens and oxidative stress.', content: 'A robust immune system relies on a delicate balance of white blood cells, antibodies, and cellular defense mechanisms. High levels of oxidative stress can impair immune function. Combat this with a diet high in vitamins C, D, and E, as well as zinc. Adequate sleep and routine exercise promote the efficient circulation of immune cells.', bentoClass: 'bento-wide' },
  { id: 7, title: 'Respiratory Health', category: 'Pulmonary System', icon: '💨', color: '#06b6d4', shortDesc: 'Optimize your lung capacity and oxygenation for peak energy levels and sustained vitality.', content: 'The lungs are responsible for oxygenating every cell in your body. Practices like diaphragmatic breathing can increase lung capacity and reduce activation of the stress response. Exposure to clean air, avoiding pollutants, and regular cardio training are key.', bentoClass: 'bento-hero' },
  { id: 8, title: 'Musculoskeletal System', category: 'Structural Health', icon: '🦴', color: '#f97316', shortDesc: 'Build a resilient framework of bones and muscles for lifelong strength and mobility.', content: 'Your bones and muscles form the structural foundation of your body. To maintain musculoskeletal health, prioritize resistance training (2–4x/week) which promotes bone density and combats sarcopenia. Collagen synthesis for cartilage health depends on vitamin C and adequate protein intake.', bentoClass: 'bento-tall' },
  { id: 9, title: 'Hormonal Balance', category: 'Endocrine System', icon: '⚗️', color: '#ec4899', shortDesc: 'Regulate your body\'s chemical messengers to master metabolism and mood.', content: 'The endocrine system governs hormones—chemical messengers that control metabolism, growth, mood, and reproduction. Key lifestyle factors for hormonal balance include managing cortisol (the stress hormone) through sleep and mindfulness, maintaining healthy blood sugar to keep insulin stable.', bentoClass: 'bento-square-small' },
  { id: 10, title: 'Sleep & Recovery', category: 'Restorative Health', icon: '🌙', color: '#6366f1', shortDesc: 'Master the science of sleep for cellular repair, memory, and longevity.', content: 'Sleep is where the brain consolidates memories, the body repairs tissues, and the glymphatic system flushes out metabolic waste. Optimal sleep (7–9 hours) requires a consistent schedule, a dark and cool environment, and minimizing blue light exposure.', bentoClass: 'bento-square-small' },
];

const ARTICLES_ID = [
  { id: 1, title: 'Longevitas Kardiovaskular', category: 'Kesehatan Jantung', icon: '❤️', color: '#ff3366', shortDesc: 'Protokol tingkat lanjut untuk menjaga elastisitas arteri dan ketahanan otot jantung sepanjang hidup Anda.', content: 'Jantung manusia berdetak sekitar 100.000 kali sehari, memompa darah melalui jaringan pembuluh darah yang luas. Untuk menjaga kesehatan kardiovaskular, fokuslah pada diet kaya asam lemak omega-3, serat, dan antioksidan. Latihan aerobik teratur (seperti jalan cepat atau berenang) setidaknya selama 150 menit seminggu memperkuat otot jantung. Selain itu, mengelola stres melalui mindfulness dan tidur 7-9 jam sangat penting untuk mencegah disfungsi endotel dan tekanan darah tinggi.', bentoClass: 'bento-hero' },
  { id: 2, title: 'Neuroplastisitas', category: 'Sistem Otak', icon: '🧠', color: '#a855f7', shortDesc: 'Retas (biohack) otak Anda untuk fokus yang berkelanjutan.', content: 'Sistem saraf Anda adalah pusat komando tubuh. Melindungi sistem saraf Anda melibatkan konsumsi nutrisi penambah kinerja otak seperti vitamin B6 dan B12, menantang otak Anda dengan aktivitas pembelajaran baru untuk membangun neuroplastisitas, dan menghindari neurotoksin seperti alkohol berlebihan. Stres kronis dapat menyebabkan peradangan saraf, sehingga teknik relaksasi harian sangat penting.', bentoClass: 'bento-square-small' },
  { id: 3, title: 'Genetika & DNA', category: 'Kesehatan Seluler', icon: '🧬', color: '#3b82f6', shortDesc: 'Memahami blok penyusun kehidupan dan cara melindungi telomer Anda.', content: 'DNA Anda berisi instruksi untuk setiap sel di tubuh Anda. Melindungi genetika Anda berarti meminimalkan kerusakan DNA dari stres oksidatif. Makanan kaya antioksidan, meminimalkan paparan racun lingkungan dan radiasi UV, serta menjaga kesehatan metabolisme adalah kunci. Puasa atau pembatasan kalori dapat memicu autofagi, cara tubuh membersihkan sel yang rusak dan memperbaiki DNA.', bentoClass: 'bento-tall' },
  { id: 4, title: 'Mikrobioma Usus', category: 'Sistem Pencernaan', icon: '🦠', color: '#10b981', shortDesc: 'Hubungan vital antara bakteri usus Anda dan kekebalan tubuh.', content: 'Mikrobioma usus terdiri dari triliunan bakteri yang memainkan peran mendalam dalam pencernaan, kekebalan, dan bahkan pengaturan suasana hati. Untuk mendukung usus yang sehat, konsumsilah beragam makanan nabati, yang menyediakan prebiotik. Makanan fermentasi seperti yogurt, kefir, dan kimchi memperkenalkan probiotik bermanfaat. Batasi makanan olahan dan gula rafinasi, yang dapat mendorong pertumbuhan bakteri berbahaya.', bentoClass: 'bento-square-small' },
  { id: 5, title: 'Fungsi & Filtrasi Ginjal', category: 'Detoksifikasi', icon: '💧', color: '#f59e0b', shortDesc: 'Mendukung sistem penyaringan alami tubuh Anda.', content: 'Hati dan ginjal adalah organ detoksifikasi utama tubuh Anda. Hati memproses nutrisi dan menetralkan zat berbahaya, sementara ginjal menyaring limbah dari darah untuk menghasilkan urin. Anda dapat menjaga kesehatannya dengan minum banyak air, membatasi asupan natrium, dan makan makanan kaya antioksidan seperti buah beri dan sayuran berdaun hijau gelap.', bentoClass: 'bento-wide' },
  { id: 6, title: 'Imunitas Seluler', category: 'Sistem Pertahanan', icon: '🛡️', color: '#0ea5e9', shortDesc: 'Membangun benteng tak tertembus terhadap patogen dan stres oksidatif.', content: 'Sistem kekebalan tubuh yang kuat bergantung pada keseimbangan sel darah putih, antibodi, dan mekanisme pertahanan seluler. Tingkat stres oksidatif yang tinggi dapat merusak fungsi kekebalan tubuh. Lawan ini dengan diet tinggi vitamin C, D, dan E, serta seng. Tidur yang cukup dan olahraga rutin mendorong sirkulasi sel kekebalan yang efisien.', bentoClass: 'bento-wide' },
  { id: 7, title: 'Kesehatan Pernapasan', category: 'Sistem Paru-paru', icon: '💨', color: '#06b6d4', shortDesc: 'Optimalkan kapasitas paru-paru dan oksigenasi Anda untuk tingkat energi puncak dan vitalitas yang berkelanjutan.', content: 'Paru-paru bertanggung jawab untuk mengoksigenasi setiap sel di tubuh Anda. Praktik seperti pernapasan diafragma dapat meningkatkan kapasitas paru-paru dan mengurangi aktivasi respons stres. Paparan udara bersih, menghindari polutan, dan latihan kardio teratur adalah kunci.', bentoClass: 'bento-hero' },
  { id: 8, title: 'Sistem Muskuloskeletal', category: 'Kesehatan Struktural', icon: '🦴', color: '#f97316', shortDesc: 'Bangun kerangka tulang dan otot yang tangguh untuk kekuatan dan mobilitas seumur hidup.', content: 'Tulang dan otot Anda membentuk fondasi struktural tubuh Anda. Untuk menjaga kesehatan muskuloskeletal, prioritaskan latihan ketahanan (2–4x/minggu) yang mendorong kepadatan tulang dan melawan sarkopenia. Sintesis kolagen untuk kesehatan tulang rawan bergantung pada vitamin C dan asupan protein yang cukup.', bentoClass: 'bento-tall' },
  { id: 9, title: 'Keseimbangan Hormonal', category: 'Sistem Endokrin', icon: '⚗️', color: '#ec4899', shortDesc: 'Atur pembawa pesan kimiawi tubuh Anda untuk menguasai metabolisme dan suasana hati.', content: 'Sistem endokrin mengatur hormon—pembawa pesan kimiawi yang mengontrol metabolisme, pertumbuhan, suasana hati, dan reproduksi. Faktor gaya hidup utama untuk keseimbangan hormonal termasuk mengelola kortisol (hormon stres) melalui tidur dan mindfulness, menjaga gula darah yang sehat untuk menjaga stabilitas insulin.', bentoClass: 'bento-square-small' },
  { id: 10, title: 'Tidur & Pemulihan', category: 'Kesehatan Restoratif', icon: '🌙', color: '#6366f1', shortDesc: 'Kuasai ilmu tidur untuk perbaikan sel, memori, dan longevitas.', content: 'Tidur adalah tempat otak mengkonsolidasikan ingatan, tubuh memperbaiki jaringan, dan sistem glimfatik membuang limbah metabolisme. Tidur optimal (7–9 jam) membutuhkan jadwal yang konsisten, lingkungan yang gelap dan sejuk, serta meminimalkan paparan cahaya biru.', bentoClass: 'bento-square-small' },
];

function getArticles() {
  return currentLang === 'id' ? ARTICLES_ID : ARTICLES_EN;
}

function initContent() {
  const grid = document.getElementById('bento-grid');
  if (!grid) return;

  const articles = getArticles();
  const readMoreTxt = currentLang === 'id' ? 'Baca Artikel' : 'Read Article';

  grid.innerHTML = articles.map((art, index) => `
    <div class="bento-card reveal-item reveal-delay-${(index % 6) + 1} ${art.bentoClass}" data-id="${art.id}" tabindex="0" role="button">
      <div class="bento-card-content">
        <div class="bento-card-header">
          <div class="bento-icon-box" style="font-size:${art.bentoClass === 'bento-hero' ? '28px' : '24px'}">${art.icon}</div>
          <span class="bento-category" style="color:${art.color}">${art.category}</span>
        </div>
        <div class="bento-text-body">
          <h3 class="bento-title">${art.title}</h3>
          <p class="bento-desc">${art.shortDesc}</p>
        </div>
        <div class="bento-footer">
          <span class="read-more">${readMoreTxt}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
      </div>
    </div>
  `).join('');

  if (!grid._initialized) {
    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.bento-card');
      if (!card) return;
      const art = getArticles().find(a => a.id === parseInt(card.dataset.id));
      if (art) openArticleModal(art);
    });

    document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
    document.getElementById('modal-backdrop')?.addEventListener('click', closeModal);
    grid._initialized = true;
  }

  setTimeout(() => triggerReveal(), 50);
}

function openArticleModal(art) {
  const modal = document.getElementById('article-modal');
  const header = document.getElementById('modal-header');
  const text = document.getElementById('modal-text');
  if (!modal || !header || !text) return;

  header.innerHTML = `
    <div class="modal-icon-box" style="background:${art.color}15;font-size:32px;">${art.icon}</div>
    <div>
      <div class="modal-category" style="color:${art.color}">${art.category}</div>
      <h2 class="modal-title">${art.title}</h2>
    </div>
  `;
  text.textContent = art.content;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('article-modal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}


function initContact() {
  const form = document.getElementById('contact-form');
  if (!form || form._initialized) return;
  form._initialized = true;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const phone = '6282387775667';
    const msg = `Halo SomaLab,\n\nNama: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\n\nPesan:\n${data.message}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  });
}


const CATEGORIES = [
  {
    id: 'neurology', label: 'Neurology', icon: '🧠', position: [0, 1.75, 0.05], shows: ['brain'], zoomOffset: 1.0, subHotspots: [
      { id: 'neural', label: 'Neural Zoomer', position: [0.08, 1.83, 0.15], focusOrgan: 'brain' },
      { id: 'neurotrans', label: 'Neurotransmitters', position: [0.08, 1.71, 0.15], focusOrgan: 'brain' }
    ]
  },
  {
    id: 'hormones', label: 'Hormones', icon: '♂️', position: [0, 1.21, 0.04], shows: ['brain', 'kidney'], zoomOffset: 4.8, subHotspots: [
      { id: 'hormone_z', label: 'Hormones Zoomer', position: [0.12, 1.65, 0.15], focusOrgan: 'brain' }
    ]
  },
  {
    id: 'cardiovascular', label: 'Cardiovascular', icon: '🤍', position: [0, 1.1, 0.10], shows: ['heart'], zoomOffset: 1.0, subHotspots: [
      { id: 'cardio', label: 'Cardio Zoomer', position: [0.08, 1.15, 0.15], focusOrgan: 'heart' }
    ]
  },
  {
    id: 'toxins', label: 'Toxins', icon: '🧪', position: [-0.07, 0.90, 0.1], shows: ['liver', 'kidney'], zoomOffset: 1.0, subHotspots: [
      { id: 'toxins_panel', label: 'Toxins Panel', position: [-0.15, 0.72, 0.15], focusOrgan: 'liver' }
    ]
  },
  {
    id: 'gut_health', label: 'Gut Health', icon: '🦠', position: [-0.05, 0.65, 0.1], shows: ['intestine', 'kidney', 'liver'], zoomOffset: 2, subHotspots: [
      { id: 'food', label: 'Food Sensitivity', position: [-0.05, 0.82, 0.12], focusOrgan: 'intestine' },
      { id: 'gutzoomer', label: 'Gut Zoomer', position: [0.08, 0.65, 0.12], focusOrgan: 'intestine' }
    ]
  },
  {
    id: 'genetics', label: 'Genetics', icon: '🧬', position: [-0.50, 0.85, -0.1], shows: ['dna'], zoomOffset: 0.65, subHotspots: [
      { id: 'genetics_test', label: 'Genetics Testing Suite', position: [-0.58, 0.85, -0.13], focusOrgan: 'dna' }
    ]
  },
  {
    id: 'longevity', label: 'Longevity', icon: '🧫', position: [0.55, 0.85, 0.0], shows: ['cell'], zoomOffset: 0.25, subHotspots: [
      { id: 'oxi', label: 'Oxidative Stress', position: [0.54, 0.85, 0.08], focusOrgan: 'cell' },
      { id: 'nutri', label: 'Nutrition', position: [0.53, 0.83, 0.08], focusOrgan: 'cell' },
      { id: 'auto', label: 'Autoimmunity', position: [0.55, 0.81, 0.08], focusOrgan: 'cell' }
    ]
  },
];

const ORGAN_MODELS = [
  { id: 'brain', file: 'assets/models/human-brain.glb', position: [0, 1.75, 0.05], scale: 0.15, rotation: [0, -1.5, 0], color: '#ff66c4', emissive: '#ff2288' },
  { id: 'heart', file: 'assets/models/realistic_human_heart.glb', position: [0, 1.1, 0.10], scale: 0.15, color: '#aa1144', emissive: '#ff5588' },
  { id: 'liver', file: 'assets/models/human_liver_and_gallbladder.glb', position: [-0.07, 0.80, 0.1], rotation: [0, -1.5, 0], scale: 1, color: '#dd3366', emissive: '#ff77aa' },
  { id: 'kidney', file: 'assets/models/human_kidney.glb', position: [0, 0.67, 0.04], scale: 0.1, color: '#550000', emissive: '#880011' },
  { id: 'intestine', file: 'assets/models/small_and_large_intestine.glb', position: [-0.16, 0.45, 0.1], scale: 0.3, color: '#aa1144', emissive: '#ff5588' },
  { id: 'dna', file: 'assets/models/dna.glb', position: [-0.50, 0.85, -0.13], rotation: [0.6, 0.75, 1.4], scale: 0.00007, color: '#ff2288', emissive: '#ff44aa' },
  { id: 'cell', file: 'assets/models/eukaryotic_cell.glb', position: [0.55, 0.85, 0.0], rotation: [0, 1.5, 1.5], scale: 0.06, color: '#0044ff', emissive: '#0088ff' },
];

const VIDEO_MAP = {
  'oxi': { src: 'assets/models/OxidativeStressV03.mp4', label: 'RNA\nDamage' },
  'toxins_panel': { src: 'assets/models/ToxinsV03.mp4', label: 'Toxins\nLoad' },
  'neural': { src: 'assets/models/NeuralHealthV03.mp4', label: 'Neural\nHealth' },
  'neurotrans': { src: 'assets/models/Neurotransmiters.mp4', label: 'Synapse\nActivity' },
  'gutzoomer': { src: 'assets/models/MasterGutZoomerV03.mp4', label: 'Microbiome\nFlora' },
  'cardio': { src: 'assets/models/CardioZoomerNew.mp4', label: 'Arterial\nPlaque' },
  'hormone_z': { src: 'assets/models/Hormones3D.mp4', label: 'Steroid\nPathways' },
};

const SUBHOTSPOT_CONTENT = {
  'neural': { primary: 'The Mild Demyelination & Cognitive Pattern', secondary: 'Test Overview' },
  'neurotrans': { primary: 'The Neurotransmitter Imbalance & Mood-Cognitive Pattern', secondary: 'Test Overview' },
  'hormone_z': { primary: 'The Postmenopausal Bone Loss & Hormone Deficiency Pattern', secondary: 'Test Overview' },
  'cardio': { primary: 'The Endothelial Dysfunction & Cardiovascular Risk Pattern', secondary: 'Test Overview' },
  'toxins_panel': { primary: 'The Total Tox Burden & Environmental Toxicity Pattern', secondary: 'Test Overview' },
  'oxi': { primary: 'The Multi-System Oxidative Damage', secondary: 'Test Overview' },
  'food': { primary: 'Comprehensive Food Sensitivity Testing — 209 Foods & 57 Additives', secondary: 'Test Overview' },
  'gutzoomer': { primary: 'The Intestinal Permeability & Inflammation Pattern', secondary: 'Test Overview' },
  'genetics_test': { primary: 'Comprehensive Genetic Blueprint for Personalized Health Optimization', secondary: 'Test Overview' },
  'nutri': { primary: 'Comprehensive Cellular Nutrition Assessment — 40+ Nutrients', secondary: 'Test Overview' },
  'auto': { primary: 'Comprehensive Autoimmune Disease Screen — 30+ Tissue Antibodies', secondary: 'Test Overview' },
};

const PANEL_CONTENT = {
  'neural': {
    primary: `<h2 class="panel-title">The Mild Demyelination & Cognitive Pattern</h2>
<div class="panel-body-text">
<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Picture</h3></div>
<p>Rachel, a 38-year-old nurse, noticed occasional difficulty finding words during patient handoffs and mild fatigue that worsened throughout her shifts.</p>
<p>She experienced subtle coordination issues and brief episodes of visual blurring that resolved within minutes.</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Key Biomarkers Working Together</h3></div>
<div class="biomarkers-list">
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Anti-Myelin Basic Protein (≤ 10)</span>
      <span class="bm-desc"></span>
    </div>
    <div class="bm-value val-normal">✓ NORMAL</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Demyelination and oligodendrocyte stress</span>
      <span class="bm-desc">17.8</span>
    </div>
    <div class="bm-value val-normal">✓ NORMAL</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Anti-GABA Receptor (≤ 10)</span>
      <span class="bm-desc">Impaired inhibitory neurotransmission</span>
    </div>
    <div class="bm-value val-normal">↓ 5.9</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Anti-AChR (≤ 10)</span>
      <span class="bm-desc">Impaired neuromuscular signalling</span>
    </div>
    <div class="bm-value val-normal">↓ 8.3</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Anti-NMDA Receptor (≤ 10)</span>
      <span class="bm-desc">Impaired excitatory neurotransmission</span>
    </div>
    <div class="bm-value val-normal">↓ 6.5</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Anti-MOG (≤ 10)</span>
      <span class="bm-desc"></span>
    </div>
    <div class="bm-value val-normal">✓ NORMAL</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Impaired myelin integrity</span>
      <span class="bm-desc">7.1</span>
    </div>
    <div class="bm-value val-normal">✓ NORMAL</div>
  </div>
</div>

<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Insight</h3></div>
<p>This pattern indicates mild autoimmune activity directed toward neuronal structural components rather than synaptic receptors.</p>
<p>The presence of anti-myelin basic protein antibodies reflects early demyelination and oligodendrocyte stress, consistent with intermittent conduction delays and subtle neurological symptoms.</p>
<p>The absence of anti-GABA, anti-AChR, anti-NMDA, and anti-MOG antibodies suggests that receptor-mediated neurotransmission and broader myelin integrity remain largely preserved, pointing to an early stage of autoimmune involvement.</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Neuroprotective Support Protocol</h3></div>
<div class="protocols-list">
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Glutamine</span>
      <span class="protocol-dosage">500 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Glutamine supports GABA synthesis by providing a precursor for glutamate, which is then converted into GABA. Glutamine can be converted to glutamate through the action of the enzyme glutaminase.</li>
      <li>Following this, glutamate serves as the substrate for the enzyme glutamate decarboxylase (GAD), which catalyzes the conversion of glutamate to GABA.</li>
      <li>Therefore, oral intake of glutamine supports the synthesis of GABA and helps improve its levels.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Coenzyme Q10</span>
      <span class="protocol-dosage">100 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Studies have reported that Coenzyme Q10 supplementation reduced glutamate excitotoxicity and oxidative stress.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">PUFAs</span>
      <span class="protocol-dosage">950 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>PUFAs reduce inflammation by reducing the levels of proinflammatory cytokines and animal studies showed that PUFAs prevent demyelination and promotes remyelination and neuronal protection.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Vitamin D</span>
      <span class="protocol-dosage">600 IU/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Vitamin D influences neurodegenerative disease risk and progression, and a few studies have suggested its role in the development and function of the CNS.</li>
      <li>Studies have reported that it reduces inflammation in inflammatory demyelination diseases.</li>
      <li>Magnesium</li>
      <li>400 mg/day</li>
      <li>Magnesium is crucial for the proper functioning of the nervous system.</li>
      <li>Magnesium is used to treat pain in various conditions. Studies have reported low levels of magnesium in patients with migraine.</li>
      <li>Magnesium prevents gluatamate toxicity by blocking the glutamate receptors.</li>
    </ul>
  </div>
</div>

<div class="next-button-container" id="go-to-overview-btn">
  <div class="next-content">
    <span class="next-label">EXPLORE</span>
    <span class="next-title">View Test Overview</span>
  </div>
  <div class="next-arrow-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
</div>

</div>`,
    overview: `<h2 class="panel-title">Neural Zoomer Test Overview</h2>
<div class="panel-body-text">
<p>The Neural Zoomer is a comprehensive array of neurological autoantibodies which offers research-backed guidance on neuroinflammation and brain health.</p>
<p>It aims to provide early detection of autoimmune processes that target the brain and peripheral nervous system.</p>
<div class="section-header"><span class="section-icon">◉</span><h3>Clinical Applications</h3></div>
<ul class="protocol-bullets">
  <li>Early screening for neurodegenerative diseases.</li>
  <li>Investigating unexplained cognitive decline or brain fog.</li>
  <li>Evaluating blood-brain barrier integrity.</li>
</ul>
</div>`
  },
  'neurotrans': {
    primary: `<h2 class="panel-title">The Neurotransmitter Imbalance & Mood-Cognitive Pattern</h2>
<div class="panel-body-text">
<p class="panel-subtitle" style="font-style:italic;color:var(--accent-blue);margin-top:-30px;margin-bottom:30px;">When Barrier Function Breaks Down</p>
<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Picture</h3></div>
<p>Sarah, a 32-year-old marketing executive, began experiencing persistent low mood, difficulty concentrating during meetings, and disrupted sleep patterns.</p>
<p>She noticed increased anxiety before presentations and found herself relying more heavily on caffeine to maintain focus throughout the day.</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Key Biomarkers Working Together</h3></div>
<div class="biomarkers-list">
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Serotonin (5-HIAA) (51.2-127.9 mcg/g)</span>
      <span class="bm-desc">Degrading commensal</span>
    </div>
    <div class="bm-value val-normal">✓ 46.5</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Morning Cortisol (6.2-19.4 μg/dL)</span>
      <span class="bm-desc">Elevated intestinal permeability marker</span>
    </div>
    <div class="bm-value val-normal">✓ NORMAL</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Dopamine (125.2-254.7 mcg/g)</span>
      <span class="bm-desc">Intestinal inflammation</span>
    </div>
    <div class="bm-value val-high">↓ 119.2</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Homovanillic Acid (HVA) (3535 - 8455 mg/24hr)</span>
      <span class="bm-desc">Gluten sensitivity</span>
    </div>
    <div class="bm-value val-normal">✓ 3178</div>
  </div>
</div>

<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Insight</h3></div>
<p>This pattern reveals a complex neurotransmitter network dysfunction affecting mood regulation, stress response, and cognitive performance.</p>
<p>Significantly low serotonin metabolites indicate compromised mood stability and sleep regulation, while markedly elevated cortisol suggests chronic stress activation disrupting normal neurotransmitter synthesis.</p>
<p>Mildly reduced GABA activity contributes to heightened anxiety and difficulty with relaxation, while dopamine dysfunction (evidenced by low dopamine and significantly reduced HVA) affects motivation and reward processing.</p>
<p>This interconnected imbalance creates a cycle where stress depletes neurotransmitters, leading to further mood and cognitive symptoms.</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Neurotransmitter Balance Support Protocol</h3></div>
<div class="protocols-list">
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">L-Tryptophan</span>
      <span class="protocol-dosage">500 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>L-Tryptophan serves as the precursor to serotonin synthesis.</li>
      <li>It crosses the blood-brain barrier and is converted to 5-hydroxytryptophan (5-HTP) by tryptophan hydroxylase, then to serotonin by aromatic L-amino acid decarboxylase.</li>
      <li>Adequate tryptophan availability supports mood stability, sleep quality, and emotional regulation</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">GABA</span>
      <span class="protocol-dosage">10 billion CFU/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>GABA is the brain's primary inhibitory neurotransmitter, promoting calmness and reducing anxiety.</li>
      <li>While oral GABA has limited blood-brain barrier penetration, studies suggest it may influence the enteric nervous system and potentially support central GABA activity through vagal pathways, helping to restore the excitatory-inhibitory balance.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Tyrosine</span>
      <span class="protocol-dosage">500 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>L-Tyrosine is the precursor for dopamine, norepinephrine, and epinephrine synthesis.</li>
      <li>Tyrosine hydroxylase converts tyrosine to L-DOPA, which is then converted to dopamine.</li>
      <li>This supports motivation, focus, and stress resilience, particularly during periods of high cognitive or physical demand.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Phosphatidylserine</span>
      <span class="protocol-dosage">100 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Phosphatidylserine maintains neuronal membrane integrity and supports acetylcholine receptor function. It enhances memory formation, cognitive processing, and helps regulate cortisol response to stress, supporting both neurotransmitter function and stress hormone balance</li>
      <li>400 mg/day</li>
      <li>500 mg/day</li>
      <li>Magnesium acts as a cofactor in over 300 enzymatic reactions, including those involved in neurotransmitter synthesis and function.</li>
      <li>It modulates NMDA receptors, supports GABA activity, and helps regulate the HPA axis.</li>
      <li>The glycinate form enhances absorption and provides additional calming effects through glycine's inhibitory neurotransmitter properties.</li>
    </ul>
  </div>
</div>

<div class="next-button-container" id="go-to-overview-btn">
  <div class="next-content">
    <span class="next-label">EXPLORE</span>
    <span class="next-title">View Test Overview</span>
  </div>
  <div class="next-arrow-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
</div>

</div>`,
    overview: `<h2 class="panel-title">Neurotransmitter Test Overview</h2>
<div class="panel-body-text">
<p>This panel measures urinary neurotransmitters and their metabolites to assess the balance of excitatory and inhibitory pathways in the central nervous system.</p>
<div class="section-header"><span class="section-icon">◉</span><h3>Clinical Applications</h3></div>
<p>Helps identify the root cause of mood disorders, chronic fatigue, anxiety, sleep issues, and cognitive difficulties, allowing targeted nutritional and lifestyle support.</p>
</div>`
  },
  'hormone_z': {
    primary: `<h2 class="panel-title">The Postmenopausal Bone Loss & Hormone Deficiency Pattern</h2>
<div class="panel-body-text">
<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Picture</h3></div>
<p>Margaret,a 56-year-old teacher, experienced her last menstrual period 18 months ago and recently noticed height loss and back pain.</p>
<p>Her recent DEXA scan showed early osteopenia, and she was concerned about her family history of hip fractures:</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Key Biomarkers Working Together</h3></div>
<div class="biomarkers-list">
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Deoxypyridinoline (DPD) (2.6-8.7nmol/mmol)</span>
      <span class="bm-desc">Excessive collagen breakdown</span>
    </div>
    <div class="bm-value val-normal">✓ 12.6</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Pyridinoline (PYD) (20-40 nmol/mmol)</span>
      <span class="bm-desc">Excessive collagen breakdown</span>
    </div>
    <div class="bm-value val-normal">✓ 67</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Estradiol (0.18-0.81 mcg/g)</span>
      <span class="bm-desc">Reduced osteoblast activity and increased bone resorption</span>
    </div>
    <div class="bm-value val-high">↓ 0.13</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Testosterone (0.78-3.11 mcg/g)</span>
      <span class="bm-desc">Decreased bone density</span>
    </div>
    <div class="bm-value val-high">↓ 0.57</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Cortisol (Night) (3.2-9.2 mcg/g)</span>
      <span class="bm-desc">Impaired osteoblast function and calcium absorption</span>
    </div>
    <div class="bm-value val-normal">✓ 10.2</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">DHEA (6.77-42.11 mcg/g)</span>
      <span class="bm-desc">Reduced anabolic support for bone formation and repair</span>
    </div>
    <div class="bm-value val-high">↓ 5.44</div>
  </div>
</div>

<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Insight</h3></div>
<p>This pattern reveals accelerated bone loss due to estrogen deficiency with multiple contributing factors.</p>
<p>Elevated DPD and PYD indicate excessive collagen breakdown exceeding formation. Low estradiol removes osteoblast protective signaling and allows unopposed osteoclast activity. Decreased testosterone reduces periosteal bone formation. Elevated nighttime cortisol inhibits osteoblast function and calcium absorption.</p>
<p>DHEA depletion removes anabolic bone support, while oxidative stress accelerates bone matrix degradation and impairs repair mechanisms.</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Comprehensive Bone Protection Protocol</h3></div>
<div class="protocols-list">
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Calcium</span>
      <span class="protocol-dosage">1500 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Calcium supplementation reduces bone resorption by inhibiting osteoclast activity, leading to decreased collagen breakdown.</li>
      <li>Calcium MCHC is a more bioavailable form of calcium and includes phosphorus, collagen, and other minerals and is a preferred version for better absorption.</li>
      <li>This supplementation lowers the release of deoxypyridinoline (DPD) into circulation. As a result, urinary DPD levels, a marker of bone degradation, decrease</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Phytoestrogens</span>
      <span class="protocol-dosage">50 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Phytoestrogens, by binding to estrogen receptors, mimic estrogenic effects and reduce bone resorption. This leads to decreased collagen breakdown, lowering urinary pyridinoline (PYD), a marker of bone degradation.</li>
      <li>Additionally, they modulate osteoclast activity, further reducing PYD levels.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Absorbable 3,3'-Diindolylmethane (DIM)</span>
      <span class="protocol-dosage">108 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Absorbable 3,3'-Diindolylmethane (DIM) supplement increases cortisol by modulating the aryl hydrocarbon receptor (AhR) pathway, which influences the adrenal gland's function. This modulation can lead to increased activity of enzymes involved in steroidogenesis, thereby elevating cortisol production.</li>
      <li>Additionally, DIM affects hormone metabolism and balance, contributing to higher cortisol</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Vitamin D</span>
      <span class="protocol-dosage">600 IU/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Vitamin D supplements increase testosterone by enhancing the expression of testosterone synthesis-related genes in the testes and improving calcium absorption, which is vital for testosterone production.</li>
      <li>Additionally, Vitamin D receptors in the Leydig cells of the testes facilitate the production of testosterone. This hormone synthesis boost is particularly notable in individuals with Vitamin D deficiency.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">DHEA</span>
      
    </div>
    
    <ul class="protocol-bullets">
      <li>DHEA supplements boost DHEA levels by directly increasing the availability of this hormone in the bloodstream.</li>
      <li>This supplemental DHEA is absorbed into the body and, once in circulation, contributes to higher overall DHEA concentrations.</li>
    </ul>
  </div>
</div>

<div class="next-button-container" id="go-to-overview-btn">
  <div class="next-content">
    <span class="next-label">EXPLORE</span>
    <span class="next-title">View Test Overview</span>
  </div>
  <div class="next-arrow-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
</div>

</div>`,
    overview: `<h2 class="panel-title">Hormones Zoomer Test Overview</h2>
<div class="panel-body-text">
<p>Comprehensive endocrine profiling to analyze hormones, their metabolites, and precursor pathways.</p>
<div class="section-header"><span class="section-icon">◉</span><h3>Clinical Applications</h3></div>
<p>Evaluates hormone deficiencies, imbalances, and metabolic clearance pathways. Key for understanding fatigue, libido issues, thyroid sluggishness, and metabolic rate.</p>
</div>`
  },
  'cardio': {
    primary: `<h2 class="panel-title">The Endothelial Dysfunction & Cardiovascular Risk Pattern</h2>
<div class="panel-body-text">
<p class="panel-subtitle" style="font-style:italic;color:var(--accent-blue);margin-top:-30px;margin-bottom:30px;">Beyond Standard Lipid Panels</p>
<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Picture</h3></div>
<p>Michael, a 45-year-old financial advisor, presented with elevated blood pressure readings during routine checkups and occasional chest tightness during strenuous exercise.</p>
<p>His family history included early cardiovascular disease, and recent stress tests showed borderline abnormal results with reduced exercise tolerance.</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Key Biomarkers Working Together</h3></div>
<div class="biomarkers-list">
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">ADMA (0 - 105 ng/mL)</span>
      <span class="bm-desc">ADMA</span>
    </div>
    <div class="bm-value val-high">↑ 120.8</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">SDMA (0 - 159 ng/mL)</span>
      <span class="bm-desc">SDMA</span>
    </div>
    <div class="bm-value val-high">↑ 211</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">L-Arginine (81.6 - 249.0 nmol/mL)</span>
      <span class="bm-desc">L-Arginine</span>
    </div>
    <div class="bm-value val-high">↓ 56.9</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Homoarginine (66 – 265 ng/mL)</span>
      <span class="bm-desc">Homoarginine</span>
    </div>
    <div class="bm-value val-high">↓ 34</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Arginine/ADMA Ratio (>90)</span>
      <span class="bm-desc">Arginine/ADMA Ratio</span>
    </div>
    <div class="bm-value val-high">↓ 0.47</div>
  </div>
</div>

<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Insight</h3></div>
<p>This pattern reveals significant endothelial dysfunction with elevated cardiovascular risk.</p>
<p>Markedly elevated ADMA levels indicate severe competitive inhibition of nitric oxide synthase, while mildly elevated SDMA suggests additional impairment in arginine transport and utilization.</p>
<p>The combination of reduced L-arginine availability and significantly low homoarginine levels further compromises cardiovascular protective mechanisms.</p>
<p>The critically low arginine/ADMA ratio strongly predicts increased risk for atherothrombotic events and suggests the need for aggressive cardiovascular risk reduction strategies</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Neuroprotective Support Protocol</h3></div>
<div class="protocols-list">
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">L-Arginine</span>
      <span class="protocol-dosage">2000 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>L-Arginine serves as the substrate for nitric oxide synthase, competing with ADMA for enzyme binding sites.</li>
      <li>Supplementation increases the arginine/ADMA ratio, potentially restoring endothelial nitric oxide production and improving flow-mediated vasodilation.</li>
      <li>This moderate dose helps overcome competitive inhibition by methylarginines while maintaining safety.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">L-Citrulline</span>
      <span class="protocol-dosage">1000 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>L-Citrulline bypasses potential arginine transport limitations and is converted to arginine in the kidneys through the citrulline-arginine cycle.</li>
      <li>This pathway provides a more sustained increase in plasma arginine levels compared to direct arginine supplementation, supporting endothelial function and nitric oxide production.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Folic Acid</span>
      <span class="protocol-dosage">400 mcg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Folic acid supports the activity of dimethylarginine dimethylaminohydrolase (DDAH), the enzyme responsible for ADMA degradation.</li>
      <li>Adequate folate status helps maintain optimal ADMA clearance and supports endothelial nitric oxide synthase coupling, preventing the enzyme from producing superoxide instead of nitric oxide.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Omega-3 Fatty acids (EPA/DHA)</span>
      <span class="protocol-dosage">1500 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>EPA and DHA reduce inflammatory cytokines that can upregulate ADMA-producing enzymes like protein arginine methyltransferases (PRMTs).</li>
      <li>They also support endothelial function through membrane stabilization and enhanced nitric oxide bioavailability, complementing the arginine-nitric oxide pathway.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Coenzyme Q10</span>
      <span class="protocol-dosage">100 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>CoQ10 acts as a cofactor for endothelial nitric oxide synthase and helps prevent NOS uncoupling, a condition where the enzyme produces superoxide instead of nitric oxide.</li>
      <li>It also supports mitochondrial function in endothelial cells and may help reduce oxidative stress that can increase ADMA levels and impair cardiovascular function.</li>
    </ul>
  </div>
</div>

<div class="next-button-container" id="go-to-overview-btn">
  <div class="next-content">
    <span class="next-label">EXPLORE</span>
    <span class="next-title">View Test Overview</span>
  </div>
  <div class="next-arrow-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
</div>

</div>`,
    overview: `<h2 class="panel-title">Cardio Zoomer Test Overview</h2>
<div class="panel-body-text">
<p>A comprehensive assessment designed to detect early cardiovascular risk markers, endothelial damage, and metabolic warning signs.</p>
<div class="section-header"><span class="section-icon">◉</span><h3>Clinical Utility</h3></div>
<p>Provides early identification of arterial plaque development, systemic vascular inflammation, and metabolic syndrome risk, enabling proactive lifestyle and dietary corrections.</p>
</div>`
  },
  'toxins_panel': {
    primary: `<h2 class="panel-title">The Total Tox Burden & Environmental Toxicity Pattern</h2>
<div class="panel-body-text">
<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Picture</h3></div>
<p>Emily, a 48-year-old teacher, presented with chronic fatigue, brain fog, frequent headaches, and unexplained skin rashes.</p>
<p>Despite a "healthy" lifestyle, her history of living in an older home with potential mold exposure and using plastic containers raised concerns.</p>
<p>Advanced toxin testing revealed elevated total tox burden with multiple exposures</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Key Biomarkers Working Together</h3></div>
<div class="biomarkers-list">
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Mercury (≤1.61 ug/g)</span>
      <span class="bm-desc">Neurotoxin and oxidative stressor</span>
    </div>
    <div class="bm-value val-normal">↓ 1.14</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Lead (≤1.16 ug/g)</span>
      <span class="bm-desc">Nervous system disruptor</span>
    </div>
    <div class="bm-value val-high">↑ 1.27</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Aflatoxin B1 (≤6.93 ng/g)</span>
      <span class="bm-desc">Liver toxin impairing detoxification and increasing oxidative stress</span>
    </div>
    <div class="bm-value val-normal">↓ 5.98</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Bisphenol A (BPA) (≤5.09 ug/g)</span>
      <span class="bm-desc">Endocrine disruptor</span>
    </div>
    <div class="bm-value val-normal">↓ 5.66</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Ochratoxin A (≤6.8 ng/g)</span>
      <span class="bm-desc">Kidney toxin impairing detoxification and immune function</span>
    </div>
    <div class="bm-value val-high">↑ 6.9</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Glyphosate (≤7.6 ug/g)</span>
      <span class="bm-desc">Detoxification inhibitor and metabolic disruptor</span>
    </div>
    <div class="bm-value val-high">↑ 8.87</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Perfluoroalkyl Substances (PFAS) (≤2.205 ug/g)</span>
      <span class="bm-desc">Endocrine disruptor</span>
    </div>
    <div class="bm-value val-normal">↓ 5.981</div>
  </div>
</div>

<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Insight</h3></div>
<p>This pattern indicates chronic environmental exposure driving systemic inflammation and oxidative stress.</p>
<p>Heavy metals like mercury and lead impair neurological function and energy production, while mycotoxins from mold disrupt liver and kidney detoxification. Environmental chemicals such as BPA and PFAS act as endocrine disruptors, exacerbating hormonal imbalances and immune dysfunction.</p>
<p>The overall high tox burden overwhelms natural detox pathways, leading to bioaccumulation and increased risk of autoimmune conditions, chronic fatigue, and neurological issues.</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Targeted Detoxification Optimization Protocol</h3></div>
<div class="protocols-list">
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">N-Acetyl Cysteine (NAC)</span>
      <span class="protocol-dosage">600 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>NAC serves as a precursor to glutathione, enhancing the body's ability to bind and excrete heavy metals like mercury and lead through urinary pathways.</li>
      <li>It also reduces oxidative stress by replenishing antioxidant defenses against mycotoxins and environmental chemicals.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Milk Thistle (Silymarin)</span>
      <span class="protocol-dosage">150 mg twice daily</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Milk thistle supports liver detoxification by promoting phase I and II enzyme activity, which helps metabolize and eliminate mycotoxins and pesticides.</li>
      <li>It protects hepatocytes from oxidative damage caused by heavy metals and improves bile flow for toxin excretion.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Chlorella</span>
      <span class="protocol-dosage">1g/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Chlorella acts as a natural chelator, binding to heavy metals such as cadmium and lead in the gastrointestinal tract to prevent absorption and facilitate fecal elimination.</li>
      <li>It also supports detoxification of environmental toxins like PFAS by enhancing cellular repair and reducing inflammation.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Activated Charcoal</span>
      <span class="protocol-dosage">500 mg/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Activated charcoal adsorbs mycotoxins and chemical pollutants in the digestive system, preventing their reabsorption and promoting excretion through the bowels</li>
      <li>It helps mitigate the effects of pesticides and plastics by trapping them before they enter systemic circulation.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Vitamin C</span>
      <span class="protocol-dosage">1g/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Vitamin C boosts antioxidant capacity to neutralize free radicals generated by heavy metals and environmental toxins, while supporting collagen synthesis for tissue repair.</li>
      <li>It enhances immune function and aids in the chelation of metals like lead, improving overall detox efficiency.</li>
    </ul>
  </div>
</div>

<div class="next-button-container" id="go-to-overview-btn">
  <div class="next-content">
    <span class="next-label">EXPLORE</span>
    <span class="next-title">View Test Overview</span>
  </div>
  <div class="next-arrow-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
</div>

</div>`,
    overview: `<h2 class="panel-title">Toxins Panel Test Overview</h2>
<div class="panel-body-text">
<p>Evaluates heavy metals, environmental chemical compounds, and glyphosate toxicity that accumulate in bodily tissues.</p>
<div class="section-header"><span class="section-icon">◉</span><h3>Clinical Utility</h3></div>
<p>Identifies environmental toxic burden causing mitochondrial strain, endocrine disruption, and chronic immune activation. Essential for detoxification planning.</p>
</div>`
  },
  'oxi': {
    primary: `<h2 class="panel-title">The Chronic Fatigue & Multi-System Oxidative Damage Pattern</h2>
<div class="panel-body-text">
<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Picture</h3></div>
<p>Robert, a 48-year-old IT director, experienced progressive fatigue over 18 months that no longer improved with rest.</p>
<p>He had difficulty concentrating at work, muscle aches after minimal exercise, and felt “aged beyond his years” despite normal routine blood tests:</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Key Biomarkers Working Together</h3></div>
<div class="biomarkers-list">
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">8-Hydroxy-2'-deoxyguanosine (≤4 ug/g)</span>
      <span class="bm-desc">Oxidative Injury</span>
    </div>
    <div class="bm-value val-high">↑ 5.44</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Protein Dityrosine (≤5 ug/g)</span>
      <span class="bm-desc">Increased protein cross-linking</span>
    </div>
    <div class="bm-value val-high">↑ 5.45</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Lipid Peroxidation Markers (≤163.53 ug/g)</span>
      <span class="bm-desc">Membrane damage indicators</span>
    </div>
    <div class="bm-value val-normal">↓ 146.71</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Nitrotyrosine (≤285.69 ug/g)</span>
      <span class="bm-desc">Protein nitration</span>
    </div>
    <div class="bm-value val-high">↑ 318.62</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Nitrative Stress Biomarkers (≤107.47 ug/g)</span>
      <span class="bm-desc">Indicators of protein damage and disrupted signaling</span>
    </div>
    <div class="bm-value val-high">↑ 127.88</div>
  </div>
</div>

<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Insight</h3></div>
<p>This pattern reveals widespread oxidative and nitrative damage affecting multiple cellular systems.</p>
<p>Elevated 8-OHdG indicates severe oxidative injury to genetic material, potentially affecting cellular repair and energy production. Increased protein dityrosine formation shows extensive protein cross-linking and enzyme dysfunction.</p>
<p>Lipid peroxidation damages cellular membranes, impairing energy transport and cellular communication.</p>
<p>Elevated nitrotyrosine and nitrative stress markers reveal protein nitration processes that create dysfunctional enzymes and disrupt normal cellular signaling pathways.</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Neuroprotective Support Protocol</h3></div>
<div class="protocols-list">
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Creatine</span>
      <span class="protocol-dosage">3 g/day</span>
    </div>
    <ul class="protocol-bullets">
      <li>Creatine supplements decrease 8-Hydroxy-2'-deoxyguanosine by enhancing cellular energy production, reducing oxidative stress, and indirectly protecting DNA from oxidative damage, as lower oxidative stress levels correlate with reduced 8-OHdG formation.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">N-acetyl cysteine (NAC)</span>
      <span class="protocol-dosage">250 mg/day</span>
    </div>
    <ul class="protocol-bullets">
      <li>NAC is known for its antioxidant properties and its role in supporting glutathione production, a crucial antioxidant enzyme in the body. While there is limited direct evidence linking NAC supplementation to the reduction of dityrosine, dityrosine formation is associated with oxidative stress and protein damage. NAC may indirectly help mitigate dityrosine formation by reducing oxidative stress.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Resveratrol</span>
      <span class="protocol-dosage">500 mg/day</span>
    </div>
    <ul class="protocol-bullets">
      <li>Resveratrol supplements decrease nitrotyrosine by inhibiting nitric oxide synthase (NOS) activity, reducing excessive nitric oxide production, and consequently decreasing the formation of nitrotyrosine, a marker of oxidative and nitrosative stress.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Curcumin</span>
      <span class="protocol-dosage">250 mg/day</span>
    </div>
    <ul class="protocol-bullets">
      <li>Curcumin inhibits the activation of NF-κB, which in turn suppresses the expression of enzymes involved in lipid peroxidation.</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Selenium</span>
      <span class="protocol-dosage">55 mcg/day</span>
    </div>
    <ul class="protocol-bullets">
      <li>Selenium supplements decrease 8-Hydroxyguanine by supporting the activity of selenoproteins, such as glutathione peroxidase, which reduce oxidative stress and limit DNA damage, including 8-Hydroxyguanine formation.</li>
    </ul>
  </div>
</div>

<div class="next-button-container" id="go-to-overview-btn">
  <div class="next-content">
    <span class="next-label">EXPLORE</span>
    <span class="next-title">View Test Overview</span>
  </div>
  <div class="next-arrow-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
</div>

</div>`,
    overview: `<h2 class="panel-title">Oxidative Stress Test Overview</h2>
<div class="panel-body-text">
<p>Measures markers of cellular oxidative stress and antioxidant status to evaluate system-wide mitochondrial function and aging velocity.</p>
<div class="section-header"><span class="section-icon">◉</span><h3>Clinical Utility</h3></div>
<p>Allows precise evaluation of cellular damage in lipids and DNA, and helps customize supplementation of master antioxidants like Glutathione, Vitamin C, and CoQ10.</p>
</div>`
  },
  'food': {
    primary: `<h2 class="panel-title">Comprehensive Food Sensitivity Testing — 209 Foods & 57 Additives</h2>
<div class="panel-body-text">
<p>The Food Sensitivity Complete test identifies IgG- and IgA-mediated immune responses to a broad range of foods, helping you uncover hidden triggers.</p>
<p>Many chronic symptoms stem from unidentified food sensitivities that create ongoing inflammation and immune activation.</p>
<p>This comprehensive panel identifies specific trigger foods, enabling targeted elimination diets rather than broad restrictions.</p>
<p>By measuring both IgG and IgA responses, it captures different types of immune reactions, providing a complete picture of food reactivity.</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Symptoms to Consider This Test</h3></div>
<ul class="protocol-bullets" style="margin-bottom:30px;">
  <li style="margin-bottom:8px;">Digestive issues (bloating, gas, diarrhea, constipation)</li>
  <li style="margin-bottom:8px;">Chronic fatigue or brain fog</li>
  <li style="margin-bottom:8px;">Headaches or migraines</li>
  <li style="margin-bottom:8px;">Joint pain or inflammation</li>
  <li style="margin-bottom:8px;">Skin problems (eczema, acne, hives)</li>
  <li style="margin-bottom:8px;">Unexplained weight gain or difficulty losing weight</li>
</ul>

<div class="section-header"><span class="section-icon">◉</span><h3>Key Highlight Markers</h3></div>
<p style="margin-bottom:12px;">IgG- and IgA-mediated immune responses to a broad range of foods</p>
<ul class="protocol-bullets" style="margin-bottom:30px;">
  <li style="margin-bottom:8px;">209 foods and additives tested</li>
  <li style="margin-bottom:8px;">Common allergens: Gluten, dairy, eggs, nuts, soy</li>
  <li style="margin-bottom:8px;">Food additives: Preservatives, artificial sweeteners, food dyes</li>
  <li style="margin-bottom:8px;">Spices and herbs</li>
  <li style="margin-bottom:8px;">Nightshades and lectins</li>
</ul>

<div class="section-header"><span class="section-icon">◉</span><h3>Main Product Highlights</h3></div>
<ul class="protocol-bullets" style="margin-bottom:30px;">
  <li style="margin-bottom:8px;">Utilizing protein microarray technology, this comprehensive panel helps identify potential food sensitivities</li>
  <li style="margin-bottom:8px;">The test uses high-density microarray technology proven over 95–100% accuracy for detecting IgG and IgA antibodies</li>
  <li style="margin-bottom:8px;">Most extensive food panel available</li>
  <li style="margin-bottom:8px;">Includes both immediate and delayed reactions</li>
  <li style="margin-bottom:8px;">Tests food additives often overlooked in other panels</li>
</ul>

<div class="next-button-container" id="go-to-overview-btn">
  <div class="next-content">
    <span class="next-label">EXPLORE</span>
    <span class="next-title">View Test Overview</span>
  </div>
  <div class="next-arrow-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
</div>

</div>`,
    overview: `<h2 class="panel-title">Food Sensitivity Test Overview</h2>
<div class="panel-body-text">
<p>Measures delayed IgG and IgA immune reactions to a wide range of common dietary antigens.</p>
<div class="section-header"><span class="section-icon">◉</span><h3>Clinical Utility</h3></div>
<p>Helps map chronic food sensitivities that contribute to gut barrier breach, systemic brain fog, eczema, and joint pain, facilitating an elimination-reintroduction diet protocol.</p>
</div>`
  },
  'gutzoomer': {
    primary: `<h2 class="panel-title">The Intestinal Permeability & Inflammation Pattern</h2>
<div class="panel-body-text">
<p class="panel-subtitle" style="font-style:italic;color:var(--accent-blue);margin-top:-30px;margin-bottom:30px;">When Barrier Function Breaks Down</p>
<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Picture</h3></div>
<p>Sarah, a 42-year-old professional, presented with chronic fatigue, brain fog, and multiple food sensitivities.</p>
<p>Her Gut Zoomer revealed a clear pattern of compromised intestinal barrier function</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Key Biomarkers Working Together</h3></div>
<div class="biomarkers-list">
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Akkermansia muciniphila</span>
      <span class="bm-desc">Degrading commensal</span>
    </div>
    <div class="bm-value val-high">↑ CRITICAL MUCUS</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Fecal Zonulin</span>
      <span class="bm-desc">Elevated intestinal permeability marker</span>
    </div>
    <div class="bm-value val-normal">✓ 245</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Calprotectin</span>
      <span class="bm-desc">Intestinal inflammation</span>
    </div>
    <div class="bm-value val-normal">✓ 185</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Lysozyme</span>
      <span class="bm-desc">Antimicrobial peptide indicating epithelial stress</span>
    </div>
    <div class="bm-value val-high">↑ ELEVATED</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Low anti-inflammatory SCFA</span>
      <span class="bm-desc"></span>
    </div>
    <div class="bm-value val-normal">✓ NORMAL</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Low anti-inflammatory SCFA</span>
      <span class="bm-desc">8%</span>
    </div>
    <div class="bm-value val-normal">✓ NORMAL</div>
  </div>
  <div class="biomarker-card">
    <div class="bm-info">
      <span class="bm-name">Deamidated Gliadin Peptide Antibody</span>
      <span class="bm-desc">Gluten sensitivity</span>
    </div>
    <div class="bm-value val-high">↑ POSITIVE</div>
  </div>
</div>

<div class="section-header"><span class="section-icon">◉</span><h3>The Clinical Insight</h3></div>
<p>This combination reveals a classic leaky gut pattern. The depleted Akkermansia muciniphila means reduced mucus layer protection.</p>
<p>Elevated zonulin confirms increased intestinal permeability, while high calprotectin indicates active inflammation. The low butyrate (a crucial fuel for colonocytes) further compromises barrier repair.</p>
<p>The positive gliadin antibodies suggest gluten triggering additional barrier disruption.</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Targeted Supplementation Strategy</h3></div>
<div class="protocols-list">
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Lactobacillus rhamnosus GG</span>
      <span class="protocol-dosage">10 billion CFU/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Clinically proven to improve intestinal permeability by strengthening tight junctions</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">E. coli Nissle 1917</span>
      <span class="protocol-dosage">10 billion CFU/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Upregulates tight junction proteins, directly addressing permeability</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Inulin</span>
      <span class="protocol-dosage">10g/day</span>
    </div>
    
    <ul class="protocol-bullets">
      <li>Selectively feeds Akkermansia and increases butyrate production</li>
    </ul>
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">L-Glutamine</span>
      <span class="protocol-dosage">5g twice daily</span>
    </div>
    
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Primary fuel for enterocytes, supports barrier repair</span>
      
    </div>
    
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Quercetin</span>
      <span class="protocol-dosage">500mg twice daily</span>
    </div>
    
  </div>
  <div class="protocol-card">
    <div class="protocol-header">
      <span class="protocol-name">Reduces zonulin release and inflammation</span>
      
    </div>
    
  </div>
</div>

<div class="next-button-container" id="go-to-overview-btn">
  <div class="next-content">
    <span class="next-label">EXPLORE</span>
    <span class="next-title">View Test Overview</span>
  </div>
  <div class="next-arrow-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
</div>

</div>`,
    overview: `<h2 class="panel-title">Gut Zoomer Test Overview</h2>
<div class="panel-body-text">
<p>A comprehensive DNA-based assessment of the intestinal microbiome ecosystem, pathogens, digestive capacity, and mucosal immunity.</p>
<div class="section-header"><span class="section-icon">◉</span><h3>Clinical Utility</h3></div>
<p>Identifies dysbiosis, gut lining degradation (leaky gut), infection, inflammatory activity, and metabolic performance of the microflora to optimize digestive health.</p>
</div>`
  },
  'genetics_test': {
    primary: `<h2 class="panel-title">Comprehensive Genetic Blueprint for Personalized Health Optimization</h2>
<div class="panel-body-text">
<p>The Methylation Panel evaluates genetic and biochemical pathways involved in detoxification, DNA repair, and overall cellular function. Genetic testing reveals inherited predispositions that explain why standard treatments fail for some patients.</p>
<p>The Toxin Genetics Test provides insights into detoxification pathways, helping identify genetic predispositions that may influence toxin-related health risks.</p>
<p>This comprehensive genetic analysis enables truly personalized medicine, optimizing interventions based on individual biochemistry rather than population averages.</p>
<p>Understanding genetic variants guides targeted supplementation, dietary modifications, and lifestyle interventions for optimal health expression.</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Symptoms to Consider This Test</h3></div>
<ul class="protocol-bullets" style="margin-bottom:30px;">
  <li style="margin-bottom:8px;">Family history of chronic disease</li>
  <li style="margin-bottom:8px;">Treatment-resistant conditions</li>
  <li style="margin-bottom:8px;">Multiple chemical sensitivities</li>
  <li style="margin-bottom:8px;">Poor response to medications or supplements</li>
  <li style="margin-bottom:8px;">Unexplained chronic symptoms</li>
  <li style="margin-bottom:8px;">Interest in preventive/personalized medicine</li>
</ul>

<div class="section-header"><span class="section-icon">◉</span><h3>Key Highlight Markers</h3></div>
<ul class="protocol-bullets" style="margin-bottom:30px;">
  <li style="margin-bottom:8px;">Cardiovascular Genetics: ApoE, MTHFR, ACE, 9p21 variants</li>
  <li style="margin-bottom:8px;">Toxin Genetics: SNPs (single nucleotide polymorphisms) in detoxification genes, Phase I & II pathways</li>
  <li style="margin-bottom:8px;">Methylation Panel: Key genetic variations that affect methylation pathways, MTHFR, COMT, CBS</li>
  <li style="margin-bottom:8px;">Oxidative Stress Genetics: 32 genetic variants in antioxidant enzymes</li>
  <li style="margin-bottom:8px;">Nutrition Genetics: Vitamin metabolism, mineral absorption genes</li>
</ul>

<div class="section-header"><span class="section-icon">◉</span><h3>Main Product Highlights</h3></div>
<ul class="protocol-bullets" style="margin-bottom:30px;">
  <li style="margin-bottom:8px;">Real-Time PCR Technology enables precise and highly sensitive detection of genetic variations</li>
  <li style="margin-bottom:8px;">Comprehensive coverage of health-relevant genetic variants</li>
  <li style="margin-bottom:8px;">Actionable results with specific intervention strategies</li>
  <li style="margin-bottom:8px;">One-time testing provides lifetime insights</li>
  <li style="margin-bottom:8px;">Guides personalized supplementation and lifestyle</li>
</ul>

<div class="next-button-container" id="go-to-overview-btn">
  <div class="next-content">
    <span class="next-label">EXPLORE</span>
    <span class="next-title">View Test Overview</span>
  </div>
  <div class="next-arrow-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
</div>

</div>`,
    overview: `<h2 class="panel-title">Genetics Suite Test Overview</h2>
<div class="panel-body-text">
<p>Evaluates genetic variations (SNPs) that impact methylation pathways, detoxification speeds, inflammatory tendencies, and longevity parameters.</p>
<div class="section-header"><span class="section-icon">◉</span><h3>Clinical Utility</h3></div>
<p>Enables personalized preventative health planning by understanding your inherited metabolic predispositions, helping bypass genetic limitations through diet and lifestyle.</p>
</div>`
  },
  'nutri': {
    primary: `<h2 class="panel-title">Comprehensive Cellular Nutrition Assessment — 40+ Nutrients</h2>
<div class="panel-body-text">
<p>The Micronutrient Panel provides insights into nutrient status, absorption, and potential deficiencies, helping guide personalized supplementation and dietary strategies. Nutrient deficiencies are epidemic yet often subclinical, contributing to chronic disease and suboptimal health.</p>
<p>This test measures both intracellular (long-term) and extracellular (current) nutrient status, providing a complete picture that standard serum tests miss. The NutriPro version adds genetic analysis, revealing why certain nutrients are chronically low despite supplementation.</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Symptoms to Consider This Test</h3></div>
<ul class="protocol-bullets" style="margin-bottom:30px;">
  <li style="margin-bottom:8px;">Chronic fatigue or low energy</li>
  <li style="margin-bottom:8px;">Frequent infections or poor immunity</li>
  <li style="margin-bottom:8px;">Poor wound healing</li>
  <li style="margin-bottom:8px;">Hair loss or brittle nails</li>
  <li style="margin-bottom:8px;">Mood disorders or cognitive issues</li>
  <li style="margin-bottom:8px;">Osteoporosis or muscle weakness</li>
</ul>

<div class="section-header"><span class="section-icon">◉</span><h3>Key Highlight Markers</h3></div>
<p style="margin-bottom:12px;">Intracellular and extracellular levels of essential vitamins, minerals, antioxidants, fatty acids, and amino acids</p>
<ul class="protocol-bullets" style="margin-bottom:30px;">
  <li style="margin-bottom:8px;">Vitamins: A, B-complex, C, D, E, K1, K2</li>
  <li style="margin-bottom:8px;">Minerals: Magnesium, zinc, selenium, iron, copper</li>
  <li style="margin-bottom:8px;">Antioxidants: CoQ10, glutathione, alpha-lipoic acid</li>
  <li style="margin-bottom:8px;">Fatty acids: Omega-3 and omega-6 profiles</li>
  <li style="margin-bottom:8px;">Amino acids: All essential and conditionally essential</li>
</ul>

<div class="section-header"><span class="section-icon">◉</span><h3>Main Product Highlights</h3></div>
<ul class="protocol-bullets" style="margin-bottom:30px;">
  <li style="margin-bottom:8px;">Utilizing advanced liquid chromatography–mass spectrometry (LC-MS/MS) technology</li>
  <li style="margin-bottom:8px;">Measures intracellular & extracellular micronutrient levels to assess the body’s functional need</li>
  <li style="margin-bottom:8px;">NutriPro adds genetic testing for nutrient metabolism</li>
  <li style="margin-bottom:8px;">Most comprehensive nutrient assessment available</li>
  <li style="margin-bottom:8px;">Identifies both deficiencies and functional insufficiencies</li>
</ul>

<div class="next-button-container" id="go-to-overview-btn">
  <div class="next-content">
    <span class="next-label">EXPLORE</span>
    <span class="next-title">View Test Overview</span>
  </div>
  <div class="next-arrow-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
</div>

</div>`,
    overview: `<h2 class="panel-title">Micronutrient Test Overview</h2>
<div class="panel-body-text">
<p>Intracellular analysis to determine functional cellular deficiencies in key vitamins, minerals, amino acids, and antioxidants.</p>
<div class="section-header"><span class="section-icon">◉</span><h3>Clinical Utility</h3></div>
<p>Provides a precise picture of nutrient uptake at the cellular level, which is much more representative of tissue status than blood serum concentrations.</p>
</div>`
  },
  'auto': {
    primary: `<h2 class="panel-title">Comprehensive Autoimmune Disease Screen — 30+ Tissue Antibodies</h2>
<div class="panel-body-text">
<p>The Autoimmune Zoomer aids in detecting autoantibodies and antigens associated with systemic autoimmunity, including thyroid disorders, rheumatoid arthritis, and type 1 diabetes.</p>
<p>Autoimmune diseases often simmer for years before diagnosis, causing preventable tissue damage.</p>
<p>This comprehensive panel detects autoimmune activity in its earliest stages when interventions are most effective.</p>
<p>By identifying specific antibody patterns, it helps differentiate between various autoimmune conditions and guides targeted immune modulation strategies.</p>

<div class="section-header"><span class="section-icon">◉</span><h3>Symptoms to Consider This Test</h3></div>
<ul class="protocol-bullets" style="margin-bottom:30px;">
  <li style="margin-bottom:8px;">Joint pain, stiffness, or swelling</li>
  <li style="margin-bottom:8px;">Chronic fatigue or muscle weakness</li>
  <li style="margin-bottom:8px;">Skin rashes or photosensitivity</li>
  <li style="margin-bottom:8px;">Unexplained fever or inflammation</li>
  <li style="margin-bottom:8px;">Multiple seemingly unrelated symptoms</li>
  <li style="margin-bottom:8px;">Family history of autoimmune disease</li>
</ul>

<div class="section-header"><span class="section-icon">◉</span><h3>Key Highlight Markers</h3></div>
<p style="margin-bottom:12px;">Autoantibodies and antigens associated with systemic autoimmunity, thyroid disorders, rheumatoid arthritis, and type 1 diabetes</p>
<ul class="protocol-bullets" style="margin-bottom:30px;">
  <li style="margin-bottom:8px;">Thyroid antibodies: TPO, thyroglobulin, TSH receptor</li>
  <li style="margin-bottom:8px;">Systemic markers: ANA, ENA, anti-dsDNA</li>
  <li style="margin-bottom:8px;">Tissue-specific antibodies: Myelin, insulin, intrinsic factor</li>
  <li style="margin-bottom:8px;">Inflammatory markers correlating with autoimmune activity</li>
  <li style="margin-bottom:8px;">Early detection markers appearing before clinical symptoms</li>
</ul>

<div class="section-header"><span class="section-icon">◉</span><h3>Main Product Highlights</h3></div>
<ul class="protocol-bullets" style="margin-bottom:30px;">
  <li style="margin-bottom:8px;">Utilizing bio-chip immunofluorescence and ELISA technology, this panel provides early detection and precise monitoring</li>
  <li style="margin-bottom:8px;">Broad spectrum of autoantibodies detects autoantibodies and antigens associated with systemic autoimmunity</li>
  <li style="margin-bottom:8px;">More comprehensive than standard ANA testing</li>
  <li style="margin-bottom:8px;">Identifies autoimmune activity years before clinical diagnosis</li>
  <li style="margin-bottom:8px;">Monitors disease activity and treatment response</li>
</ul>

<div class="next-button-container" id="go-to-overview-btn">
  <div class="next-content">
    <span class="next-label">EXPLORE</span>
    <span class="next-title">View Test Overview</span>
  </div>
  <div class="next-arrow-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
</div>

</div>`,
    overview: `<h2 class="panel-title">Autoimmune Zoomer Test Overview</h2>
<div class="panel-body-text">
<p>Broad-spectrum autoantibody screening against multiple tissue systems to detect early-stage autoimmune reactivity.</p>
<div class="section-header"><span class="section-icon">◉</span><h3>Clinical Utility</h3></div>
<p>Allows early detection of tissue destruction processes up to 10 years before clinical symptoms manifest, providing a wide window for therapeutic intervention.</p>
</div>`
  },
};


function getPanelContent(subId) {
  if (currentLang === 'id' && typeof PANEL_CONTENT_ID !== 'undefined' && PANEL_CONTENT_ID[subId]) {
    return PANEL_CONTENT_ID[subId];
  }
  return PANEL_CONTENT[subId];
}
function getSubContent(subId, fallbackLabel) {
  if (currentLang === 'id' && typeof SUBHOTSPOT_CONTENT_ID !== 'undefined' && SUBHOTSPOT_CONTENT_ID[subId]) {
    return SUBHOTSPOT_CONTENT_ID[subId];
  }
  return SUBHOTSPOT_CONTENT[subId] || { primary: fallbackLabel, secondary: t('explore.ui.test_overview') };
}
let exploreScene, exploreCamera, exploreRenderer, exploreControls;
let exploreAnimId, exploreClock;
let loadedModels = {};
let targetCamPos = new THREE.Vector3(0, 0.4, 5.0);
let targetLookAt = new THREE.Vector3(0, 0.8, 0);
let isCamAnimating = false;
let bgmAudio = null, audioLoaded = false;
let exploreInited = false;
let animateExploreLoop = null;



const mouse = { x: 0, y: 0 };

const smoothMouse = { x: 0, y: 0 };

function initExplore() {
  if (exploreInited) {
    updateExploreUI();
    const canvas = document.getElementById('explore-canvas');
    if (canvas && exploreRenderer && exploreCamera) {
      exploreRenderer.setSize(canvas.parentElement.offsetWidth, canvas.parentElement.offsetHeight);
      exploreCamera.aspect = canvas.parentElement.offsetWidth / canvas.parentElement.offsetHeight;
      exploreCamera.updateProjectionMatrix();
    }
    if (typeof animateExploreLoop === 'function') animateExploreLoop();
    return;
  }
  exploreInited = true;

  buildSidebar();
  buildHotspots();
  bindExploreUI();


  setTimeout(() => {
    if (typeof THREE === 'undefined') {
      console.warn('Three.js not loaded');
      return;
    }
    initExploreThree();
    initCrosshair();
  }, 100);


  const splash = document.getElementById('splash-overlay');
  setTimeout(() => {
    if (splash) splash.classList.add('hidden');
    state.explore.loaded = true;
    updateExploreUI();
    autoPlayBGM();
  }, 3000);
}

function initExploreThree() {
  const canvas = document.getElementById('explore-canvas');
  if (!canvas) return;

  exploreScene = new THREE.Scene();
  exploreCamera = new THREE.PerspectiveCamera(38, canvas.parentElement.offsetWidth / canvas.parentElement.offsetHeight, 0.1, 100);
  exploreCamera.position.set(0, 0.4, 5.0);

  exploreRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance', stencil: false });
  exploreRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  exploreRenderer.setSize(canvas.parentElement.offsetWidth, canvas.parentElement.offsetHeight);
  exploreRenderer.outputEncoding = THREE.sRGBEncoding;

  const ambLight = new THREE.AmbientLight(0xc8d8ff, 0.4);
  exploreScene.add(ambLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.3);
  dirLight.position.set(3, 5, 3);
  exploreScene.add(dirLight);
  const ptLight = new THREE.PointLight(0xa0c0ff, 0.2);
  ptLight.position.set(0, 3, 2);
  exploreScene.add(ptLight);

  exploreControls = new THREE.OrbitControls(exploreCamera, canvas);
  exploreControls.enablePan = false;
  exploreControls.enableRotate = false;
  exploreControls.minPolarAngle = Math.PI * 0.1;
  exploreControls.maxPolarAngle = Math.PI * 0.9;
  exploreControls.minDistance = 0.15;
  exploreControls.maxDistance = 3.8;
  exploreControls.autoRotate = false;
  exploreControls.autoRotateSpeed = 0;
  exploreControls.target.set(0, 0.8, 0);

  exploreClock = new THREE.Clock();


  const loader = new THREE.GLTFLoader();
  const bodyGroup = new THREE.Group();
  bodyGroup.name = 'body-group';
  exploreScene.add(bodyGroup);

  function loadBodyModel(path, scale, posY, opacityColor, emissiveColor, modelId) {
    loader.load(path, (gltf) => {
      const s = gltf.scene;
      s.traverse(child => {
        if (child.isMesh) {
          child.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(opacityColor),
            emissive: new THREE.Color(emissiveColor),
            emissiveIntensity: 0.18,
            roughness: 0.35,
            metalness: 0.35,

            transparent: true, opacity: 0.0,
            clearcoat: 1.0, clearcoatRoughness: 0.08,
            side: THREE.FrontSide, depthWrite: false,
          });
        }
      });
      s.scale.set(scale[0], scale[1], scale[2]);
      s.position.set(0, posY, 0);
      s.name = modelId;
      s.visible = true;
      bodyGroup.add(s);
      loadedModels[modelId] = s;
    });
  }


  loadBodyModel('assets/models/female_base_mesh (1).glb', [2.25, 2.25, 2.25], -1.9, '#8aaacf', '#4466aa', 'female');
  loadBodyModel('assets/models/male_base_mesh.glb', [0.13, 0.12, 0.13], -1.6, '#7799bb', '#3355aa', 'male');


  ORGAN_MODELS.forEach(organ => {
    loader.load(organ.file, (gltf) => {
      const s = gltf.scene.clone(true);
      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(organ.color), emissive: new THREE.Color(organ.emissive),
        emissiveIntensity: 0.0, roughness: 0.2, metalness: 0.1,
        transparent: true, opacity: 0.0, transmission: 0.0, depthWrite: false,
      });
      s.traverse(c => { if (c.isMesh) c.material = mat.clone(); });
      s.position.set(...organ.position);
      s.scale.setScalar(organ.scale);
      if (organ.rotation) s.rotation.set(...organ.rotation);
      s.name = `organ-${organ.id}`;
      s.userData = { organId: organ.id, baseMat: { color: organ.color, emissive: organ.emissive } };
      exploreScene.add(s);
      loadedModels[`organ-${organ.id}`] = { mesh: s, mat: s.children[0]?.material || mat };
    });
  });


  window.addEventListener('resize', () => {
    if (!exploreRenderer) return;
    const w = canvas.parentElement.offsetWidth;
    const h = canvas.parentElement.offsetHeight;
    exploreCamera.aspect = w / h;
    exploreCamera.updateProjectionMatrix();
    exploreRenderer.setSize(w, h);
  });


  const exploreWrapper = document.getElementById('explore-wrapper');
  exploreWrapper?.addEventListener('mousemove', (e) => {

    mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  exploreWrapper?.addEventListener('mouseleave', () => {
    mouse.x = 0;
    mouse.y = 0;
  });


  function animateExplore() {
    if (state.currentPage !== 'explore') return;
    exploreAnimId = requestAnimationFrame(animateExplore);
    const delta = exploreClock.getDelta();
    const elapsed = exploreClock.getElapsedTime();


    const lerpFactor = 0.045;
    smoothMouse.x += (mouse.x - smoothMouse.x) * lerpFactor;
    smoothMouse.y += (mouse.y - smoothMouse.y) * lerpFactor;

    const isZoomed = !!state.explore.activeOrgan;

    if (isZoomed) {

      const pX = smoothMouse.x * 0.12;
      const pY = -smoothMouse.y * 0.06;
      const zoomTarget = targetCamPos.clone().add(new THREE.Vector3(pX, pY, 0));
      exploreCamera.position.lerp(zoomTarget, 0.08);
      exploreControls.target.lerp(targetLookAt, 0.08);

    } else {







      const orbitCenter = new THREE.Vector3(0, 0.8, 0);
      const orbitRadius = 5.0;


      const baseTheta = 0;
      const basePhi = Math.PI / 2 + 0.08;


      const thetaOffset = smoothMouse.x * 0.35;
      const phiOffset = smoothMouse.y * 0.21;

      const theta = baseTheta + thetaOffset;
      const phi = Math.max(0.15, Math.min(Math.PI - 0.15, basePhi + phiOffset));


      const targetX = orbitCenter.x + orbitRadius * Math.sin(phi) * Math.sin(theta);
      const targetY = orbitCenter.y + orbitRadius * Math.cos(phi);
      const targetZ = orbitCenter.z + orbitRadius * Math.sin(phi) * Math.cos(theta);

      const orbitPos = new THREE.Vector3(targetX, targetY, targetZ);
      exploreCamera.position.lerp(orbitPos, 0.06);


      exploreControls.target.set(
        smoothMouse.x * 0.04,
        0.8 - smoothMouse.y * 0.03,
        0
      );
    }


    paralBlobsCSS(smoothMouse.x, smoothMouse.y);



    const BODY_FADE_SPEED = 0.29;
    const BODY_TARGET_OP = 0.58;
    ['female', 'male'].forEach(modelId => {
      const mesh = loadedModels[modelId];
      if (!mesh) return;
      const isSelected = state.explore.sex === modelId;
      const targetOp = isSelected ? BODY_TARGET_OP : 0.0;
      let maxOp = 0;
      mesh.traverse(c => {
        if (!c.isMesh || !c.material) return;
        const cur = c.material.opacity;
        const diff = targetOp - cur;
        if (Math.abs(diff) > 0.002) {
          const step = Math.sign(diff) * Math.min(Math.abs(diff), BODY_FADE_SPEED * delta);
          c.material.opacity = THREE.MathUtils.clamp(cur + step, 0, BODY_TARGET_OP + 0.02);
          c.material.needsUpdate = true;
        }
        maxOp = Math.max(maxOp, c.material.opacity);
      });
      mesh.visible = maxOp > 0.005;
    });


    updateHotspotPositions();
    updateSubHotspotPositions();


    ORGAN_MODELS.forEach(organ => {
      const entry = loadedModels[`organ-${organ.id}`];
      if (!entry) return;
      const cat = CATEGORIES.find(c => c.id === state.explore.activeOrgan);
      const hovCat = CATEGORIES.find(c => c.id === state.explore.hoveredOrgan);
      const shouldShow = (cat && cat.shows?.includes(organ.id))
        || (hovCat && hovCat.shows?.includes(organ.id));
      const isActive = cat && cat.shows?.includes(organ.id);
      const targetOpacity = shouldShow ? 0.9 : 0.0;
      const targetEmissiveInt = isActive
        ? (0.5 + 0.5 * Math.sin(elapsed * 2.0)) * 1.5
        : (shouldShow ? 1.2 : 0.0);

      entry.mesh.traverse(c => {
        if (!c.isMesh) return;
        const m = c.material;
        if (!m) return;
        m.opacity = THREE.MathUtils.lerp(m.opacity, targetOpacity, 0.12);
        m.emissiveIntensity = THREE.MathUtils.lerp(m.emissiveIntensity, targetEmissiveInt, 0.12);
        m.color.lerp(new THREE.Color(organ.color), 0.12);
        m.emissive.lerp(new THREE.Color(organ.emissive), 0.12);
        m.depthWrite = shouldShow;
        m.needsUpdate = true;
      });
    });

    exploreControls.update();
    exploreRenderer.render(exploreScene, exploreCamera);
  }
  animateExploreLoop = animateExplore;
  animateExploreLoop();
}




function paralBlobsCSS(mx, my) {


  const layers = [
    { sel: '.blob-1', sx: 28, sy: 18 },
    { sel: '.blob-2', sx: 18, sy: 12 },
    { sel: '.blob-3', sx: 9, sy: 6 },
    { sel: '.blob-4', sx: 14, sy: 10 },
  ];
  layers.forEach(({ sel, sx, sy }) => {
    const el = document.querySelector(`#page-explore ${sel}`);
    if (!el) return;

    const tx = -mx * sx;
    const ty = -my * sy;

    el.style.setProperty('--px', `${tx}px`);
    el.style.setProperty('--py', `${ty}px`);
  });
}



function buildHotspots() {
  const existing = document.getElementById('body-hotspot-layer');
  if (existing) existing.remove();

  const layer = document.createElement('div');
  layer.id = 'body-hotspot-layer';
  layer.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:12;';

  CATEGORIES.forEach(cat => {
    const dot = document.createElement('div');
    dot.className = 'body-hotspot';
    dot.dataset.cat = cat.id;
    dot.title = cat.label;

    const idx = CATEGORIES.findIndex(c => c.id === cat.id);
    dot.style.animationDelay = `${idx * 0.35}s`;
    dot.addEventListener('click', () => selectOrgan(cat.id));
    dot.addEventListener('mouseenter', () => { state.explore.hoveredOrgan = cat.id; dot.classList.add('hovered'); });
    dot.addEventListener('mouseleave', () => { state.explore.hoveredOrgan = null; dot.classList.remove('hovered'); });
    layer.appendChild(dot);
  });

  document.querySelector('.canvas-container')?.appendChild(layer);
}

function updateHotspotPositions() {
  const layer = document.getElementById('body-hotspot-layer');
  if (!layer || !exploreCamera || !exploreRenderer) return;

  const { activeOrgan } = state.explore;


  if (activeOrgan) {
    layer.style.display = 'none';
    return;
  }
  layer.style.display = '';

  CATEGORIES.forEach(cat => {
    const dot = layer.querySelector(`[data-cat="${cat.id}"]`);
    if (!dot) return;


    const pos3d = new THREE.Vector3(...cat.position);
    const screenPos = toScreenPos(pos3d);

    if (!screenPos) {
      dot.style.display = 'none';
      return;
    }


    const canvas = exploreRenderer.domElement;
    const W = canvas.width / window.devicePixelRatio;
    const H = canvas.height / window.devicePixelRatio;
    if (screenPos.x < 0 || screenPos.x > W || screenPos.y < 0 || screenPos.y > H) {
      dot.style.display = 'none';
      return;
    }

    dot.style.display = '';
    dot.style.left = `${screenPos.x}px`;
    dot.style.top = `${screenPos.y}px`;
    dot.classList.toggle('hovered', cat.id === state.explore.hoveredOrgan);
  });
}

function updateSubHotspotPositions() {
  const layer = document.getElementById('hotspot-layer');
  if (!layer || !exploreCamera || !exploreRenderer) return;

  const { activeOrgan, activeSubHotspot } = state.explore;
  if (!activeOrgan || activeSubHotspot) {
    layer.style.display = 'none';
    return;
  }
  layer.style.display = '';

  const cat = CATEGORIES.find(c => c.id === activeOrgan);
  if (!cat || !cat.subHotspots?.length) return;

  cat.subHotspots.forEach(sh => {
    const pill = layer.querySelector(`[data-id="${sh.id}"]`);
    if (!pill) return;

    const pos3d = new THREE.Vector3(...sh.position);
    const screenPos = toScreenPos(pos3d);
    if (!screenPos) {
      pill.style.display = 'none';
      return;
    }

    const canvas = exploreRenderer.domElement;
    const W = canvas.width / window.devicePixelRatio;
    const H = canvas.height / window.devicePixelRatio;
    if (screenPos.x < 0 || screenPos.x > W || screenPos.y < 0 || screenPos.y > H) {
      pill.style.display = 'none';
      return;
    }

    pill.style.display = '';
    pill.style.left = `${screenPos.x}px`;
    pill.style.top = `${screenPos.y}px`;
  });
}

function setSexVisibility(sex) {
  state.explore.sex = sex;


  document.getElementById('btn-female')?.classList.toggle('active', sex === 'female');
  document.getElementById('btn-male')?.classList.toggle('active', sex === 'male');
  document.getElementById('mob-female-btn')?.classList.toggle('active', sex === 'female');
  document.getElementById('mob-male-btn')?.classList.toggle('active', sex === 'male');
}


window.setSex = (sex) => setSexVisibility(sex);

function buildSidebar() {
  const container = document.getElementById('sidebar-buttons');
  if (!container || container._built) return;
  container._built = true;

  const isMob = window.innerWidth <= 768;
  let html = isMob ? `<div class="sidebar-header" id="sidebar-header"><span class="sidebar-title">${t('explore.explore_cats')}</span><button class="mobile-toggle-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0077ff" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button></div><div class="sidebar-content">` : '';

  html += CATEGORIES.map(cat => `
    <button class="organ-btn" data-cat="${cat.id}">
      <div class="organ-btn-content">
        <span class="organ-icon">${cat.icon}</span>
        <span>${t('explore.categories.' + cat.id) || cat.label}</span>
      </div>
      <span class="organ-arrow">›</span>
    </button>
  `).join('');

  if (isMob) html += '</div>';
  container.innerHTML = html;

  container.querySelectorAll('.organ-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const catId = btn.dataset.cat;
      selectOrgan(catId === state.explore.activeOrgan ? null : catId);
    });
    btn.addEventListener('mouseenter', () => { state.explore.hoveredOrgan = btn.dataset.cat; });
    btn.addEventListener('mouseleave', () => { state.explore.hoveredOrgan = null; });
  });


  document.getElementById('sidebar-header')?.addEventListener('click', () => {
    document.getElementById('organ-sidebar')?.classList.toggle('expanded');
  });
}

function selectOrgan(catId) {
  state.explore.activeOrgan = catId;
  state.explore.activeSubHotspot = null;


  const cat = CATEGORIES.find(c => c.id === catId);
  if (cat) {
    const zoomZ = cat.zoomOffset ?? 1.0;
    if (catId === 'genetics') {
      targetLookAt.set(-0.68, 0.85, -0.1);
      targetCamPos.set(-0.68, 0.80, -0.1 + zoomZ);
    } else {
      targetLookAt.set(...cat.position);
      targetCamPos.set(cat.position[0], cat.position[1] - 0.05, cat.position[2] + zoomZ);
    }
  } else {
    targetLookAt.set(0, 0.8, 0);
    targetCamPos.set(0, 0.4, 5.0);
  }

  updateExploreUI();
}

function selectSubHotspot(subId) {
  state.explore.activeSubHotspot = subId;
  showSubPanel(subId);
  updateExploreUI();
}

function updateExploreUI() {
  const { activeOrgan, activeSubHotspot } = state.explore;
  const activeIndex = CATEGORIES.findIndex(c => c.id === activeOrgan);
  const prevCat = activeIndex <= 0 ? CATEGORIES[CATEGORIES.length - 1] : CATEGORIES[activeIndex - 1];
  const nextCat = activeIndex >= CATEGORIES.length - 1 || activeIndex === -1 ? CATEGORIES[0] : CATEGORIES[activeIndex + 1];


  document.getElementById('organ-sidebar')?.classList.toggle('hidden', !!activeOrgan);
  document.querySelectorAll('.organ-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === activeOrgan);
  });


  document.getElementById('explore-home-btn')?.style.setProperty('display', activeOrgan ? 'none' : '');


  const sexHeader = document.getElementById('sex-header');
  if (sexHeader) sexHeader.style.display = activeSubHotspot ? 'none' : '';


  document.getElementById('back-zoom-overlay')?.classList.toggle('visible', !!activeOrgan && !activeSubHotspot);


  const bb = document.getElementById('bottom-bar');
  if (bb) bb.classList.toggle('visible', !!activeOrgan && !activeSubHotspot);


  if (activeOrgan && activeIndex !== -1) {
    const cat = CATEGORIES[activeIndex];
    const icon = document.getElementById('active-icon');
    const label = document.getElementById('active-label');
    if (icon) icon.textContent = cat.icon;
    if (label) label.textContent = cat.label;
  }


  const prevLabel = document.getElementById('prev-label');
  const nextLabel = document.getElementById('next-label');
  if (prevLabel) prevLabel.textContent = prevCat.label;
  if (nextLabel) nextLabel.textContent = nextCat.label;


  const subOverlay = document.getElementById('sub-info-overlay');
  if (subOverlay) subOverlay.style.display = activeSubHotspot ? '' : 'none';


  const mobPill = document.getElementById('mobile-ctrl-pill');
  if (mobPill) mobPill.style.display = activeSubHotspot ? 'none' : '';


  updateHotspots();
}

function updateHotspots() {

  const existing = document.getElementById('hotspot-layer');
  if (existing) existing.remove();

  const { activeOrgan, activeSubHotspot } = state.explore;
  if (!activeOrgan || activeSubHotspot) return;

  const cat = CATEGORIES.find(c => c.id === activeOrgan);
  if (!cat || !cat.subHotspots?.length) return;

  const layer = document.createElement('div');
  layer.id = 'hotspot-layer';
  layer.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:15;';

  cat.subHotspots.forEach((sh, i) => {

    const pos3d = new THREE.Vector3(...sh.position);
    const screenPos = toScreenPos(pos3d);
    if (!screenPos) return;

    const pill = document.createElement('div');
    pill.className = 'sub-hotspot-pill';
    pill.dataset.id = sh.id;
    pill.style.cssText = `position:absolute;left:${screenPos.x}px;top:${screenPos.y}px;pointer-events:all;transform:translate(-50%,-50%);animation-delay:${i * 0.12}s;`;
    pill.innerHTML = `
      <div class="sub-hotspot-ring"><div class="dot"></div></div>
      <div class="sub-hotspot-label-pill">
        ${sh.label}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    `;
    pill.addEventListener('click', () => selectSubHotspot(sh.id));
    layer.appendChild(pill);
  });

  document.querySelector('.canvas-container')?.appendChild(layer);
}

function toScreenPos(pos3d) {
  if (!exploreCamera || !exploreRenderer) return null;
  const vec = pos3d.clone().project(exploreCamera);
  const canvas = exploreRenderer.domElement;
  return {
    x: (vec.x * 0.5 + 0.5) * canvas.clientWidth,
    y: (-vec.y * 0.5 + 0.5) * canvas.clientHeight,
  };
}

function showSubPanel(subId) {
  const cat = CATEGORIES.find(c => c.id === state.explore.activeOrgan);
  const sub = cat?.subHotspots?.find(s => s.id === subId);
  if (!sub) return;


  const bl = document.getElementById('sub-back-label');
  if (bl) bl.textContent = sub.label?.toUpperCase() || '';


  const video = document.getElementById('sub-video');
  const vmap = VIDEO_MAP[subId];
  if (video && vmap) {
    video.src = vmap.src;
    video.load();
    video.play().catch(() => { });
    const lbl = document.getElementById('oxi-label');
    if (lbl) lbl.innerHTML = vmap.label.replace('\n', '<br>');
    document.getElementById('video-wrapper').style.display = '';
  } else {
    document.getElementById('video-wrapper').style.display = 'none';
  }


  scrollAnim.current = 0;
  scrollAnim.target = 0;
  if (scrollAnim.animId) {
    cancelAnimationFrame(scrollAnim.animId);
    scrollAnim.animId = null;
  }
  document.documentElement.style.setProperty('--scroll-progress', '0');
  const scrollArea = document.querySelector('.panel-scroll-area');
  if (scrollArea) scrollArea.scrollTop = 0;

  const contentData = getPanelContent(subId) || { primary: `<h2 class="panel-title">${sub.label}</h2><div class="panel-body-text"><p>Analisis mendetail segera hadir...</p></div>` };


  const topNav = document.getElementById('sub-top-nav');
  const info = getSubContent(subId, sub.label);

  let tabIdx = 0;
  let showOverview = false;
  let renderNav, renderTabs;


  const updatePanelHtml = (contentHtml) => {
    const panelContent = document.getElementById('sub-panel-content');
    if (panelContent) {
      panelContent.innerHTML = contentHtml || `<h2 class="panel-title">${sub.label}</h2><div class="panel-body-text"><p>Detailed analysis coming soon...</p></div>`;
      if (scrollArea) scrollArea.scrollTop = 0;


      document.getElementById('go-to-overview-btn')?.addEventListener('click', () => {
        if (info.tabs) {
          if (tabIdx < info.tabs.length - 1) {
            tabIdx++;
            renderTabs();
          }
        } else {
          showOverview = true;
          renderNav();
        }
      });
    }
  };

  if (topNav) {
    if (info.tabs) {

      renderTabs = () => {
        topNav.innerHTML = `<div class="nav-pill-container">
          <span class="nav-subtitle">${sub.label}:</span>
          ${info.tabs.map((tab, i) => i === tabIdx
          ? `<button class="nav-active-btn" data-tab="${i}">${tab}</button>`
          : `<span class="nav-inactive-btn" data-tab="${i}">${tab}</span>`
        ).join('')}
        </div>`;


        let tabKey = 'primary';
        if (tabIdx === 0) tabKey = 'primary';
        else if (tabIdx === 1) tabKey = 'secondary';
        else if (tabIdx === 2) tabKey = 'overview';

        updatePanelHtml(contentData[tabKey] || contentData.primary);

        topNav.querySelectorAll('[data-tab]').forEach(el => {
          el.addEventListener('click', () => { tabIdx = parseInt(el.dataset.tab); renderTabs(); });
        });
      };
      renderTabs();
    } else {
      renderNav = () => {
        topNav.innerHTML = `<div class="nav-pill-container">
          <span class="nav-subtitle">${sub.label}:</span>
          ${showOverview
            ? `<span class="nav-inactive-btn" id="nav-primary">${info.primary}</span><button class="nav-active-btn" id="nav-overview">${info.secondary || 'Test Overview'}</button>`
            : `<button class="nav-active-btn" id="nav-primary">${info.primary}</button><span class="nav-inactive-btn" id="nav-overview">${info.secondary || 'Test Overview'}</span>`
          }
        </div>`;


        updatePanelHtml(showOverview ? contentData.overview : contentData.primary);

        document.getElementById('nav-primary')?.addEventListener('click', () => { showOverview = false; renderNav(); });
        document.getElementById('nav-overview')?.addEventListener('click', () => { showOverview = true; renderNav(); });
      };
      renderNav();
    }
  }
}

function bindExploreUI() {

  const scrollArea = document.querySelector('.panel-scroll-area');

  function updateScrollAnim() {
    scrollAnim.current += (scrollAnim.target - scrollAnim.current) * 0.12;
    if (Math.abs(scrollAnim.target - scrollAnim.current) < 0.001) {
      scrollAnim.current = scrollAnim.target;
      scrollAnim.animId = null;
    } else {
      scrollAnim.animId = requestAnimationFrame(updateScrollAnim);
    }
    document.documentElement.style.setProperty('--scroll-progress', scrollAnim.current);
  }

  if (scrollArea) {
    scrollArea.addEventListener('scroll', () => {
      const scrollTop = scrollArea.scrollTop;
      scrollAnim.target = Math.min(scrollTop / 250, 1.0);
      if (!scrollAnim.animId) {
        scrollAnim.animId = requestAnimationFrame(updateScrollAnim);
      }
    });
  }


  document.getElementById('explore-home-btn')?.addEventListener('click', () => navigateTo('home'));


  document.getElementById('back-zoom-btn')?.addEventListener('click', () => {
    state.explore.activeOrgan = null;
    state.explore.activeSubHotspot = null;
    targetLookAt.set(0, 0.8, 0);
    targetCamPos.set(0, 0.4, 5.0);
    updateExploreUI();
  });


  document.getElementById('sub-info-back')?.addEventListener('click', () => {
    state.explore.activeSubHotspot = null;
    document.getElementById('sub-info-overlay').style.display = 'none';
    updateExploreUI();
  });


  document.getElementById('sound-toggle')?.addEventListener('click', toggleSound);
  document.getElementById('mob-music-btn')?.addEventListener('click', toggleSound);


  document.getElementById('mob-back-btn')?.addEventListener('click', () => {
    if (state.explore.activeOrgan) {
      state.explore.activeOrgan = null;
      state.explore.activeSubHotspot = null;
      targetLookAt.set(0, 0.8, 0);
      targetCamPos.set(0, 0.4, 5.0);
      updateExploreUI();
    } else {
      navigateTo('home');
    }
  });


  document.getElementById('bb-prev')?.addEventListener('click', navPrev);
  document.getElementById('bb-next')?.addEventListener('click', navNext);
  document.getElementById('bb-prev-mob')?.addEventListener('click', navPrev);
  document.getElementById('bb-next-mob')?.addEventListener('click', navNext);
}

function navPrev() {
  const activeIndex = CATEGORIES.findIndex(c => c.id === state.explore.activeOrgan);
  const prev = activeIndex <= 0 ? CATEGORIES[CATEGORIES.length - 1] : CATEGORIES[activeIndex - 1];
  selectOrgan(prev.id);
}

function navNext() {
  const activeIndex = CATEGORIES.findIndex(c => c.id === state.explore.activeOrgan);
  const next = activeIndex >= CATEGORIES.length - 1 || activeIndex === -1 ? CATEGORIES[0] : CATEGORIES[activeIndex + 1];
  selectOrgan(next.id);
}

function initCrosshair() {
  const ch = document.getElementById('crosshair-root');
  const hLine = document.getElementById('crosshair-h');
  const vLine = document.getElementById('crosshair-v');
  if (!ch || !hLine || !vLine) return;

  document.addEventListener('mousemove', (e) => {
    if (state.currentPage !== 'explore') return;
    hLine.style.transform = `translateY(${e.clientY}px)`;
    vLine.style.transform = `translateX(${e.clientX}px)`;
  });
}


async function autoPlayBGM() {
  if (audioLoaded) return;
  try {
    bgmAudio = new Audio('assets/models/Music.mp3');
    bgmAudio.loop = true;
    bgmAudio.volume = 0.5;
    audioLoaded = true;

    if (state.explore.soundOn) {
      bgmAudio.play().catch(e => console.warn('BGM play failed:', e));
    }
    updateSoundUI();
  } catch (e) {
    console.warn('BGM load failed:', e);
  }
}

function toggleSound() {

  state.explore.soundOn = !state.explore.soundOn;

  if (state.explore.soundOn) {
    if (!bgmAudio || !audioLoaded) {

      autoPlayBGM();
    } else {
      bgmAudio.play().catch(e => console.warn('BGM resume failed:', e));
    }
  } else {
    bgmAudio?.pause();
  }

  updateSoundUI();
}

function updateSoundUI() {
  const waveContainer = document.getElementById('wave-container');
  const soundPill = document.getElementById('sound-pill');
  const mobBtn = document.getElementById('mob-music-btn');

  if (waveContainer) waveContainer.innerHTML = state.explore.soundOn
    ? '<span class="wave-bar"></span><span class="wave-bar"></span><span class="wave-bar"></span><span class="wave-bar"></span><span class="wave-bar"></span>'
    : '<span class="dots">. . . . .</span>';
  if (soundPill) soundPill.textContent = state.explore.soundOn ? t('explore.sound_on') : t('explore.sound_off');
  if (mobBtn) {
    mobBtn.className = `mob-icon-btn mob-music-btn ${state.explore.soundOn ? 'music-on' : 'music-off'}`;
    mobBtn.innerHTML = state.explore.soundOn
      ? '<div class="music-wave-mini"><span></span><span></span><span></span><span></span></div>'
      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/></svg>';
  }


  document.addEventListener('visibilitychange', () => {
    if (!bgmAudio || !audioLoaded) return;
    if (document.hidden) {
      bgmAudio.pause();
    } else if (state.explore.soundOn) {
      bgmAudio.play().catch(e => console.warn('BGM resume failed:', e));
    }
  });
}


function init() {

  const hash = window.location.hash.slice(1);
  const page = PAGES.includes(hash) ? hash : 'home';
  navigateTo(page);


  applyLang(currentLang);


  window.addEventListener('hashchange', () => {
    const h = window.location.hash.slice(1);
    if (PAGES.includes(h)) navigateTo(h);
  });


  window.addEventListener('resize', () => {
    state.explore.isMobile = window.innerWidth <= 768;
    if (homeRenderer) {
      const canvas = document.getElementById('home-3d-canvas');
      if (canvas) {
        homeRenderer.setSize(canvas.parentElement.offsetWidth, canvas.parentElement.offsetHeight);
        homeCamera.aspect = canvas.parentElement.offsetWidth / canvas.parentElement.offsetHeight;
        homeCamera.updateProjectionMatrix();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
