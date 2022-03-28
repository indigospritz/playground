select * from customers;

select
		e.employeeNumber,
        concat(e.lastName, ', ', e.firstName) as emp_name,
        off.city,
        getSales(od.priceEach, sum(od.quantityOrdered)) as total_sales
	from employees as e
    join offices as off
    on e.officeCode = off.officeCode
    join customers as c
    on e.employeeNumber = c.salesRepEmployeeNumber
    join orders as ord
    on c.customerNumber = ord.customerNumber
    join orderdetails as od
    on ord.orderNumber = od.orderNumber
    group by employeeNumber
    order by employeeNumber;
    

