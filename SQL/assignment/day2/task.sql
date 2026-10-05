
CREATE TABLE students (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(50) NOT NULL,
    age        INT,
    department VARCHAR(20),
    city       VARCHAR(30),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
               ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO students (name, age, department, city)
VALUES ('Ravi', 22, 'CSE', 'Chennai');

INSERT INTO students (name, age, department, city)
VALUES
    ('Arun',  23, 'IT',  'Madurai'),
    ('Bala',  21, 'ECE', 'Chennai'),
    ('Priya', 24, 'CSE', 'Coimbatore');


UPDATE students
SET city = 'Bangalore'
WHERE id = 2;

UPDATE students
SET age = 25
WHERE id = 3;


UPDATE students
SET age = 24,
    department = 'IT',
    city = 'Chennai'
WHERE id = 1;


UPDATE students
SET city = 'Madurai'
WHERE department = 'CSE';


DELETE FROM students
WHERE id = 4;


DELETE FROM students
WHERE city = 'Salem';


SELECT id, city, updated_at FROM students WHERE id = 2;  

UPDATE students
SET city = 'Trichy'
WHERE id = 2;

SELECT id, city, updated_at FROM students WHERE id = 2;  


INSERT INTO students (name, age, department, city)
VALUES ('Kiran', 22, 'CSE', 'Chennai');


INSERT INTO students (name, age, department, city)
VALUES
    ('Sneha', 21, 'ECE', 'Salem'),
    ('Vijay', 23, 'IT',  'Madurai');


UPDATE students
SET city = 'Coimbatore'
WHERE name = 'Kiran';


UPDATE students
SET age = 22,
    department = 'CSE'
WHERE name = 'Sneha';


DELETE FROM students
WHERE name = 'Vijay';