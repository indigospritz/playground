-- procedure to get employees with jobTitle

delimiter $$
create procedure getEmployeesByJobTitle(
		in job varchar(255)
)
begin
	select * from employees
    where jobTitle = job;
end $$
delimiter ;

call getEmployeesByJobTitle('sales rep');