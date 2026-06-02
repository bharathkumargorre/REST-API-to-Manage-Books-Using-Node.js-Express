const express = require("express");
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: "Python Basics", author: "John" },
  { id: 2, title: "Node.js Guide", author: "David" }
];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// POST new book
app.post("/books", (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };

  books.push(book);
  res.status(201).json(book);
});

// PUT update book
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;

  res.json(book);
});

// DELETE book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  books = books.filter(b => b.id !== id);

  res.json({ message: "Book deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});