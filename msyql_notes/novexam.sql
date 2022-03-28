-- exam 
select
	member_id,
    truncate((total.cp/total.op) * 100, 2) as last_dc,
    total.last_purchase_date
from (
	select
		member_id,
        order_price as op,
        if(coupon_price <> 'NA', coupon_price, 0.00) as cp,
        order_time as last_purchase_date
	from tbq) as total
where last_purchase_date in (select max(order_time) from tbq group by member_id)
order by 1;

select distinct pd_code from tbq;

SELECT
member_id,
  TRUNCATE (IF(coupon_price IS NULL,0,(coupon_price / order_price) * 100),2) AS `last_dc`
FROM
  `tbq`
WHERE CONCAT(order_time, '-', member_id) IN
  (SELECT
    CONCAT (MAX(order_time), '-', member_id) AS `hash`
  FROM
    `tbq`
  GROUP BY `member_id`) ORDER BY member_id ASC;
  
  set profiling = 1;
  show profiles;