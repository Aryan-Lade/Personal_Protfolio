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

const stackItems = [
  { icon: 'code', title: 'Programming Languages', description: 'Strong foundation in Java, C++, and Python for problem-solving and application development', gradient: 'linear-gradient(to bottom right, #a855f7, #ec4899)' },
  { icon: 'globe', title: 'Web Development', description: 'Building responsive web interfaces using HTML, CSS, and JavaScript', gradient: 'linear-gradient(to bottom right, #3b82f6, #22d3ee)' },
  { icon: 'database', title: 'Databases', description: 'Experience working with MongoDB and MySQL for structured and unstructured data', gradient: 'linear-gradient(to bottom right, #22c55e, #10b981)' },
  { icon: 'brain', title: 'Machine Learning & AI', description: 'Interest and hands-on exposure to data science and quantitative analysis', gradient: 'linear-gradient(to bottom right, #6366f1, #a855f7)' },
  { icon: 'git', title: 'Version Control', description: 'Code management and collaboration using Git and GitHub', gradient: 'linear-gradient(to bottom right, #f97316, #ef4444)' },
  { icon: 'chart', title: 'Analytics & Visualization', description: 'Data visualization and insights using Power BI', gradient: 'linear-gradient(to bottom right, #eab308, #f59e0b)' },
  { icon: 'pen', title: 'Design & Presentation', description: 'Creating visuals and presentations using Canva and Microsoft PowerPoint', gradient: 'linear-gradient(to bottom right, #ec4899, #f43f5e)' }
];

const svg = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

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
  { id: '01 / 02', title: 'Movie Ticket Booking', category: 'Web App', description: 'A responsive Movie Ticket Booking System built using HTML, CSS, and JavaScript, allowing users to browse movies, select seats, and book tickets through an intuitive interface.', tags: ['HTML', 'CSS', 'Javascript'], gradient: 'linear-gradient(to bottom right, rgba(37,99,235,0.3), rgba(8,145,178,0.3))' },
  { id: '02 / 02', title: 'Calculator', category: 'Web App', description: 'A functional Calculator built using HTML, CSS, and JavaScript, designed with a user-friendly layout and efficient calculation logic.', tags: ['HTML', 'CSS', 'Javascript'], gradient: 'linear-gradient(to bottom right, rgba(147,51,234,0.3), rgba(219,39,119,0.3))' }
];

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
        <div class="project-tags">
          ${p.tags.map(t => `<div class="project-tag"><span>${t}</span></div>`).join('')}
        </div>
      </div>
    </div>
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
