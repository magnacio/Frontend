CREATE TABLE GovernmentOffice (
    office_id INT PRIMARY KEY,
    office_name VARCHAR(100),
    city VARCHAR(50)
);

CREATE TABLE Employee (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    salary INT,
    office_id INT
);

CREATE TABLE Product (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    price INT
);