import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/api/books/"); //call api
    setBooks(response.data.datas); // store coming response data in books
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center h-screen">
        {books.map(function (book) {
          return <Card book={book} key={book.id} />;
        })}
      </div>
    </>
  );
}

export default HomePage;
