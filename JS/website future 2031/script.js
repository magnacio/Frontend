
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .10 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const progress = document.querySelector('.progress-line');
window.addEventListener('scroll', () => {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  progress.style.width = (max ? (doc.scrollTop / max) * 100 : 0) + '%';
});

document.querySelectorAll('[data-copy-year]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    document.querySelectorAll('[data-copy-year]').forEach(x => x.style.opacity = '.55');
    el.style.opacity = '1';
  });
  el.addEventListener('mouseleave', () => {
    document.querySelectorAll('[data-copy-year]').forEach(x => x.style.opacity = '1');
  });
});
