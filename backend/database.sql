CREATE DATABASE renovo;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY ,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  re_password varchar(255)
);
