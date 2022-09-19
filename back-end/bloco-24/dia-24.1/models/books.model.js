const booksModel = (sequelize, DataTypes) => {
  const bookModel = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  return bookModel;
}

module.exports = booksModel;