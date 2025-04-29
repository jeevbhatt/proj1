const express = require("express");
const app = express();
const port = 3000;
require("./database/connection.js");
//
app.get("/books", function (req, res) {
  res.json({ message: "List of books acquired from the database" });
});

app.post("/books", function (req, res) {
  res.json({ message: "Book added to the database" });
});

app.delete("/books/:id", function (req, res) {
  res.json({
    message: "Book deleted from the database",
  });
});

app.patch("/books/:id", function (req, res) {
  res.json({ message: "Book updated in the database" });
});
//
app.listen(3000, function () {
  console.log(`Server is running on http://localhost:${port}/`);
});
