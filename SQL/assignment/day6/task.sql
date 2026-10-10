-- 1. Salary greater than the average salary of all employees
SELECT * FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- 2. Highest salary
SELECT * FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);

-- 3. Lowest salary
SELECT * FROM employees
WHERE salary = (SELECT MIN(salary) FROM employees);

-- 4. Salary greater than the average salary of the IT department
SELECT * FROM employees
WHERE salary > (
    SELECT AVG(e.salary)
    FROM employees e
    INNER JOIN departments d ON e.department_id = d.department_id
    WHERE d.department_name = 'IT'
);

-- 5. Employees in IT or HR (subquery with IN)
SELECT * FROM employees
WHERE department_id IN (
    SELECT department_id
    FROM departments
    WHERE department_name IN ('IT', 'HR')
);

-- 6. Employees not in HR
SELECT * FROM employees
WHERE department_id NOT IN (
    SELECT department_id
    FROM departments
    WHERE department_name = 'HR'
);

-- 7. Departments with at least one employee (EXISTS)
SELECT * FROM departments d
WHERE EXISTS (
    SELECT 1 FROM employees e
    WHERE e.department_id = d.department_id
);

-- 8. Departments with no employees (NOT EXISTS)
SELECT * FROM departments d
WHERE NOT EXISTS (
    SELECT 1 FROM employees e
    WHERE e.department_id = d.department_id
);

-- 9. Salary less than the maximum salary in the company
SELECT * FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- 10. Correlated subquery: earns more than the average of their own department
SELECT * FROM employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department_id = e.department_id
);