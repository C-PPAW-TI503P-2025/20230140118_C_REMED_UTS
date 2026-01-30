const { Book, BorrowLog } = require('../models');

exports.borrowBook = async (req, res) => {
  try {
    const userId = req.headers['x-user-id'];
    const { bookId, latitude, longitude } = req.body;

    if (!userId) {
      return res.status(400).json({ message: 'x-user-id header is required' });
    }

    if (!bookId || latitude == null || longitude == null) {
      return res.status(400).json({
        message: 'bookId, latitude, and longitude are required'
      });
    }

    const book = await Book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    if (book.stock <= 0) {
      return res.status(400).json({ message: 'Book out of stock' });
    }

    // Kurangi stok
    book.stock -= 1;
    await book.save();

    // Catat peminjaman
    const log = await BorrowLog.create({
      userId,
      bookId,
      latitude,
      longitude
    });

    res.status(201).json({
      message: 'Book borrowed successfully',
      data: log
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
