-- procedure with function

delimiter $$

create procedure getSales_procedure()
begin
	select
		productCode,
        sum(quantityOrdered) as total_quantity_ordered,
		priceEach,
        getSales(priceEach, sum(quantityOrdered)) as total_sales
	from orderdetails
    group by productCode;
end $$

delimiter ;

call getSales_procedure();


-- procedure with no function
delimiter $$
create procedure getSales_no_function()
begin
	select
		productcode,
		sum(quantityOrdered) as total_quantity_ordered,
        priceEach,
        priceEAch * sum(quantityOrdered) as total_sales
	from orderdetails
    group by productCode;
end $$
delimiter ;

call getSales_no_function();

show profiles;
set @@profiling = 0;
set @@profiling_history_size = 0;
set @@profiling_history_size = 100;
set @@profiling = 1;



