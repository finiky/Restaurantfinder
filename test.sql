--for help \?--
--to list databases \l --
--to create database CREATE DATABASE databaseName; --
-- \c databaseName  to connect to a specific database--
-- \d to list all tables in a database --
-- \d TABLE_NAME to list information of a specific table --
-- CREATE TABLE tableName (columnName dataType); --
-- ALTER TABLE tableName ADD COLUMN columnName datatype;--
-- ALTER TABLE tableName DROP COLUMN columnName dataType --

-- DROP TABLE tableName --

-- INSERT INTO tableName (colName, colName) VALUES (val, val)---- SELECT * FROM restaurants --

-- CREATE TABLE restaurants (
--     id BIGSERIAL NOT NULL PRIMARY KEY,
--     name VARCHAR(50) NOT NULL,
--     location VARCHAR(50) NOT NULL,
--     price_range INT NOT NULL CHECK(price_range >=1 and price_range <=5)
-- );

-- UPDATE restaurants SET name = 'Red Tang', location = 'Miami', price_range = '3' WHERE id = 1;--

-- DELETE from restaurants WHERE id = some_id;--