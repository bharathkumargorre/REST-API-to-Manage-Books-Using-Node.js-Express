# Book-Management-REST-API

# 📚 Book Management REST API

A RESTful API built with **Node.js** and **Express.js** that performs CRUD (Create, Read, Update, Delete) operations on a collection of books. The application stores data in memory and demonstrates the fundamentals of REST API development, Express routing, HTTP methods, and JSON handling.

## 🚀 Project Overview

This project was developed as part of a Web Development Internship task to understand and implement REST API concepts using Express.js.

The API allows users to:

* Retrieve all books
* Add new books
* Update existing books
* Delete books
* Handle JSON requests and responses

## 🛠️ Technologies Used

* Node.js
* Express.js
* JavaScript (ES6)
* Postman

## 📂 Project Structure

```text
book-api/
│
├── screenshots/
│   ├── get-request.png
│   ├── post-request.png
│   ├── put-request.png
│   ├── delete-request.png
│   └── server-running.png
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## 📌 API Endpoints

| Method | Endpoint   | Description         |
| ------ | ---------- | ------------------- |
| GET    | /books     | Retrieve all books  |
| POST   | /books     | Add a new book      |
| PUT    | /books/:id | Update a book by ID |
| DELETE | /books/:id | Delete a book by ID |

### Sample POST Request

```json
{
  "title": "JavaScript Basics",
  "author": "Bharath"
}
```

### Sample Response

```json
{
  "id": 3,
  "title": "JavaScript Basics",
  "author": "Bharath"
}
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project Directory
```bash
cd book-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server
```bash
node server.js
```

The server will run on:

```text
http://localhost:3000
```

## 🧪 API Testing
All endpoints were tested using Postman.

### Tested Operations
* GET Request
* POST Request
* PUT Request
* DELETE Request
Testing screenshots are available in the `screenshots` directory.

## 🎯 Key Concepts Demonstrated
* REST API Development
* Express.js Routing
* HTTP Methods
* CRUD Operations
* JSON Data Handling
* Request and Response Management
* API Testing with Postman

## 📈 Learning Outcomes
Through this project, I gained practical experience in:
* Building RESTful APIs using Express.js
* Working with HTTP methods and status codes
* Handling client requests and server responses
* Managing application data without a database
* Testing APIs using Postman

## 👨‍💻 Author
G.Bharath Kumar
