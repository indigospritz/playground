SELECT * FROM test.xy;

-- modify table, add column
alter table xy add column temp_row TINYINT UNSIGNED;


-- modify table, add column with enum datatype
alter table xy add column temp_enum enum('low', 'medium', 'high');

-- modify table, modify column datatype
alter table xy modify column temp_row bit;

update xy set temp_row = 1 where x = 20 and y = 20;

update xy set temp_enum = 'medium' where x = 23 and y = 22;


explain xy;
	
-- bool datatype is like tinyint(1). u can insert unsigned int ranging from 0 to 255
-- bit datatype only allows 0 and 1 or true and false



