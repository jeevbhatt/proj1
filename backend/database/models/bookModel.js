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
    isDeleted: {
      type: DataTypes.STRING,
      defaultValue: "false",
    },
    isDeletedss: {
      type: DataTypes.STRING,
      defaultValue: "false",
    },
  });
  return Book;
};

module.exports = bookModel;
