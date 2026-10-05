
SELECT * FROM employees;


SELECT emp_name, salary, city FROM employees;


SELECT * FROM employees WHERE city = 'Chennai';


SELECT * FROM employees WHERE salary > 45000;


SELECT * FROM employees WHERE age < 28;


SELECT * FROM employees WHERE salary >= 40000;


SELECT * FROM employees WHERE department <> 'HR';


SELECT * FROM employees WHERE department = 'IT' AND city = 'Chennai';


SELECT * FROM employees WHERE city = 'Chennai' OR city = 'Madurai';


SELECT * FROM employees WHERE salary > 40000 AND age < 30;


SELECT * FROM employees WHERE city IN ('Chennai', 'Madurai', 'Salem');


SELECT * FROM employees WHERE department NOT IN ('IT', 'HR');


SELECT * FROM employees WHERE city IS NULL;


SELECT * FROM employees WHERE city IS NOT NULL;


SELECT * FROM employees WHERE salary BETWEEN 35000 AND 50000;


SELECT * FROM employees
WHERE age BETWEEN 25 AND 30 AND city = 'Chennai';


SELECT * FROM employees WHERE emp_name LIKE 'A%';


SELECT * FROM employees WHERE emp_name LIKE '%vi%';


SELECT DISTINCT department FROM employees;


SELECT emp_name  AS employee_name,
       department AS department_name,
       salary     AS monthly_salary
FROM employees;