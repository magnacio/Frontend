
const heading = document.getElementById('main-heading');

heading.textContent = 'Heading Updated via JavaScript';


const paragraphs = document.querySelectorAll('.info-text');


paragraphs.forEach((p, index) => {
  p.textContent = `This is updated paragraph number ${index + 1}.`;
});