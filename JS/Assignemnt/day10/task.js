
var globalVar = "var is function/global scoped";
let globalLet = "let is block scoped";
const globalConst = "const cannot be reassigned";

var globalVar = "re-declared without error";
console.log(globalVar);

function scopeDemo() {
  var funcVar = "only visible inside this function";
  console.log(funcVar);
}
scopeDemo();

if (true) {
  var leakedVar = "var ignores block scope";
  let blockLet = "let respects block scope";
  const blockConst = "const respects block scope";
  console.log(blockLet, blockConst);
}
console.log(leakedVar);

const fixedConst = "cannot change";
try {
  fixedConst = "attempt";
} catch (e) {
  console.log(e.message);
}

console.log(tdzExampleVar);
var tdzExampleVar = "var is hoisted as undefined";

try {
  console.log(tdzExampleLet);
  let tdzExampleLet = "let stays in the TDZ";
} catch (e) {
  console.log(e.message);
}



const addExplicit = (a, b) => {
  return a + b;
};
const squareExplicit = (n) => {
  return n * n;
};
const addImplicit = (a, b) => a + b;
const squareImplicit = (n) => n * n;



const numbers = [10, 20, 30];
const [first, second, third] = numbers;

const student = { name: "Ravi", age: 25, course: "JavaScript" };
const { name, age, course } = student;



function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
const merged = [...[1, 2, 3], ...[4, 5, 6]];


function registerStudent(name, course, city = "Chennai") {
  return `${name} has enrolled in ${course} at our ${city} center.`;
}



class Student {
  constructor(name, age, mark) {
    this.name = name;
    this.age = age;
    this.mark = mark;
  }
  displayDetails() {
    console.log(`${this.name}, Age: ${this.age}, Mark: ${this.mark}`);
  }
}
const student1 = new Student("Ravi", 25, 88);
const student2 = new Student("Anu", 23, 92);



function loadData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data Loaded"), 1000);
  });
}
loadData().then((result) => console.log(result));
async function loadDataAsync() {
  const result = await loadData();
  console.log(result);
}



const user = { name: "Ravi" };
const city = user?.address?.city ?? "City Not Available";


const nums2 = [10, 25, 30, 45, 50, 65];
const greaterThan30 = nums2.filter((n) => n > 30);
const firstGreaterThan40 = nums2.find((n) => n > 40);
const has50 = nums2.includes(50);
const doubled = nums2.map((n) => n * 2);



const name2 = "Ravi";
const age2 = 25;
const student2Obj = { name: name2, age: age2 };
const greet = (name) => `Hello ${name}`;