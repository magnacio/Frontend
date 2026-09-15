// Task 1 - Add Class

let box1 = document.getElementById("box1");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
    box1.classList.add("active");
});


// Task 2 - Remove Class

let box2 = document.getElementById("box2");
let removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", function () {
    box2.classList.remove("active");
});


// Task 3 - Toggle Theme

let card = document.getElementById("card");
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    card.classList.toggle("dark");
});


// Task 4 - Take Input Value and Show in Console

let username = document.getElementById("username");
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
    let value = username.value;
    console.log(value);
});
