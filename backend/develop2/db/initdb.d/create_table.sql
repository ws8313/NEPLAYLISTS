CREATE TABLE user (
    id     INT          NOT NULL AUTO_INCREMENT,
    email  VARCHAR(25)  NOT NULL UNIQUE,
    PRIMARY KEY (id)
);