USE sql_store;

SELECT *
FROM customers
ORDER BY customer_id;

SELECT
	last_name,
    first_name,
    points,
    (points + 10) * 100 AS 'discount factor'
FROM customers;

SELECT DISTINCT state
FROM customers;

SELECT name, unit_price, (unit_price * 1.1) AS 'new price' FROM products;

SELECT * FROM customers WHERE points > 3000;

SELECT * FROM customers
WHERE birth_date > '1990-01-01';

SELECT * FROM orders
WHERE order_date >= '2019-01-01'
ORDER BY order_date;

SELECT * FROM customers
WHERE NOT (birth_date > '1990-01-01' OR 
	points > 1000);
    
-- the query below is a representation of the query above
-- and is more readable

SELECT * FROM customers
WHERE birth_date <= '1990-01-01' AND 
	points <= 1000;
    
SELECT * FROM order_items
WHERE order_id = 6 AND
(quantity * unit_price) > 30;


SELECT *
FROM customers
WHERE state NOT IN ('VA', 'FL', 'GA');

SELECT *
FROM products
WHERE quantity_in_stock IN (49, 38, 72);

SELECT *
FROM customers
WHERE points BETWEEN 1000 AND 3000;


SELECT *
FROM customers
WHERE birth_date BETWEEN '1990-01-01' AND '2000-01-01';


SELECT *
FROM customers
WHERE last_name LIKE 'b____y';
-- % any number of characters
-- _single character


SELECT *
FROM customers
WHERE address LIKE '%trail%' OR 
	  address LIKE '%avenue%';

SELECT *
FROM customers
WHERE phone NOT LIKE '%9';

    
SELECT *
FROM customers
-- WHERE last_name LIKE '%field%';
WHERE last_name REGEXP 'field$|mac|rose';


SELECT *
FROM customers
WHERE last_name REGEXP '[a-h]e';

-- ecercise 1
SELECT *
FROM customers
WHERE first_name REGEXP 'ELKA|AMBUR';

-- ecercise 2
SELECT *
FROM customers
WHERE last_name REGEXP 'EY$|ON$';

-- ecercise 3
SELECT *
FROM customers
WHERE last_name REGEXP '^MY|SE';

-- ecercise 4
SELECT *
FROM customers
WHERE last_name REGEXP 'B[RU]';


SELECT *
FROM customers
WHERE phone IS NOT NULL;
