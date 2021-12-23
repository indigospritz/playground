select table_name, table_schema from information_schema.tables where table_schema = 'classicmodels';

select * from customers;


-- problem 1
select *,
	c.customerName as 'Customer Name',
    e.sales_rep as 'Sales Rep'
from customers as c
join (select employeeNumber, concat(lastName, ' ', left(firstName, length(firstName)))as sales_rep from employees) as e 
on c.salesRepEmployeeNumber = e.employeeNumber
order by c.customerName;

-- answer (preferred) check show profiles;
select *, c.customerName as 'Customer Name',
concat(e.lastName, ', ', e.firstName) as 'Sales Rep'
from customers as c
join employees as e
on c.salesRepEmployeeNumber = e.employeeNumber
order by c.customerName;
-- end problem 1

select *, customerName as 'Customer Name',
concat(e.lastName, ', ', e.firstName) as 'Sales Rep'
from customers as c
join employees as e
on c.salesRepEmployeeNumber = e.employeeNumber
order by c.customerName;

-- answer problem 1
select 
	c.customerName as 'Customer Name',
    concat(e.lastName, ' ', e.firstName) as 'Sales Rep'
from customers c
join employees e
on c.salesRepEmployeeNumber = e.employeeNumber
order by customerName;
-- end no 1

-- problem 2
select
	prod.productName as 'Product Name',
    od.total_prod_quantity_ordered as 'Total # Ordered',
    ts.total_sale as 'Total Sale'
from products as prod
join (select productCode, sum(quantityOrdered) as total_prod_quantity_ordered from orderdetails group by productCode) as od
on prod.productCode = od.productCode
join (select productCode, sum(quantityOrdered) * priceEach as total_sale from orderdetails group by productCode) as ts
on prod.productCode = ts.productCode
order by ts.total_sale desc;

-- answer problem 2
select
	p.productName as 'Product Name',
    sum(o.quantityOrdered) as 'Total # Ordered',
    sum(o.quantityOrdered) * o.priceEach as 'Total Sales'
from products as p
left join orderdetails o
on p.productCode = o.productCode
group by 1
order by 3 desc;


-- problem 3
select
	status,
	count(status) as '# Orders'
from orders
group by status
order by status;

-- answer problem 3
select
	o.status as 'Order Status',
    od.quantityOrdered as '# Orders'
from orders as o
left join orderdetails od
on o.orderNumber = od.orderNumber
group by status
order by o.status;

    
-- problem 4
select 
	prod.productLine as 'Product Line',
    od.num_of_orders as '# Orders'
from products as prod
join (select productCode, sum(quantityOrdered) as num_of_orders from orderdetails group by productCode) as od
on prod.productCode = od.productCode
order by od.num_of_orders desc;

-- answer problem 4 (preferred)
select 
	prod.productLine as 'Product Line',
    sum(od.quantityOrdered) as '# Orders'
from products as prod
join orderdetails as od
on prod.productCode = od.productCode
group by productLine
order by 2;

-- answer problem 4
select productLine as 'Product Line',
	   sum(quantityOrdered) as '# Sold'
from
(
	select p.productCode,
		p.productName,
        od.quantityOrdered,
        p.productLine
	from products p
    right join orderdetails od
    on p.productCode = od.productCode
) as x
group by productLine
order by 2;
-- end problem 4

-- problem 5 
select 
	e2.sales_rep as 'Sales Rep',
    c.customer_order_count as '# Orders',
    od.total_sales as 'Total Sales'
from employees as e1
join (select employeeNumber, concat(lastName, ', ', firstName) as sales_rep from employees) as e2
on e1.employeeNumber = e2.employeeNumber
join (select salesRepEmployeeNumber, customerNumber, count(customerName) as customer_order_count from customers group by salesRepEmployeeNumber) as c
on e2.employeeNumber = c.salesRepEmployeeNumber
join (select orderNumber, customerNumber from orders) as o
on c.customerNumber = o.customerNumber
join (select
	orderNumber,
    quantityOrdered,
    priceEach,
	case
		when quantityOrdered is null then 0.00
        when quantityOrdered = 0 then 0.00
        when quantityOrdered > 0 then quantityOrdered * priceEach
	end as total_sales
    from orderdetails) as od
on o.orderNumber = od.orderNumber
where e1.jobTitle = 'Sales Rep'
group by salesRepEmployeeNumber;

set profiling = 1;
show profiles;

-- answer problem 5
select
	salesRep as 'Sales Rep',
    count(quantityOrdered) as '# Orders',
    sum(totalSales) as 'Total Sales'
from
(
	select
		e.employeeNumber,
        concat(e.lastName, ', ', e.firstName) as salesRep,
        od.quantityOrdered,
        od.priceEach,
        case
			when od.quantityOrdered is null then 0.00
            when od.quantityOrdered = 0 then 0.00
            when od.quantityOrdered > 0 then od.quantityOrdered * od.priceEach
		end as totalSales,
        e.jobTitle
	from customers c
     join
		(
			select
				employeeNumber,
                lastName,
                firstName,
                jobTitle
			from employees
            where jobTitle = 'Sales Rep'
		) as e
	on e.employeeNumber = c.salesRepEmployeeNumber
    left join orders o
    on o.customerNumber = c.customerNumber
    left join orderdetails od
    on o.orderNumber = od.orderNumber
) as x
group by employeeNumber
order by sum(totalSales) desc;

show profiles;


-- problem 6 (wrong table used)
select
	monthname(orderDate),
    year(orderDate),
    od.payments_received as 'Payments Received' 
from orders o
join (select orderNumber, truncate(quantityOrdered * priceEach, 2) as payments_received from orderdetails) as od
on o.orderNumber = od.orderNumber
group by monthname(o.orderDate), year(o.orderDate)
order by orderDate;

-- answer problem 6 (preferred)
select
	monthname(paymentDate) as 'Month',
    year(paymentDate) as 'Year',
    truncate(sum(amount), 2) as 'Payments Received'
from payments
group by 2, 1
order by paymentDate;

show profiles;