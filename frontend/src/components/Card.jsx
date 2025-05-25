import { Link } from "react-router-dom";

function Card({ book }) {
  return (
    <div className="flex px-3 py-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Link to={`/books/${book.id}`}>
          <img
            className="w-full"
            src="https://plus.unsplash.com/premium_photo-1681399975135-252eab5fd2db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">
              {book.bookName}
            </div>
            <p className="text-white text-base">Author: {book.bookAuthor}</p>
            <p className="text-white text-base">Price: {book.bookPrice}</p>
            <p className="text-white text-base">Genre: {book.bookGenre}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Card;
