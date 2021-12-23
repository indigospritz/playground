use test;

create table employee (name VARCHAR(20), citY VARCHAR(20));

INSERT INTO employee VALUES 
	('Seo', 'Toledo'),
    ('Chung', 'Cebu'),
    ('Lee', 'Carcar'),
    ('Kim', 'Danao'),
    ('Park', 'Cebu'),
    ('Moon', 'Cebu');
    
create table company_employee (name VARCHAR(20), company VARCHAR(20), pay int UNSIGNED);

insert into company_employee values
	('Lee', 'Samsung', 30000),
    ('Park', 'Samsung', 100),
    ('Seo', 'SK', 10000),
    ('Moon', 'LG', 200),
    ('Chung', 'LG', 900),
    ('Kim', 'Samsung', 50000);

create table company (company VARCHAR(20), city VARCHAR(20));

insert into company values ('SK', 'Carcar'), ('LG', 'Toledo'), ('Samsung', 'Cebu');

select
	c.company,
    count(ce.name),
    avg(ce.pay)
from company as c
join company_employee as ce
on c.company = ce.company
group by ce.company;

select name, company, pay
from company_employee
where pay > (select avg(pay) from company_employee group by company);


select pay from company_employee;

select
	e.name,
    ce.company,
    ce.pay
from company_employee as ce
join employee as e
on e.name = ce.name
group by company;


select name, company, pay
from company_employee
where pay > (select avg(pay) from company_employee)
group by company;


select temp.name, temp.company, temp.pay
from 
	(select name, company, pay from company_employee group by company) temp
where pay > (select avg(pay) from company_employee)
group by company;

select
	name,
    company,
    pay
from (select name, company, pay, avg(pay) avg_pay from company_employee) t
where pay > t.avg_pay;

use test;

-- problem  3

select
	ce.name,
    c.company,
    c.city as company_add,
    e.city as employee_add
from company_employee as ce
join company as c
on ce. company = c.company
join employee as e
on ce.name = e.name
where e.city <> c.city;

-- end problem 3