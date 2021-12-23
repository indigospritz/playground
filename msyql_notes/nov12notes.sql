SELECT * FROM users_transaction;

-- SELECT
-- user_id,
-- amount
-- FROM users_transaction

SELECT * FROM users_transaction WHERE id IN (SELECT  MAX(id) FROM users_transaction WHERE type_id = 5 GROUP BY user_id ORDER BY user_id);
-- = 1 AND amount = 5000 ORDER BY updated_at LIMIT 1;

SELECT * FROM users_transaction WHERE id IN (SELECT MAX(id) FROM users_transaction GROUP BY user_id);

SELECT user_id FROM users_transaction WHERE type_id = 5 GROUP BY user_id ORDER BY user_id;

-- 7 11
SELECT user_id, amount FROM users_transaction WHERE id IN (SELECT MAX(id) FROM users_transaction GROUP BY user_id);

-- problem 1
SELECT user_id, amount FROM users_transaction WHERE id IN (SELECT MAX(id) FROM users_transaction WHERE type_id = 5 GROUP BY user_id) ORDER BY user_id;

 -- problem 2
 SELECT AVG(amount) avg_amount FROM users_transaction;
 SELECT SUM(amount) sum_amount FROM users_transaction;
 SELECT AVG(amount), SUM(AMOUNT) FROM users_transaction WHERE created_at in (SELECT DISTINCT created_at FROM users_transaction);
 
 WITH temp_date as (
	SELECT  
		date(created_at) AS created_at,
        SUM(amount) AS toSum,
        AVG(amount) AS toAvg
        FROM users_transaction
        GROUP BY created_at
 )
SELECT DISTINCT created_at, SUM(toSum) OVER(PARTITION BY date(created_at)), AVG(toAvg) OVER(PARTITION BY date(created_at))
FROM temp_date;

-- problem 2 USING PARTITION BY
SELECT DISTINCT
	date(created_at),
    SUM(amount) OVER(PARTITION BY date(created_at)),
    AVG(amount) OVER(PARTITION BY date(created_at))
FROM users_transaction;

-- problem 2 USING ORDER BY
SELECT DISTINCT
	date(created_at),
    SUM(amount) OVER(ORDER BY date(created_at)),
    AVG(amount) OVER(ORDER BY date(created_at))
FROM users_transaction;

SELECT
  DATE(created_at),
  SUM(amount),
  AVG(amount)
FROM
  users_transaction
GROUP BY DATE(created_at)
ORDER BY DATE(created_at);


-- truncate --
-- remove trailing zeros from floating number --
SELECT 
	(SELECT id FROM users_transaction group by id limit 1),
	date(created_at),
	TRUNCATE(SUM(amount),0),
    TRUNCATE(AVG(amount),0)
FROM users_transaction
WHERE type_id IN 
	(SELECT type_id FROM users_transaction
		WHERE type_id > 7)
GROUP BY date(created_at);
 


