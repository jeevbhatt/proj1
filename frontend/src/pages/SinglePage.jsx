import axios from "axios";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SinglePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({});
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/api/books/" + id);
    setBook(response.data.datas);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBook = async () => {
    const response = await axios.delete(
      "http://localhost:3000/api/books/" + id
    );
    if (response.status === 200) {
      navigate("/");
    } else {
      console.log("Something went wrong");
    }
  };
  return (
    <>
      <Navbar />
      <h1>{book.bookName}</h1>
      <p>{book.bookAuthor}</p>
      <h1>{book.bookPrice}</h1>
      <p>{book.bookGenre}</p>
      <Button onClick={deleteBook}>Delete</Button>
    </>
  );
}

export default SinglePage;
