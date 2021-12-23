select 
	email,
    plan,
    expired_date,
    datediff(expired_date, '2017-07-06') as remaining_days
from memberships
where '2017--07-06' between date_sub(expired_date, interval 7 day) and expired_date;

alter table xy alter column temp_enum set default 'low';

insert into xy values(11, 13, 0, default);

select * from xy;

-- constraints
/*
	not null
    unique
    primary key
    foreign key
    check
    default
    create index
*/
