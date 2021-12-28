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
id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
job_title VARCHAR(50),
role_id INTEGER DEFAULT NULL,   
-- role id should be set to not null but I don't know how to get that to work at the moment so come back to it
manager_id INTEGER DEFAULT NULL,
-- CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id), associated with role id above can't figure out how to get this to work
CONSTRAINT fk_manager_id FOREIGN KEY (manager_id) REFERENCES employees(id)
);