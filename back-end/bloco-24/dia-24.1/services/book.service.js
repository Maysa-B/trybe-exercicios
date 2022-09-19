const { Book } = require('../models');

const booksList = async () => {
  const books = await Book.findAll();
  return books;
};

const getByID = async (id) => {
  const books = await Book.findByPk(id);
  return books;
}

const createBook = async (information) => {
  const newBook = await Book.create(information);
  return newBook;
}

const updateBook = async (information, id) => {
  const update = await Book.update(information, { where: { id } });

  return update;
}

const deleteBook = async (id) => {
  const deletes = await Book.destroy({ where: { id } });
  return deletes;
};

module.exports = {
  booksList,
  getByID,
  createBook,
  updateBook,
  deleteBook,
}