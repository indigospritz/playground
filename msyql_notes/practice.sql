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
WHERE phone IS NULL;


SELECT * FROM orders WHERE shipped_date IS NULL;


SELECT *
FROM customers
ORDER BY state DESC, first_name DESC;


SELECT first_name, last_name, 10 AS points
FROM customers
ORDER BY first_name;



SELECT *, quantity * unit_price AS total_price
FROM order_items
WHERE order_id = 2
ORDER BY total_price DESC;


SELECT * FROM customers;

SELECT *
FROM customers
LIMIT 6, 3;


SELECT *
FROM customers
ORDER BY points DESC
LIMIT 3;


SELECT order_id, o.customer_id, first_name, last_name
FROM  orders o
JOIN customers c
	ON o.customer_id = c.customer_id;
    
    
SELECT
	order_id,
    oi.product_id,
    name,
    quantity,
	oi.unit_price
FROM order_items oi
JOIN products p
	ON oi.product_id = p.product_id;
    
    
SELECT *
FROM order_items oi
JOIN sql_inventory.products p
	ON oi.product_id = p.product_id;
    
    
SELECT *
FROM sql_hr.employees;


USE sql_hr;


--  self join --
SELECT
	e.employee_id,
    e.first_name,
    m.first_name AS manager
FROM employees e
JOIN employees m
	ON e.reports_to = m.employee_id;
    

--  joining multiple tables --
USE sql_store;

SELECT
	o.order_id,
    o.order_date,
    c.first_name,
    c.last_name,
    os.name AS status
FROM orders o
JOIN customers c
	ON o.customer_id = c.customer_id
JOIN order_statuses os
	ON o.status = os.order_status_id
ORDER BY o.order_id;



USE sql_invoicing;

SELECT
	p.date,
    p.invoice_id,
	c.name,
    p.amount,
    pm.name payment_method
FROM clients c
JOIN payments p
	ON c.client_id = p.client_id
JOIN payment_methods pm
	ON p.payment_method = pm.payment_method_id;
    
    
-- compound join conditions --
USE sql_store;

SELECT *
FROM order_items oi
JOIN order_item_notes oin
	ON oi.order_id = oin.order_id
    AND oi.product_id = oin.product_id;
    
    
-- implicit join syntaxt --
-- SELECT *
-- FROM orders o
-- JOIN customers c
-- 	ON o.customer_id = c.customer_id;
    
SELECT *
FROM orders o, customers c
WHERE o.customer_id = c.customer_id;


-- outer join --
SELECT
	c.customer_id,
    c.first_name,
    o.order_id
FROM orders o
LEFT JOIN customers c
	ON c.customer_id = o.customer_id
ORDER BY c.customer_id;


-- outer left join --
SELECT
	p.product_id,
    p.name,
    oi.quantity
FROM products p
LEFT JOIN order_items oi
	ON p.product_id = oi.product_id;


SELECT
	p.product_id,
    p.name,
    oi.quantity
FROM products p
LEFT JOIN order_items oi
	ON p.product_id = oi.product_id;
    
-- avoid using right join if there is a following left join --
SELECT
	c.customer_id,
    c.first_name,
    o.order_id,
    sh.name AS shipper
FROM customers c
LEFT JOIN orders o
	ON c.customer_id = o.customer_id
LEFT JOIN shippers sh
	ON o.shipper_id = sh.shipper_id
ORDER BY c.customer_id;


SELECT
	o.order_id,
    o.order_date,
    c.first_name customer,
    sh.name AS shipper,
    os.name AS status
FROM orders o
JOIN customers c
	ON o.customer_id = c.customer_id
LEFT JOIN shippers sh
	ON o.shipper_id = sh.shipper_id
LEFT JOIN order_statuses os
	ON o.status = os.order_status_id
ORDER BY o.status;


-- SELF OUTER JOINS --
USE sql_hr;

SELECT
	e.employee_id,
	e.first_name,
    m.first_name AS manager
FROM employees e
LEFT JOIN employees m
	ON e.reports_to = m.employee_id;
    
    
-- USING CLAUSE --
USE sql_store;
SELECT
	o.order_id,
    c.first_name,
    sh.name AS shipper
FROM orders o
JOIN customers c
	USING (customer_id)
LEFT JOIN shippers sh
	USING (shipper_id);
    
SELECT *
FROM order_items oi
JOIN order_item_notes oin
	USING (order_id, product_id);
    
    
-- exercise --
USE sql_invoicing;

SELECT
	p.date date,
    c.name client,
    p.amount amount,
    pm.name 'payment method'
FROM payments p
JOIN clients c
	USING (client_id)
LEFT JOIN payment_methods pm
	ON p.payment_method = pm.payment_method_id;
    
    
-- avoid using NATURAL JOINS --
USE sql_store;
SELECT
	o.order_id,
    c.first_name
FROM orders o
NATURAL JOIN customers c;


-- CROSS JOINS (explicit) --

SELECT
	c.first_name customer,
    p.name product
FROM customers c
CROSS JOIN products p;


-- EXERCISE --

SELECT *
FROM   shippers
CROSS JOIN products;

SELECT
	sh.name shipper,
    p.name product
FROM shippers sh, products p
ORDER BY sh.name; 


-- UNION --
 SELECT
	order_id,
    order_date,
    'Active' status
 FROM orders
 WHERE order_date >= '2019-01-01'
 UNION
 SELECT
	order_id,
    order_date,
    'Archive' status
 FROM orders
 WHERE order_date < '2019-01-01';
 
 SELECT first_name
 FROM customers
 UNION SELECT name
 FROM shippers;
 
 -- if points is less than 2000 'Bronze'
 -- if points between 2000 and 3000 'Silver'
 -- if points more than 3000 'Gold'
 -- sort by first_name
 
 SELECT
	customer_id,
    first_name,
    points,
    'Bronze' type
FROM customers
WHERE points < 2000
UNION
SELECT
	customer_id,
    first_name,
    points,
    'Silver' type
FROM customers
WHERE points BETWEEN 2000 AND 3000
UNION
SELECT
	customer_id,
    first_name,
    points,
    'Gold' type
FROM customers
WHERE points > 3000
ORDER BY first_name;


-- COLUMN ATTRIBUTES --

-- INSERT INTO --
INSERT INTO customers (
	first_name,
    last_name,
    birth_date,
    address,
    city,
    state)
VALUES (
    'John', 
    'Smith', 
    '1990-01-01',
    'address',
    'city',
    'CA');


-- INSERTING HIERARCHICAL ROWS --
 INSERT INTO orders (
	customer_id,
    order_date,
    status)
VALUES (
	1,
    '2019-01-02',
    1);

INSERT INTO order_items
VALUES 
	(LAST_INSERT_ID(), 3, 1, 2.95),
    (LAST_INSERT_ID(), 7, 2, 3.95);


-- CREATING A COPY OF A TABLE --
CREATE TABLE orders_archive AS
SELECT * FROM orders;

-- RENAME TABLE NAME
ALTER TABLE orders_archive RENAME orders_archived;

-- INSERT INTO TABLE USING SELECT --
INSERT INTO orders_archived
SELECT *
FROM orders
WHERE order_date < '2019-01-01';


-- EXERCISE --
USE sql_invoicing;

-- create new table invoices_archived
CREATE TABLE invoices_archived AS
SELECT
	i.invoice_id,
    i.number, 
    c.name 'client name',
    i.invoice_total,
    i.payment_total,
    i.invoice_date,
    i.due_date,
    i.payment_date
FROM invoices i
JOIN clients c
USING (client_id)
WHERE i.payment_date IS NOT NULL;


-- UPDATE SINGLE ROW --
UPDATE invoices
SET
	payment_total = invoice_total * 0.5,
	payment_date = due_date
WHERE invoice_id = 3;


-- UPDATING MULTIPLE ROW --
UPDATE invoices
SET
	payment_total = invoice_total * 0.5,
	payment_date = due_date
WHERE client_id = 3;



-- EXERCISE --
USE sql_store;

UPDATE customers
SET
	points = points + 40
WHERE birth_date < '1990-01-01';


-- SUBQUERIES IN UPDATE --
UPDATE invoices
SET
	payment_total = invoice_total * 0.5,
	payment_date = due_date
WHERE client_id IN
		(SELECT client_id
		FROM clients
		WHERE state IN ('CA', 'NY'));
        
        
-- EXERCISE --
USE sql_store;

-- update customers comments with more than 3000 points as Gold customers
UPDATE orders
SET comments = 'Gold customers'
WHERE customer_id IN
	(SELECT customer_id 
    FROM customers
    WHERE points > 3000);


-- DELETING ROW --
DELETE FROM invoices
WHERE client_id = (
	SELECT client_id
	FROM clients
	WHERE name = 'Myworks');
    
