const express = require("express");
const bookRoute = require("./routes/bookRoute");
const cors = require("cors");
const app = express();
require("./database/connection");
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
console.log("cors is working"); // cors ko lagi
app.use(express.json());

app.use("/api/books", bookRoute); //bookRoute ko lagi//"/api/books" yesto vaye localhost:3000/api/books
app.listen(3000, function () {
  console.log(`Server is running on http://localhost:${port}/api/books`);
});
