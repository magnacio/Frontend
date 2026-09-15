
const toggleBtn1 = document.getElementById("toggleBtn1");
const para1 = document.getElementById("para1");

toggleBtn1.addEventListener("click", () => {
  para1.classList.toggle("show");
  toggleBtn1.textContent = para1.classList.contains("show")
    ? "Hide Paragraph"
    : "Show Paragraph";
});

const toggleBtn2 = document.getElementById("toggleBtn2");
const box = document.getElementById("box");

toggleBtn2.addEventListener("click", () => {
  box.classList.toggle("green");
});


const detailsBtn = document.getElementById("detailsBtn");
const cardDetails = document.getElementById("cardDetails");

detailsBtn.addEventListener("click", () => {
  cardDetails.classList.toggle("show");
  detailsBtn.textContent = cardDetails.classList.contains("show")
    ? "Hide Details"
    : "Show Details";
});