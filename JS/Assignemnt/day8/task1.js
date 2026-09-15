
const numbers = [12, 45, 7, 89, 23];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


const students = ["Aarav", "Meera", "Karthik", "Divya", "Rohan"];
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}


const nums = [10, 15, 22, 33, 40, 51, 68];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i]);
  }
}


const studentList = [
  { name: "Aarav", mark: 85 },
  { name: "Meera", mark: 72 },
  { name: "Karthik", mark: 91 },
  { name: "Divya", mark: 78 },
  { name: "Rohan", mark: 88 }
];

for (let i = 0; i < studentList.length; i++) {
  if (studentList[i].mark > 80) {
    console.log(studentList[i].name);
  }
}


const addNumbers = (a, b) => a + b;


const studentMessage = (name, mark) => `${name} scored ${mark} marks`;