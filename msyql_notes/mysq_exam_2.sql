create table dept (deptno int UNSIGNED, dname varchar(20), loc varchar(20));

insert into dept values 
	(10, 'accounting', 'new york'),
    (20, 'research', 'dallas'),
    (30, 'sales', 'chicago'),
    (40, 'operations', 'boston');
    

create table emp(
	empno int unsigned,
    ename varchar(20),
    job varchar(20),
    mgr int unsigned,
    hiredate DATE,
    sal DOUBLE UNSIGNED,
    comm double unsigned,
    deptno int unsigned
    );
    
insert into emp values
	(7369, 'smith', 'clerk', 7902, '1980-12-17', 800, null, 20),
    (7499, 'allen', 'salesman', 7698, '1981-02-20', 1600, 300, 30),
    (7521, 'ward', 'salesman', 7698, '1980-02-22', 1250, 500, 30),
    (7566, 'jones', 'manager', 7839, '1981-04-02', 2975, null, 20),
    (7654, 'martin', 'salesman', 7698, '1981-09-28', 1250, 1400, 30),
    (7698, 'blake', 'manager', 7839, '1981-05-01', 2850, null, 30),
    (7782, 'clark', 'manager', 7839, '1981-06-09', 2450, null, 10),
    (7788, 'scott', 'analyst', 7566, '1987-06-28', 3000, null, 20),
    (7839, 'king', 'president', null, '1981-11-17', 5000, null, 10),
    (7844, 'turner', 'salesman', 7698, '1981-09-08', 1500, 0, 30),
    (7876, 'adams', 'clerk', 7788, '1987-07-13', 1100, null, 20),
    (7900, 'james', 'clerk', 7698, '1981-12-03', 950, null, 30),
    (7902, 'ford', 'analyst', 7566, '1981-12-03', 3000, null, 20),
    (7934, 'miller', 'clerk', 7782, '1982-01-23', 1300, null, 10);
    
    
    
    
-- start exam

-- problem 1
-- print dname, ename, job,hiredate and sort the department name and hiredate in desc order.

select
	d.dname,
    e.ename,
    e.job,
    e.hiredate
from dept as d
join emp as e
on e.deptno = d.deptno
order by d.dname desc, e.hiredate desc;


-- problem 2
-- print out all employee information except 81, 82 years hire date

select * from emp
where year(hiredate) not between '1981' and '1982';


-- problem 3
-- print out all employee information about people whose jobs are manager and department name is accounting

select * from emp as e
join dept as d
on e.deptno = d.deptno
where e.job = 'manager' and
	d.dname = 'accounting';
    
    
-- problem 4
-- print out the employee number, name, date of employment, and department number of the employee whose name starts with s

select
	empno,
    ename,
    hiredate,
    deptno
from emp
where ename like 's%';


-- problem 5
-- print out all the information of the person whose first letter of the name is s or k and the last letter is t or h

select * from emp
where (ename like 's%' or 'k%') and
	  (ename like '%t' or '%h');
      -- if searching anywhere in the string use %w%;


-- problem 6
-- print out information about employees in the research department with an annual salary of $1500 or more

select * from emp as e
join dept as d
on d.deptno = e.deptno
where d.dname = 'research' and
	e.sal * 12 >= 1500;
    
    
    
-- problem 7
-- calculate the annual salary of the sales department and print out the name, department number, salary, and annual salary. and print out an additional 150% year-end bonus;

-- solution 1 without using join
select
	ename,
    deptno,
    sal,
    sal * 12,
    sal * 1.5
from emp
where deptno = 30;


-- solution 2 using join

select 
	e.ename,
    e.deptno,
    e.sal,
    e.sal * 12 as emp_annual_sal,
    e.sal * 1.5 as year_end_bonus
from emp as e
join dept as d
on d.deptno = e.deptno
where d.dname = 'sales';
    