DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL (6,0),
department_id INTEGER NOT NULL,
CONSTRAINT fk_departments FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- include employee table with additional job title and salary information in case they differ from the standard set in roles
CREATE TABLE employees (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
job_title VARCHAR(50),
role_id INTEGER NOT NULL,
manager_id INTEGER DEFAULT NULL,
CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id)
);