import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/books/", {
        title,
        image,
        description,
      });
      setMessage("Book created successfully!");
      setTitle("");
      setImage("");
      setDescription("");
    } catch (error) {
      setMessage("Error creating book.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="text-white max-w-md mx-auto mt-10 bg-gray-800 p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Create Book</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="p-2 rounded text-black"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            className="p-2 rounded text-black"
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <textarea
            className="p-2 rounded text-black"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Create
          </button>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </>
  );
}

export default CreatePage;
