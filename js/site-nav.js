// js/site-nav.js — header behaviour shared by news.html and news-details.html
// (same logic as the inline script in index.html)

// Networks dropdown
const subDrop = document.getElementById('subDrop');
const subDropTrigger = document.getElementById('subDropTrigger');
if (subDrop && subDropTrigger) {
  subDropTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    subDrop.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!subDrop.contains(e.target)) subDrop.classList.remove('open');
  });
}

// Mobile nav
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const open = mobileNav.style.display === 'flex';
    mobileNav.style.display = open ? 'none' : 'flex';
  });
  mobileNav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => (mobileNav.style.display = 'none'))
  );
}