CREATE TABLE courses (
    course_id    INT PRIMARY KEY,
    course_name  VARCHAR(50) NOT NULL,
    trainer_name VARCHAR(50) NOT NULL
);

CREATE TABLE students (
    student_id   INT PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    course_id    INT,
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

INSERT INTO courses (course_id, course_name, trainer_name) VALUES
(101, 'Java',   'Ravi'),
(102, 'Python', 'Karthik');

INSERT INTO students (student_id, student_name, course_id) VALUES
(1, 'Arun',  101),
(2, 'Bala',  101),
(3, 'Kumar', 102),
(4, 'Priya', 101),
(5, 'Divya', 102);

SELECT e.employee_id,
       e.employee_name,
       e.salary,
       d.department_name
FROM employees e
INNER JOIN departments d
        ON e.department_id = d.department_id;