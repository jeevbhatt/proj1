import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({});
  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3000/api/books/" + id);
    setBookData(response.data.datas); // response.data.hello
  };

  // Fetch book details and pre-fill the form
  useEffect(() => {
    fetchBook();
  }, []);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const editBook = async (e) => {
    e.preventDefault();
    const response = await axios.patch(
      "http://localhost:3000/api/books/" + id,
      bookData
    );
    if (response.status === 200) {
      console.log("Successfully edited book");
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white border-4 rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Edit Book</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <form onSubmit={editBook}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="bookName"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Name
                </label>
                <input
                  onChange={handleChange}
                  value={bookData.bookName}
                  type="text"
                  name="bookName"
                  id="bookName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Book Name"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="bookAuthor"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Author
                </label>
                <input
                  onChange={handleChange}
                  value={bookData.bookAuthor}
                  type="text"
                  name="bookAuthor"
                  id="bookAuthor"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Book Author"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="bookPrice"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Price
                </label>
                <input
                  onChange={handleChange}
                  value={bookData.bookPrice}
                  type="text"
                  name="bookPrice"
                  id="bookPrice"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Book Price"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="bookGenre"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Genre
                </label>
                <input
                  onChange={handleChange}
                  value={bookData.bookGenre}
                  type="text"
                  name="bookGenre"
                  id="bookGenre"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Book Genre"
                  required
                />
              </div>
            </div>
            <button
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Edit Book
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Back to Home
            </button>
          </form>
        </div>
        <div className="p-6 border-t border-gray-200 rounded-b"></div>
      </div>
    </>
  );
}

export default EditPage;
