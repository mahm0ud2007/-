CREATE DATABASE Thawab;

USE Thawab;

CREATE TABLE Ad3ya (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(50),
    content TEXT
);

INSERT INTO Ad3ya (category, content)
VALUES ('دعاء للمذاكرة', 'اللهم افتح لي أبواب حكمتك، وانشر عليّ رحمتك');

SELECT * FROM Ad3ya;