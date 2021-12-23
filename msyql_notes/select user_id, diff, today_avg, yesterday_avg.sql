select
	a.user_id,
    ifnull((a.today_avg - b.yesterday_avg), 0) as diff,
    today_avg as today_avg,
    yesterday_avg as yesterday_avg
from 
	(select 
        avg(amount) today_avg,
        user_id
	from users_transaction 
    where date(created_at) = '2021-08-31'
    group by user_id) as a
left join 
	(select
        avg(amount) yesterday_avg,
        user_id
	from users_transaction
    where date(created_at) = '2021-08-30'
    group by user_id) as b
on b.user_id = a.user_id;