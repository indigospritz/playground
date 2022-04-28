describe users_transaction;

select table_name, column_name, data_type from information_schema.columns where table_schema = 'custom_sports' and data_type = 'enum' and column_name = '';

describe setting_rpg;

