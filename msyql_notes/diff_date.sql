-- 1
select * from emp
where year(hiredate) not between '1981' and '1982';

-- 2
select * from emp
where hiredate not between '1981-01-01' and '1982-12-31';

-- 3
select * from emp
where year(hiredate) not like '1981%' and  hiredate not like '1982%';

-- 4
select * from emp
where year(hiredate) <> '1981' and year(hiredate) <> '1982';

-- 5
select * from emp
where hiredate > '1983-12-31' - interval 1 year or
	  hiredate < '1982-01-01' - interval 1 year;
       
-- 6
select * from emp
where year(hiredate) > '1982-12-31'
union
select * from emp
where year(hiredate) < '1981-01-01';

-- 7
select * from emp
where year(hiredate) not in ('1981', '1982');


select * from emp where ename like 'a%';