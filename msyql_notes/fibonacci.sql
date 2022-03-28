with recursive fibonacci(m, n)
as
(
	select 0, 1
    union all
    select m + n, m + n + n
    from fibonacci
    where m + n + n <= 1000
)
select * from fibonacci;