USE sql_store;

DELIMITER $$

CREATE TRIGGER demo_trigger BEFORE INSERT ON customers
FOR EACH ROW BEGIN 
DECLARE errorMessage VARCHAR(255);
SET errorMessage = 'INSERT IS NOT ALLOWED, APPROVAL REQUIRED';
IF (NEW.customer_id > last_insert_id())
THEN
SIGNAL SQLSTATE '45000'
	SET MESSAGE_TEXT = errorMessage;
END IF;
END $$









