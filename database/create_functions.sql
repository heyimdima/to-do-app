-- Function to create a todo, takes in 3 parameters and return an array containing the created todo

CREATE OR REPLACE FUNCTION create_todo(

    content todos.content%type,

    completed todos.completed%type

) RETURNS SETOF todos as $$


DECLARE

todo_id todos.id%type;


BEGIN

INSERT INTO todos (content, completed)

VALUES (content, completed)

RETURNING id INTO todo_id;

RETURN QUERY

SELECT *

FROM todos

WHERE todos.id = todo_id;

END;


$$ LANGUAGE 'plpgsql';