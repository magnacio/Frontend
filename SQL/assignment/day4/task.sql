
SELECT department, COUNT(*) AS total_employees
FROM employees
GROUP BY department;


SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department;


SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;


SELECT city, COUNT(*) AS total_employees
FROM employees
GROUP BY city;


SELECT department, COUNT(*) AS total_employees
FROM employees
GROUP BY department
HAVING COUNT(*) > 2;


SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department
HAVING SUM(salary) > 100000;


SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 40000;



SELECT department,
       COUNT(*)    AS employee_count,
       AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING COUNT(*) >= 2;


SELECT city,
       SUM(salary) AS total_salary,
       MAX(salary) AS max_salary
FROM employees
GROUP BY city
HAVING SUM(salary) > 80000;


SELECT department,
       COUNT(*)    AS total_employees,
       SUM(salary) AS total_salary,
       AVG(salary) AS avg_salary,
       MIN(salary) AS min_salary,
       MAX(salary) AS max_salary
FROM employees
GROUP BY department
HAVING COUNT(*) >= 2 AND AVG(salary) > 40000
ORDER BY avg_salary DESC;