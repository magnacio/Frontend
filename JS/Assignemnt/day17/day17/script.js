// Task 1 - Student Details
let students = [];

let studentName = document.getElementById("studentName");
let studentAge = document.getElementById("studentAge");
let studentCity = document.getElementById("studentCity");
let addStudentBtn = document.getElementById("addStudentBtn");
let studentDisplay = document.getElementById("studentDisplay");

addStudentBtn.addEventListener("click", function () {
    let student = {
        name: studentName.value,
        age: studentAge.value,
        city: studentCity.value
    };

    students.push(student);
    studentDisplay.innerHTML = "";

    students.forEach(function (student) {
        let div = document.createElement("div");
        div.classList.add("student-card");

        div.innerHTML =
            "<h3>" + student.name + "</h3>" +
            "<p>Age: " + student.age + "</p>" +
            "<p>City: " + student.city + "</p>";

        studentDisplay.appendChild(div);
    });
});


// Task 2 - Employee Details
let employees = [];

let employeeName = document.getElementById("employeeName");
let department = document.getElementById("department");
let salary = document.getElementById("salary");
let addEmployeeBtn = document.getElementById("addEmployeeBtn");
let employeeTable = document.getElementById("employeeTable");

addEmployeeBtn.addEventListener("click", function () {
    let employee = {
        name: employeeName.value,
        department: department.value,
        salary: salary.value
    };

    employees.push(employee);
    employeeTable.innerHTML = "";

    employees.forEach(function (employee) {
        let row = document.createElement("tr");

        row.innerHTML =
            "<td>" + employee.name + "</td>" +
            "<td>" + employee.department + "</td>" +
            "<td>₹" + employee.salary + "</td>";

        employeeTable.appendChild(row);
    });
});


// Task 3 - Product Details
let products = [];

let productName = document.getElementById("productName");
let price = document.getElementById("price");
let category = document.getElementById("category");
let addProductBtn = document.getElementById("addProductBtn");
let productDisplay = document.getElementById("productDisplay");

addProductBtn.addEventListener("click", function () {
    let product = {
        name: productName.value,
        price: price.value,
        category: category.value
    };

    products.push(product);
    productDisplay.innerHTML = "";

    products.forEach(function (product) {
        let card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML =
            "<h3>" + product.name + "</h3>" +
            "<p>Price: ₹" + product.price + "</p>" +
            "<p>Category: " + product.category + "</p>";

        productDisplay.appendChild(card);
    });
});
