const { Book } = require('../models');

// GET /api/books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/books/:id
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/books (admin)
exports.createBook = async (req, res) => {
  try {
    const { title, author, stock } = req.body;

    if (!title || !author) {
      return res.status(400).json({
        message: 'Title and author are required'
      });
    }

    const book = await Book.create({ title, author, stock });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/books/:id (admin)
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    await book.update(req.body);
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /api/books/:id (admin)
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    await book.destroy();
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
