// books, bookName, bookAuthor, bookPrice, bookGenre
const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Unknown",
    },
    bookPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    bookGenre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Book;
};

module.exports = bookModel;
