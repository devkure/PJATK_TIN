CREATE DATABASE tin_projekt;
USE tin_projekt;

CREATE TABLE Employee
(
	_id INT NOT NULL AUTO_INCREMENT,
    fName VARCHAR(150),
    lName VARCHAR(150),
    nName VARCHAR(150),
    email VARCHAR(150),
    empRole VARCHAR(150),
    pass VARCHAR(150),
    PRIMARY KEY(_id)
);

CREATE TABLE Task
(
	_id INT NOT NULL AUTO_INCREMENT,
    taskName VARCHAR(150),
    taskType VARCHAR(150),
    taskDescription VARCHAR(150),
    priority VARCHAR(150),
	deadline DATE,
    taskStatus VARCHAR(150),
    PRIMARY KEY(_id)
);

CREATE TABLE Quest
(
	_id INT NOT NULL AUTO_INCREMENT,
    emp_id INT NOT NULL,
    task_id INT NOT NULL,
    PRIMARY KEY(_id),
    FOREIGN KEY (emp_id)
		REFERENCES Employee(_id),
	FOREIGN KEY (task_id)
		REFERENCES Task(_id)
);

INSERT INTO Employee (_id, fName, lName, nName, email, empRole, pass) VALUES
(01, 'Jan', 'Brzeziński', 'Tobi', 's20414@pjwstk.edu.pl', 'Artist/Manager', 'admin1'),
(02, 'Artur', 'Kuś', 'Bones', 'BBones1337@gmail.com', 'Artist/Animator', '123'),
(03, 'Mikołaj', 'Zet', 'Ziolek', 'Nieziolek21@gmail.com', 'Programmer', '69420');

INSERT INTO Task (_id, taskName, taskType, taskDescription, priority, deadline, taskStatus) VALUES
(01, 'Enviro', 'Art', 'Dodać tekstury', 'SHOULD', '2023-01-31', 'Incomplete'),
(02, 'Postacie', 'Art', 'Dodać model postaci', 'MUST', '2023-03-31', 'Incomplete'),
(03, 'Movement', 'Kod', 'Zaimplementować movement', 'MUST', '2022-06-20', 'Complete');

INSERT INTO Quest (_id, emp_id, task_id) VALUES
(01, 01, 01),
(02, 02, 02),
(03, 03, 03);

#DEBUG

SELECT _id, fName, lName, nName, email, empRole FROM Employee;

SELECT _id, employeeID, taskID FROM Quest;

SELECT _id, taskName, taskType, taskDescription, priority, deadline, taskStatus FROM Task;
#Get data from foreign keys in quest table via INNER JOIN statement
SELECT 
Employee.nName, Employee.empRole, Task.taskName, 
Task.taskType, Task.priority, Task.deadline, Task.taskStatus
FROM Quest 
INNER JOIN Employee ON Quest.emp_id=Employee._id
INNER JOIN Task ON Quest.task_id=Task._id;

SELECT 
Employee.fName, Employee.lName, Employee.nName, Employee.empRole, Employee.email, Task.taskName, 
Task.taskType, Task.taskDescription, Task.priority, Task.deadline, Task.taskStatus
FROM Quest 
INNER JOIN Employee ON Quest.emp_id=Employee._id
INNER JOIN Task ON Quest.task_id=Task._id;

SELECT e._id as _id, e.fName, e.lName, e.nName, e.email, e.empRole FROM Employee e WHERE e._id = 1;

SELECT q._id as _id, Employee.fName, Employee.lName, Employee.nName, Employee.email, Employee.empRole, Employee._id as emp_id, 
Task.taskName, Task.taskType, Task.taskDescription, Task.priority, Task.deadline, Task.taskStatus, Task._id as task_id 
FROM Quest q INNER JOIN Employee ON q.emp_id=Employee._id 
INNER JOIN Task ON q.task_id=Task._id 
WHERE q._id = 1;

SELECT Employee._id as emp_id, 
Task.taskName, Task._id as task_id 
FROM Quest q INNER JOIN Employee ON q.emp_id=Employee._id 
INNER JOIN Task ON q.task_id=Task._id 
WHERE emp_id = 1;

SELECT Task._id as task_id,
Employee.fName, Employee.nName, Employee.lName, Employee._id as emp_id
FROM Quest q INNER JOIN Employee on q.emp_id = Employee._id
INNER JOIN Task on q.task_id = Task._id
WHERE task_id = 1;

SELECT emp_id, task_id FROM Quest q
INNER JOIN Employee on q.emp_id = Employee._id 
INNER JOIN Task on q.task_id = Task._id 
WHERE nName = 'Tobi' AND taskName = 'Enviro';

SELECT emp_id FROM Quest q INNER JOIN Employee on q.emp_id = Employee._id WHERE nName = 'Tobi';
SELECT task_id FROM Quest q INNER JOIN Task on q.task_id = Task._id WHERE taskName = 'Enviro';

UPDATE Quest 
set 
emp_id = (SELECT emp_id FROM Quest q INNER JOIN Employee on q.emp_id = Employee._id WHERE nName = 'Tobi'), 
task_id = (SELECT task_id FROM Quest q INNER JOIN Task on q.task_id = Task._id WHERE taskName = 'abc') 
where _id = 1; 

#DEBUG
SET SQL_SAFE_UPDATES = 0;
DELETE FROM Quest;
DELETE FROM Task;
DELETE FROM Employee;
DROP TABLE Quest;
DROP TABLE Task;
DROP TABLE Employee;