import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card";

function SinglePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({});
  const fetchBooks = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/books/" + id,
      book
    );
    setBook(response.data.datas);
  };
  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line
  }, []);

  const deleteBook = async () => {
    const response = await axios.delete(
      "http://localhost:3000/api/books/" + id
    );
    if (response.status === 200) {
      alert("Book deleted successfully") && navigate("/");
    } else {
      console.log("Something went wrong");
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-screen">
        <Card book={book} />
        <div className="flex flex-row gap-4 mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={deleteBook}
          >
            Delete
          </button>
          <Link
            to={`/books/${id}/edit`}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit
          </Link>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
}

export default SinglePage;
