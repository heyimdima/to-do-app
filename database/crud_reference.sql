-- CRUD OPERATIONS WITH SQL

-- CREATE
INSERT INTO todos (id, content, completed) VALUES (656754, 'Test of the database todo 2', FALSE);

-- READ
SELECT * FROM todos; -- Display all of the todos

-- UPDATE
UPDATE todos SET completed = TRUE WHERE id='656754'; -- Update the todo with specific identifier

-- DELETE
DELETE FROM todos WHERE id='656754'; --Delete a todo with specific identifier