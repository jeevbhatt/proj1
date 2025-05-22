import { Link } from "react-router-dom";

function Card(book) {
  return (
    <>
      <Link to={"/single-page"}>
        <div className="flex px-3 py-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://plus.unsplash.com/premium_photo-1681399975135-252eab5fd2db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                {book.bookName}
              </div>
              <p className="text-white text-base">
                Technology connects the world in ways once unimaginable. It
                empowers innovation, simplifies life, and drives progress. From
                smart devices to AI, it's reshaping our future every day.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {book.bookAuthor}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
export default Card;
