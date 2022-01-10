INSERT INTO departments (department_name)
VALUES
("Sales"),
("Marketing"),
("Development"),
("HR");

INSERT INTO roles (title, salary, department_id)
VALUES
("Manager", 100000, 1),
("Senior", 70000, 2),
("Junior", 50000, 3),
("Associate", 30000, 4);

INSERT INTO employees (first_name, last_name, job_title, role_id, manager_id)
VALUES
("John", "Doe", "Manager", 1, NULL),
("Fred", "Simpson", "Senior", 2, 1),
("Betty", "Ross", "Junior", 3, 2),
("Sue", "Seers", "Associate", 4, 2);