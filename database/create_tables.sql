DROP TABLE IF EXISTS todos CASCADE;

CREATE TABLE todos (
    id bigserial PRIMARY KEY,
    content VARCHAR (255) NOT NULL
    completed BOOLEAN 
);
