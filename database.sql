CREATE TABLE records(
id SERIAL PRIMARY KEY,
first_name VARCHAR(80) NOT NULL,
last_name VARCHAR(80) NOT NULL,
emp_id INT NOT NULL,
job_title VARCHAR(40) NOT NULL,
annual_salary INT NOT NULL
);