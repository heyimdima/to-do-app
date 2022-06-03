DROP TABLE IF EXISTS todos CASCADE;

CREATE TABLE todos (

    id bigserial PRIMARY KEY,

    content VARCHAR (70) NOT NULL,

    completed BOOLEAN NOT NULL
);
