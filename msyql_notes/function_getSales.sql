-- function to get total sales generated from an item/product
delimiter $$
create function getSales(
	quantity decimal(10,2),
    price decimal(10,2)
)
returns decimal(10,2)
deterministic
begin
	declare totalSales decimal(10,2);
    
    if quantity > 0  then
		set totalSales = price * quantity;
	elseif quantity <= 0 then
		set totalSales = 0.00;
	end if;
    return (totalSales);
end $$
delimiter ;

select
	productCode,
    sum(quantityOrdered),
    priceEach,
    getSales(priceEach, sum(quantityOrdered)) as total_sales
from orderdetails
group by productCode;