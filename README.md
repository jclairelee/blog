# FOOD & LIVING

> A simple blog web sharing tips and ideas for variety topics.

## Table of Contentsa

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

- Currently in Sprint 1
- There are 3 tables - "comments", "posts", and "users" - in mySQL data.

  > > > table 1. comments

- commentId(primary key), text, userID(foreign key), post ID(foreign key), createdAt, and updatedAt.

* updatedAt is for sprint 2

  > > > table 2. posts

- postId(primary key), title, content, imgURL, category, date, and userID(foreign key)

* updatedAt is for sprint 2

  > > > table 3. Users

- userId(primary key), username, email, password, and image

## Technologies Used

- Sass, moment, dompurify, @mui/icons, axios, and etc.
- [Backend](https://github.com/jclairelee/Blog-api): mySQL, express, jsonwebtoken, bcrypt, cookie-parser, cors, multer, and etc.

## Features

- Register
- Log in / Log Out
- Login credentials are stored in Local Storage
- Postings - CRUD
- Comments - Create, Read, Delete
- image uploads

## Screenshots

![ScreenShot](./public/foodandliving.jpg)

## Setup

1. In your terminal, Add >>> git clone git@github.com:jclairelee/Blog.git
2. install NPM >> 'npm i' && 'npm i dompurify moment react-quill react-router-dom sass axios @mui/material @emotion/react @emotion/styled'
3. In client folder, type 'npm start'
4. Download server >>> git clone git@github.com:jclairelee/Blog-api.git
5. Install necessary dependencies >> 'npm i express cors dotenv cookie-parser multer jsonwebtoken mysql bcrypt'
6. In the server directory, >> 'node index.js'

## Usage

- This can be modified as a personal blog or recipe sharing website.

## Project Status

Project is:
Sprint 1 _complete_ /
Sprint 2 _hasnt been started yet_.

## Room for Improvement

Room for improvement:

- Upgrade UI Design
- Add edit button on comments
- Add nested comments

To do:

- Add "edit" button on comments

## Acknowledgements

- [Understanding File Uploads in Node,js](https://youtu.be/EVOFt8Its6I).

## Contact

jclairelee2@gmail.com
