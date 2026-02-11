# Blog API (Node.js + Express + MongoDB)

A RESTful Blog API built using Node.js, Express, and MongoDB.

## Features
- Create Blog
- Get All Blogs
- Update Blog
- Delete Blog
- MongoDB Atlas Integration

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repo
2. Run `npm install`
3. Create a `.env` file and add:
   MONGO_URI=your_mongodb_connection_string
4. Run `npm start`

## API Endpoints
GET /api/blogs  
POST /api/blogs/add  
PUT /api/blogs/:id  
DELETE /api/blogs/:id
