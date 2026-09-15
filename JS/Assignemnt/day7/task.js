
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


const student = {
  name: "Ravi",
  age: 21,
  course: "Computer Science",
  mark: 85
};
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.mark);


const students = [
  { name: "Ravi", mark: 85 },
  { name: "Priya", mark: 92 },
  { name: "Arjun", mark: 78 }
];
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + " - " + students[i].mark);
}



const studentList = [
  { name: "Ravi", mark: 85 },
  { name: "Priya", mark: 92 },
  { name: "Arjun", mark: 78 }
];
const searchName = "Priya";
for (let i = 0; i < studentList.length; i++) {
  if (studentList[i].name === searchName) {
    console.log(studentList[i].name + " - " + studentList[i].mark);
  }
}



const employees = [
  { name: "Kumar", salary: 35000 },
  { name: "Sneha", salary: 45000 },
  { name: "Vikram", salary: 52000 },
  { name: "Anita", salary: 38000 }
];
for (let i = 0; i < employees.length; i++) {
  if (employees[i].salary > 40000) {
    console.log(employees[i].name + " - ₹" + employees[i].salary);
  }
}