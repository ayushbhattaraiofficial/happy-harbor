-- These commands to create database and setup the tables are only for postgres
-- Changes need to be made if any other distribution is used.
CREATE DATABASE IF NOT EXISTS `happy-harbor`;
USE `happy-harbor`;
CREATE SCHEMA social;

CREATE TABLE social.users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password VARCHAR(200) NOT NULL,
    name VARCHAR(45) NOT NULL,
    coverPic VARCHAR(200),
    profilePic VARCHAR(200),
    city VARCHAR(45),
    website VARCHAR(100)
);

CREATE TABLE social.posts (
    id SERIAL PRIMARY KEY,
    "desc" VARCHAR(200),
    image VARCHAR(200),
    userId INT NOT NULL,
    createdAt TIMESTAMP WITHOUT TIME ZONE,
    FOREIGN KEY (userId) 
        REFERENCES social.users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

CREATE TABLE social.comments (
    id SERIAL PRIMARY KEY,
    "desc" VARCHAR(200),
    createdAt TIMESTAMP WITHOUT TIME ZONE,
    userId INT NOT NULL,
    postId INT NOT NULL,
    FOREIGN KEY (userId) 
        REFERENCES social.users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    FOREIGN KEY (postId) 
        REFERENCES social.posts(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

CREATE TABLE social.stories (
    id SERIAL PRIMARY KEY,
    img VARCHAR(200) NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) 
        REFERENCES social.users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

CREATE TABLE social.relationships (
    id SERIAL PRIMARY KEY,
    followerUserId INT NOT NULL,
    followedUserId INT NOT NULL,
    FOREIGN KEY (followerUserId) 
        REFERENCES social.users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    FOREIGN KEY (followedUserId)
        REFERENCES social.users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

CREATE TABLE social.likes (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    postId INT NOT NULL,
    FOREIGN KEY (userId) 
        REFERENCES social.users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    FOREIGN KEY (postId) 
        REFERENCES social.posts(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);