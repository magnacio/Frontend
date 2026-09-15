const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));

window.addEventListener('scroll', () => {
  const doc = document.documentElement;
  const scrolled = doc.scrollTop / (doc.scrollHeight - doc.clientHeight) * 100;
  document.getElementById('progress').style.width = scrolled + '%';
});

document.getElementById('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

const detail = document.getElementById('yearDetail');
document.querySelectorAll('.year').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.year').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    detail.animate([{opacity:0, transform:'translateY(8px)'},{opacity:1, transform:'none'}], {duration:350});
    detail.textContent = button.dataset.text;
  });
});
