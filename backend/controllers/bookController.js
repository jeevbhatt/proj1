const { books } = require("../database/connection");

exports.fetchBooks = async function (req, res) {
  const datas = await books.findAll();
  res.json({
    message: "Books acquired from the database",
    datas,
  });
};

exports.addBook = async function (req, res) {
  console.log(req.body);
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body; //destructuring ko lagi
  await books.create({
    bookName: bookName,
    bookPrice: bookPrice,
    bookAuthor: bookAuthor || "Unknown",
    bookGenre: bookGenre,
  }); //database ma data insert garna ko lagi
  res.json({ message: "Book added to the database" });
};
/*const bookName = req.body.bookName; //request bata aayeko data ko lagi
  const bookPrice = req.body.bookPrice; //request bata aayeko data ko lagi
  const bookAuthor = req.body.bookAuthor; //request bata aayeko data ko lagi
  alternative method
  */

exports.deleteBook = async function (req, res) {
  const id = req.params.id; //request bata aayeko data ko lagi
  await books.destroy({
    where: {
      id: id,
    },
  }); //database bata data delete garna ko lagi
  res.json({ message: "Book deleted from the database" });
};

exports.editBook = async function (req, res) {
  const id = req.params.id; //request bata aayeko data ko lagi
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body; //destructuring ko lagi
  await books.update(
    {
      bookName: bookName,
      bookPrice: bookPrice,
      bookAuthor: bookAuthor,
      bookGenre: bookGenre,
    },
    {
      where: {
        id: id,
      },
    }
  ); //database bata data update garna ko lagi
  res.json({ message: "Book updated in the database" });
};

exports.singleFetchBook = async function (req, res) {
  const id = req.params.id; //request bata aayeko data ko lagi
  const datas = await books.findByPk(id); //database bata data fetch garna ko lagi
  // books.findAll({
  //     where : {
  //         bookName : "hello world",
  //         authorName : "manish"
  //     }
  // })
  // }) // select * from books where bookName="hello world" && authorName = "manish"
  // const datass = await books.findAll({
  //     where : {
  //         id : id
  //     }
  // }) // always returns array
  res.json({ message: "Single book fetched from the database", datas });
};
// module.exports = {fetchBooks,addBook,deleteBook,editBook} yesari pani milxa hai garna chai
