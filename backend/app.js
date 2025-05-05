const express = require("express");
const bookRoute = require("./routes/bookRoute");

const app = express();
require("./database/connection");
const port = 3000;
app.use(express.json());

app.use("/api/books/", bookRoute); //bookRoute ko lagi//"/api/books" yesto vaye localhost:3000/api/books
app.listen(3000, function () {
  console.log(`Server is running on http://localhost:${port}/api/books`);
});
