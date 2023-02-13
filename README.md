# FOOD & LIVING

**Food and Living is a mini blog web that shares tips and ideas for veriety topics**

[Demo link](https://www.youtube.com/watch?v=D6kEfUurpT8)

[Frontend](https://github.com/jclairelee/blog) | [Backend](https://github.com/jclairelee/Blog-api/tree/feature-1)

## Screenshots

![ScreenShot](./public/foodandliving.jpg)

## Tech Used

### Frontend:

- Sass
- React Router
- moment
- dompurify
- @mui/icons
- axios

### [Backend:](https://github.com/jclairelee/Blog-api)

- mySQL
- express
- jsonwebtoken
- bcrypt
- cookie-parser
- cors
- multer

## Features

- Register
- Log in / Log Out (Login credentials are stored in Local Storage
- Posts
- Comments
- image uploads

## MYSQL Data

#### table 1. comments

- commentId(primary key)
- text
- userID(foreign key)
- post ID(foreign key)
- createdAt
- updatedAt

#### table 2. posts

- postId(primary key),
- title
- content
- imgURL
- category
- date
- userID(foreign key)

#### table 3. Users

- userId(primary key)
- username
- email
- password
- image

# Installation

### backend

1. Install dependencies:

   ```bash
   $ npm i 
   ```

2. Create a new database in MySQL called `localhost`.

3. Set environment variables:

   Create a file`.env` as below:

   ```shell
   DB_LOCAL_DBNAME= <YOUR DB USERNAME>
   DB_LOCAL_USER= <YOUR USERNAME>
   DB_LOCAL_PASSWORD= <YOUR PASSWORD>
   JWT_SECRET_KEY = <YOUR JWT SECRET KEY>
   PORT=8080
   ```

4. Start the server:
   ```bash
   $ npm start || node index.js
   ```

### frontend

5. Install dependencies:

   Run `npm install` from inside the directory.

   ```bash
      $ npm i
   ```
6. Start the client:
   ```bash
   $ npm start
   ```
