// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

// Icons for stack cards
const icons = {
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  brain: '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>',
  git: '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  chart: '<path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="7"/><rect x="12" y="6" width="3" height="11"/><rect x="17" y="13" width="3" height="4"/>',
  pen: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
  arrow: '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
  server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
  cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>'
};

const svg = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

const stackItems = [
  {
    icon: 'code',
    title: 'Programming Languages',
    catLabel: 'Languages',
    category: 'languages',
    description: 'Strong foundation in object-oriented, systems, and scripting languages for problem solving and backend logic.',
    skills: ['Java', 'Python', 'C++', 'Go', 'JavaScript', 'TypeScript'],
    gradient: 'linear-gradient(to bottom right, #a855f7, #ec4899)'
  },
  {
    icon: 'globe',
    title: 'Frontend Development',
    catLabel: 'Frontend',
    category: 'frontend',
    description: 'Building modern, performant, and reactive single-page applications with intuitive user experiences.',
    skills: ['ReactJS', 'AngularJS', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'],
    gradient: 'linear-gradient(to bottom right, #3b82f6, #22d3ee)'
  },
  {
    icon: 'server',
    title: 'Backend & APIs',
    catLabel: 'Backend',
    category: 'backend',
    description: 'Designing robust RESTful microservices, event-driven backends, and secure authentication flows.',
    skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'Microservices', 'JWT & OAuth'],
    gradient: 'linear-gradient(to bottom right, #8b5cf6, #3b82f6)'
  },
  {
    icon: 'database',
    title: 'Databases & ORM',
    catLabel: 'Database',
    category: 'database-cloud',
    description: 'Structured and unstructured data modeling, schema design, connection pooling, and ORM abstractions.',
    skills: ['MongoDB', 'MySQL', 'Oracle Database', 'Sequelize ORM', 'Firebase'],
    gradient: 'linear-gradient(to bottom right, #22c55e, #10b981)'
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    catLabel: 'DevOps',
    category: 'database-cloud',
    description: 'Containerizing services, deploying production environments, and managing collaborative Git workflows.',
    skills: ['Docker', 'AWS', 'Azure', 'Git / GitHub', 'CI/CD Pipelines'],
    gradient: 'linear-gradient(to bottom right, #0ea5e9, #6366f1)'
  },
  {
    icon: 'brain',
    title: 'Machine Learning & AI',
    catLabel: 'AI / ML',
    category: 'aiml',
    description: 'Hands-on predictive modeling, data processing pipelines, and AI-assisted engineering workflows.',
    skills: ['Machine Learning', 'Pandas', 'NumPy', 'Matplotlib', 'Predictive Modeling'],
    gradient: 'linear-gradient(to bottom right, #ec4899, #f43f5e)'
  },
  {
    icon: 'layers',
    title: 'System Design & Core CS',
    catLabel: 'Core CS',
    category: 'core',
    description: 'Deep understanding of algorithmic complexity, OOP principles, scalable distributed systems, and testability.',
    skills: ['DSA (500+ LeetCode)', 'System Design', 'OOP', 'Scalability', 'Unit Testing'],
    gradient: 'linear-gradient(to bottom right, #f97316, #ef4444)'
  },
  {
    icon: 'terminal',
    title: 'Developer Tools & Analytics',
    catLabel: 'Tools',
    category: 'core',
    description: 'Modern developer toolchain for rigorous API testing, metrics inspection, and collaborative delivery.',
    skills: ['Postman', 'Linux / Bash', 'Agile / Scrum', 'Power BI', 'Canva'],
    gradient: 'linear-gradient(to bottom right, #eab308, #f59e0b)'
  }
];

document.getElementById('stackGrid').innerHTML = stackItems.map(item => `
  <div class="glass-card stack-card" data-category="${item.category}">
    <div class="stack-hover" style="background:${item.gradient};"></div>
    <div class="stack-content">
      <div class="stack-top">
        <div class="stack-icon-box" style="background:${item.gradient};">${svg(icons[item.icon])}</div>
        <span class="stack-badge-cat">${item.catLabel}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="stack-tags">
        ${item.skills.map(s => `<span class="stack-tag">${s}</span>`).join('')}
      </div>
    </div>
  </div>
`).join('');

const projects = [
  {
    id: '01 / 04',
    title: 'DealMind',
    subtitle: 'AI Negotiation Strategist & Simulator',
    category: 'AI Agent & Web App',
    categories: ['ai', 'fullstack'],
    description: 'An AI-driven negotiation simulator where users roleplay against adaptive AI counterparties with live tactical coaching, anchor recommendations, game-theory BATNA calculation, and real-time concession tracking.',
    features: [
      'Adaptive AI counterparties powered by Google Gemini with custom personas',
      'Game-theory BATNA engine with real-time concession analytics',
      'Live tactical coaching and dynamic anchor recommendations during negotiation',
      'Built during Google Code for Community Hackathon with React 19 & TypeScript'
    ],
    challenge: 'Maintaining multi-turn context and realistic bargaining psychology without letting the LLM hallucinate concessions or break persona.',
    tags: ['React 19', 'TypeScript', 'Google Gemini', 'PostgreSQL', 'Vite', 'Tailwind'],
    github: 'https://github.com/Aryan-Lade/DealMind',
    demo: 'https://dealmind-hazel.vercel.app/',
    gradient: 'linear-gradient(to bottom right, rgba(168,85,247,0.35), rgba(236,72,153,0.35))'
  },
  {
    id: '02 / 04',
    title: 'DocZen',
    subtitle: 'Full-Stack Document Management Platform',
    category: 'Enterprise Full Stack',
    categories: ['fullstack'],
    description: 'A comprehensive document manipulation suite offering 25+ processing tools (merge, convert, compress, OCR, protect) containerized with Docker and backed by Java and MySQL.',
    features: [
      'Modular REST API architecture with 25+ document manipulation tools and per-tool controllers',
      'JWT authentication, bcrypt password hashing, rate limiting, and role-based access control (RBAC)',
      'Dynamic frontend tool registry automatically rendering new Java backend tools',
      'Containerized deployment using Docker multi-stage builds with LibreOffice and Ghostscript'
    ],
    challenge: 'Containerizing heavy LibreOffice/Ghostscript headless workers efficiently while enforcing per-user storage quotas and concurrency limits.',
    tags: ['Java', 'React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Docker'],
    github: 'https://github.com/Aryan-Lade/DocZen',
    demo: '',
    gradient: 'linear-gradient(to bottom right, rgba(37,99,235,0.35), rgba(8,145,178,0.35))'
  },
  {
    id: '03 / 04',
    title: 'Niveshak (निवेशक)',
    subtitle: 'Multimodal Stock Intelligence Engine',
    category: 'Quant Finance & AI',
    categories: ['ai'],
    description: 'A research-grade automated trading engine combining leakage-free machine learning, market regime detection, grounded financial news RAG, and institutional risk modeling for Indian Equities (NSE).',
    features: [
      'Zero-lookahead guarantee with purged walk-forward validation and embargo mechanisms',
      'Grounded financial news RAG using FinBERT, local Ollama embeddings, and ChromaDB vector store',
      'Realistic statutory transaction cost modeling for NSE / Indian brokerage structures',
      'Autonomous signal generation, backtesting pipeline, and MLflow experiment tracking'
    ],
    challenge: 'Eliminating subtle temporal lookahead bias and data leakage in financial time series while integrating multimodal unstructured news sentiment.',
    tags: ['Python', 'Machine Learning', 'RAG', 'ChromaDB', 'FinBERT', 'NSE India', 'MLflow'],
    github: 'https://github.com/Aryan-Lade/Niveshak',
    demo: '',
    gradient: 'linear-gradient(to bottom right, rgba(34,197,94,0.35), rgba(16,185,129,0.35))'
  },
  {
    id: '04 / 04',
    title: 'SmartAllocate',
    subtitle: 'AI-Powered Volunteer Matching Platform',
    category: 'Full Stack & AI',
    categories: ['ai', 'fullstack'],
    description: 'An AI-powered allocation platform designed to solve inefficient volunteer-task distribution in NGOs by intelligently matching volunteers based on skills, availability, and location with 95% accuracy.',
    features: [
      'Weighted ML scoring combining Jaccard similarity, schedule overlap, and Haversine distance',
      'Dual REST API microservices architecture across Node.js/Express and Python/Flask',
      'NGO dashboard with real-time impact analytics and automated in-app notifications',
      'Google OAuth authentication via Firebase and session protection'
    ],
    challenge: 'Minimizing cross-service latency between Node.js and Python microservices while performing real-time multi-variable scoring.',
    tags: ['React', 'Node.js', 'Python', 'Flask', 'MongoDB', 'Firebase', 'REST APIs'],
    github: 'https://github.com/Aryan-Lade/SmartAllocate',
    demo: '',
    gradient: 'linear-gradient(to bottom right, rgba(234,179,8,0.35), rgba(249,115,22,0.35))'
  }
];

const githubIcon = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>';
const linkIcon = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';

document.getElementById('projectsGrid').innerHTML = projects.map(p => `
  <div class="project-card" data-pcategory="${(p.categories || []).join(' ')}">
    <div class="glass-card project-inner">
      <div class="project-glow" style="background:${p.gradient};"></div>
      <div class="project-body">
        <div class="project-meta">
          <span class="project-id">${p.id}</span>
          <span class="project-cat">${p.category}</span>
        </div>
        <div class="project-subtitle">${p.subtitle || ''}</div>
        <h3>${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-block">
          <span class="project-block-label">Key Features</span>
          <ul class="project-features">
            ${p.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
        <div class="project-block">
          <span class="project-block-label">Challenge Solved</span>
          <p class="project-challenge">${p.challenge}</p>
        </div>
        <div class="project-links">
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">${githubIcon} GitHub</a>
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">${linkIcon} Live Demo</a>` : ''}
        </div>
        <div class="project-tags">
          ${p.tags.map(t => `<div class="project-tag"><span>${t}</span></div>`).join('')}
        </div>
      </div>
    </div>
  </div>
`).join('');

// Experience timeline
const experiences = [
  {
    role: 'Software Engineering Intern (AI-Focused)',
    org: 'iLoma Technology Pvt. Ltd.',
    period: 'Oct 2026 – Present',
    points: [
      'Contributed to assigned projects focusing on AI-driven development and AI-assisted coding workflows',
      'Reviewed, tested, and validated AI-generated code before submission following company repository guidelines',
      'Delivered daily engineering progress reports covering work completed, blockers, and next-day plans alongside university coursework'
    ],
    tags: ['AI-Driven Dev', 'Code Review', 'Python', 'Testing', 'Git Workflows']
  },
  {
    role: 'Open Source Contributor',
    org: 'GirlScript Summer of Code (GSSoC)',
    period: 'May 2026 – Present',
    points: [
      'Contributed production-level code across repositories',
      'Created pull requests, fixed bugs, and added features',
      'Collaborated closely with project maintainers',
      'Followed clean Git workflows and code reviews'
    ],
    tags: ['Git', 'GitHub', 'Open Source']
  },
  {
    role: 'Tech Team Member',
    org: "Blockchain RBU Students' Chapter",
    period: 'Oct 2025 – Present',
    points: [
      'Develop technical solutions for chapter initiatives',
      'Collaborate on blockchain-related projects',
      'Improve and maintain web applications',
      'Participate in technical events and workshops'
    ],
    tags: ['Blockchain', 'Web', 'Collaboration']
  }
];

document.getElementById('timeline').innerHTML = experiences.map(e => `
  <div class="glass-card timeline-card">
    <div class="timeline-dot"></div>
    <div class="timeline-top">
      <div>
        <h3>${e.role}</h3>
        <p class="timeline-org">${e.org}</p>
      </div>
      <span class="project-cat">${e.period}</span>
    </div>
    <ul class="timeline-points">
      ${e.points.map(pt => `<li>${pt}</li>`).join('')}
    </ul>
    <div class="project-tags">
      ${e.tags.map(t => `<div class="project-tag"><span>${t}</span></div>`).join('')}
    </div>
  </div>
`).join('');

// Achievements
const achievements = [
  { icon: 'code', num: '500+', label: 'LeetCode Problems Solved' },
  { icon: 'trophy', num: '10+', label: 'Hackathons Participated' },
  { icon: 'branch', num: 'GSSoC', label: '2026 Contributor' },
  { icon: 'blocks', num: 'Blockchain', label: 'Club Member' }
];
const achIcons = {
  code: icons.code,
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  branch: icons.git,
  blocks: '<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  brain: icons.brain
};
document.getElementById('achievementsGrid').innerHTML = achievements.map(a => `
  <div class="glass-card stat-card">
    <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${achIcons[a.icon]}</svg>
    <div class="stat-num">${a.num}</div>
    <div class="stat-label">${a.label}</div>
  </div>
`).join('');

// Certifications
const certs = [
  { title: 'Google Agile Essentials', issuer: 'Google' },
  { title: 'Meta Full Stack', issuer: 'Meta' },
  { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services' },
  { title: 'Git & GitHub', issuer: 'Version Control' }
];
document.getElementById('certGrid').innerHTML = certs.map(c => `
  <div class="glass-card cert-card">
    <div class="cert-icon">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
    </div>
    <div>
      <h3>${c.title}</h3>
      <p class="cert-issuer">${c.issuer}</p>
    </div>
  </div>
`).join('');

// Open source stats
const osStats = [
  { num: '15+', label: 'Contributions' },
  { num: '10+', label: 'Merged PRs' },
  { num: 'GSSoC', label: '2026 Program' }
];
document.getElementById('osStats').innerHTML = osStats.map(s => `
  <div class="glass-card stat-card">
    <div class="stat-num">${s.num}</div>
    <div class="stat-label">${s.label}</div>
  </div>
`).join('');

// Contact form -> mailto
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('cfName').value;
  const email = document.getElementById('cfEmail').value;
  const message = document.getElementById('cfMsg').value;
  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  showToast('✉️ Opening email client...');
  window.open(`mailto:aryanlade55@gmail.com?subject=${subject}&body=${body}`, '_blank');
});


// Tech Stack Category Filter
const stackFilterBar = document.getElementById('stackFilterBar');
if (stackFilterBar) {
  stackFilterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-pill');
    if (!btn) return;
    stackFilterBar.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.stack-card').forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.display = match ? '' : 'none';
    });
  });
}


// Project Category Filter
const projectFilterBar = document.getElementById('projectFilterBar');
if (projectFilterBar) {
  projectFilterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-pill');
    if (!btn) return;
    projectFilterBar.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.pfilter;
    document.querySelectorAll('.project-card').forEach(card => {
      const cats = (card.dataset.pcategory || '').split(' ');
      const match = filter === 'all' || cats.includes(filter);
      card.style.display = match ? '' : 'none';
    });
  });
}


// Interactive Toast Notification
function showToast(msg, duration = 2800) {
  const toast = document.getElementById('glassToast');
  const msgEl = document.getElementById('toastMsg');
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast.__timer);
  toast.__timer = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// Download Resume Feedback
document.querySelectorAll('a[download]').forEach(el => {
  el.addEventListener('click', () => {
    showToast('📄 Downloading Aryan-Lade_Resume.pdf...');
  });
});

// Quick Copy Email
const quickCopyEmailBtn = document.getElementById('quickCopyEmailBtn');
if (quickCopyEmailBtn) {
  quickCopyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('aryanlade55@gmail.com').then(() => {
      showToast('✓ Email copied: aryanlade55@gmail.com');
    }).catch(() => {
      showToast('aryanlade55@gmail.com');
    });
  });
}

// Scroll To Top
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }
});
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Custom cursor
const cursor = document.getElementById('cursor');
if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, [role="button"]').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.width = '40px'; cursor.style.height = '40px'; cursor.style.background = 'rgba(168,85,247,0.2)'; });
    el.addEventListener('mouseleave', () => { cursor.style.width = '20px'; cursor.style.height = '20px'; cursor.style.background = 'transparent'; });
  });
} else {
  cursor.style.display = 'none';
}

// Scroll reveal (Intersection Observer, staggered, once)
(function () {
  const STAGGER = 100; // ms between children

  // Ordered child selectors per section — defines stagger sequence
  const sectionConfig = [
    ['#home', ['.hero-title', '.hero-lead', '.hero-roles', '.hero-actions', '.hero-badges', '.scroll-indicator', '.hero-right']],
    ['#about', ['.section-head', '.about-chips', '.stat-card', '.about-text']],
    ['#experience', ['.section-head', '.timeline-card']],
    ['#skills', ['.section-head', '.filter-bar', '.stack-card']],
    ['#projects', ['.section-head', '.filter-bar', '.project-card']],
    ['#achievements', ['.section-head', '.stat-card']],
    ['#certifications', ['.section-head', '.cert-card']],
    ['#opensource', ['.section-head', '.stat-card', '.os-card']],
    ['#education', ['.section-head', '.edu-card']],
    ['#contact', ['.contact-info', '.contact-form-wrap', '.footer-bottom']],
  ];

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const items = entry.target.__revealItems || [];
      items.forEach((el, i) => {
        el.style.setProperty('--reveal-delay', (i * STAGGER) + 'ms');
        el.classList.add('is-visible');
        const cleanup = () => {
          el.classList.remove('reveal', 'reveal-btn', 'is-visible');
          el.style.removeProperty('--reveal-delay');
        };
        el.addEventListener('transitionend', cleanup, { once: true });
      });
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  sectionConfig.forEach(([sectionSel, childSels]) => {
    const section = document.querySelector(sectionSel);
    if (!section) return;
    const items = [];
    childSels.forEach(sel => {
      section.querySelectorAll(sel).forEach(el => {
        if (items.includes(el)) return;
        el.classList.add('reveal');
        if (el.matches('.btn, button')) el.classList.add('reveal-btn');
        items.push(el);
      });
    });
    section.__revealItems = items;
    observer.observe(section);
  });
})();
