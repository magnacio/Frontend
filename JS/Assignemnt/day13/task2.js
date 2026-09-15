const clickHeading = document.getElementById('click-heading');
const actionBtn = document.getElementById('action-btn');

actionBtn.addEventListener('click', () => {
  clickHeading.textContent = 'Button was clicked!';
  clickHeading.style.color = 'blue';
  clickHeading.classList.add('highlight');
});