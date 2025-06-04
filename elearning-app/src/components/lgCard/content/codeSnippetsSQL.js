const snippets = [
    {
      id: 1,
      lines: [
        "CREATE TABLE employees (",
        "    id INT PRIMARY KEY,",
        "    name VARCHAR(100),",
        "    position VARCHAR(100),",
        "    salary DECIMAL(10, 2)",
        ");",
        "",
        "INSERT INTO employees (id, name, position, salary)",
        "VALUES (1, 'Alice', 'Manager', 5000.00);",
        "",
        "SELECT * FROM employees;"
      ]
    },
    {
      id: 2,
      lines: [
        "SELECT name, salary",
        "FROM employees",
        "WHERE salary > 3000",
        "ORDER BY salary DESC;",
        "",
        "SELECT COUNT(*) AS total",
        "FROM employees;"
      ]
    },
    {
      id: 3,
      lines: [
        "SELECT e.name, d.name AS department",
        "FROM employees e",
        "JOIN departments d ON e.department_id = d.id",
        "WHERE d.name = 'Sales'",
        "ORDER BY e.name;"
      ]
    },
    {
      id: 4,
      lines: [
        "SELECT department_id, AVG(salary) AS avg_salary",
        "FROM employees",
        "GROUP BY department_id",
        "HAVING AVG(salary) > 4000;",
        "",
        "SELECT MAX(salary) FROM employees;"
      ]
    },
    {
      id: 5,
      lines: [
        "SELECT name, salary",
        "FROM employees",
        "WHERE salary > (",
        "    SELECT AVG(salary)",
        "    FROM employees",
        ");",
        "",
        "SELECT name AS employee_name",
        "FROM employees;"
      ]
    },
  ];
  
  export default snippets;