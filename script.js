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
  arrow: '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>'
};

const svg = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

const stackItems = [
  { icon: 'code', title: 'Programming Languages', description: 'Strong foundation in Java, C++, and Python for problem-solving and application development', gradient: 'linear-gradient(to bottom right, #a855f7, #ec4899)' },
  { icon: 'globe', title: 'Web Development', description: 'Building responsive web interfaces using HTML, CSS, and JavaScript', gradient: 'linear-gradient(to bottom right, #3b82f6, #22d3ee)' },
  { icon: 'database', title: 'Databases', description: 'Experience working with MongoDB and MySQL for structured and unstructured data', gradient: 'linear-gradient(to bottom right, #22c55e, #10b981)' },
  { icon: 'brain', title: 'Machine Learning & AI', description: 'Interest and hands-on exposure to data science and quantitative analysis', gradient: 'linear-gradient(to bottom right, #6366f1, #a855f7)' },
  { icon: 'git', title: 'Version Control', description: 'Code management and collaboration using Git and GitHub', gradient: 'linear-gradient(to bottom right, #f97316, #ef4444)' },
  { icon: 'chart', title: 'Analytics & Visualization', description: 'Data visualization and insights using Power BI', gradient: 'linear-gradient(to bottom right, #eab308, #f59e0b)' },
  { icon: 'pen', title: 'Design & Presentation', description: 'Creating visuals and presentations using Canva and Microsoft PowerPoint', gradient: 'linear-gradient(to bottom right, #ec4899, #f43f5e)' }
];

document.getElementById('stackGrid').innerHTML = stackItems.map(item => `
  <div class="glass-card stack-card">
    <div class="stack-hover" style="background:${item.gradient};"></div>
    <div class="stack-content">
      <div class="stack-top">
        <div class="stack-icon-box" style="background:${item.gradient};">${svg(icons[item.icon])}</div>
        <span class="stack-arrow">${svg(icons.arrow)}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  </div>
`).join('');

const projects = [
  {
    id: '01 / 02',
    title: 'Movie Ticket Booking',
    category: 'Web App',
    description: 'A responsive Movie Ticket Booking System that lets users browse movies, pick seats, and confirm bookings through a clean, intuitive interface.',
    features: ['Interactive seat selection', 'Movie browsing & showtimes', 'Booking summary & confirmation', 'Fully responsive layout'],
    challenge: 'Managing seat-state and preventing double-booking purely on the client side with clean, readable logic.',
    tags: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/Aryan-Lade',
    demo: '',
    gradient: 'linear-gradient(to bottom right, rgba(37,99,235,0.3), rgba(8,145,178,0.3))'
  },
  {
    id: '02 / 02',
    title: 'Calculator',
    category: 'Web App',
    description: 'A functional Calculator with a user-friendly layout and efficient calculation logic, supporting everyday arithmetic operations.',
    features: ['Real-time expression evaluation', 'Keyboard-friendly input', 'Clear & delete controls', 'Minimal, accessible UI'],
    challenge: 'Handling operator precedence and edge cases (division by zero, chained operations) reliably.',
    tags: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/Aryan-Lade',
    demo: '',
    gradient: 'linear-gradient(to bottom right, rgba(147,51,234,0.3), rgba(219,39,119,0.3))'
  }
];

const githubIcon = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>';
const linkIcon = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';

document.getElementById('projectsGrid').innerHTML = projects.map(p => `
  <div class="project-card">
    <div class="glass-card project-inner">
      <div class="project-glow" style="background:${p.gradient};"></div>
      <div class="project-body">
        <div class="project-meta">
          <span class="project-id">${p.id}</span>
          <span class="project-cat">${p.category}</span>
        </div>
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
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">${linkIcon} Live Demo</a>` : ''}
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
    role: 'AI/ML Intern',
    org: 'Cognifyz Technologies',
    period: 'Internship',
    points: [
      'Worked on machine learning tasks and data analysis',
      'Used Python with Pandas and NumPy for data processing',
      'Built visualizations with Matplotlib',
      'Explored model building and evaluation'
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib']
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
  { icon: 'code', num: '350+', label: 'LeetCode Problems Solved' },
  { icon: 'trophy', num: '10+', label: 'Hackathons Participated' },
  { icon: 'branch', num: 'GSSoC', label: '2026 Contributor' },
  { icon: 'blocks', num: 'Blockchain', label: 'Club Member' },
  { icon: 'brain', num: 'AI/ML', label: 'Internship Experience' }
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
  window.open(`mailto:aryanlade55@gmail.com?subject=${subject}&body=${body}`, '_blank');
});

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
