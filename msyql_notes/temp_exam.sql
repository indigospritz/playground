-- solution 1
use test;
select
	name,
    company,
    pay,
    temp.avg_company_salary
from 
(select name, company, pay, avg(pay) over (partition by company) avg_company_salary from company_employee) temp
where pay > avg_company_salary;
-- end solution 1

-- solution 2
-- select
-- 	temp.name, temp.company, temp.pay, avg_pay as avg_company_salary from company_employee temp
-- join
-- (select	company,avg(pay) as avg_pay from company_employee group by company) ce
-- on temp.company = ce.company
-- and temp.pay > ce.avg_pay;
-- end solution 2


-- solution 3
select
	 ce.name,
     ce.company,
     ce.pay,
     avg_company_salary
from company_employee ce
join (select company, avg(pay) as avg_company_salary from company_employee group by company) temp
on ce.company = temp.company
where ce.pay > avg_company_salary;

select
	 ce.name,
     ce.company,
     ce.pay,
     avg_company_salary
from (select name, company, pay as pay, avg(pay) as avg_company_salary from company_employee group by company) ce
join
(select company, avg(pay) over(partition by company) as avg_temp from company_employee) temp
group by company;

-- try
select t1.name, t1.company, t1.pay, t2.avg_pay from company_employee t1
join (select company, avg(pay) as avg_pay from company_employee group by company) as t2
on t1.company = t2.company
having t1.pay > t2.avg_pay;

select ce.name, ce.company, ce.pay, temp.avg_pay from company_employee ce
join (select company, avg(pay) as avg_pay from company_employee group by company) temp
on ce.company = temp.company
having ce.pay >= temp.avg_pay;

delete from company_employee where name = 'test';


select ce.name, ce.company, ce.pay, temp.avg_pay from company_employee ce
join (select company, avg(pay) as avg_pay from company_employee group by company) temp
on ce.company = temp.company
having ce.pay > temp.avg_pay;
