CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email varchar(255),
    password varchar(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);