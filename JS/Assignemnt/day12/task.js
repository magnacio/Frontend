
let numbers = [1, 2, 3, 4, 5];
numbers.push(6, 7, 8);
console.log("Task 1:", numbers);




let fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange", "Papaya"];
let removed1 = fruits.pop();
let removed2 = fruits.pop();
console.log("Task 2 - Removed:", removed1, removed2);
console.log("Task 2 - Final array:", fruits);




let cities = ["Chennai", "Mumbai", "Delhi", "Kolkata", "Pune"];
cities.shift();                 
cities.unshift("Bengaluru");    
console.log("Task 3:", cities);




let students = ["Arun", "Bala", "Kumar", "Divya", "Meena"];
students.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});




let nums = [10, 20, 30, 40, 50];
let doubled = nums.map(n => n * 2);
console.log("Task 5:", doubled);
