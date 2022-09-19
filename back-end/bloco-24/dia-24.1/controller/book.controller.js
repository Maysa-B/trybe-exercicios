const { booksList, getByID, createBook, updateBook, deleteBook } = require('../services/book.service');

const getBooks = async (_req, res) => {
  const list = await booksList();
  res.status(200).json(list);
};

const getBooksById = async (req, res) => {
  const { id } = req.params;

  const book = await getByID(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
};

const createBooks = async (req, res) => {
  const newBook = await createBook(req.body);
  res.status(200).json(newBook);
};

const updateBooks = async (req, res) => {
  const update = await updateBook(req.body, req.params.id);
  res.status(200).json(update);
}

const deleteBooks = async (req, res) => {
  const deletes = await deleteBook(req.params.id);
  res.status(200).json(deletes);
};

module.exports = {
  getBooks,
  getBooksById,
  createBooks,
  updateBooks,
  deleteBooks
}