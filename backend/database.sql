CREATE DATABASE renovo;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY ,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  re_password varchar(255)
);




INSERT INTO users (user_name, user_email, user_password) VALUES ('henry', 'henryly213@gmail.com', 'kthl8822');