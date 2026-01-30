const express = require('express');
const router = express.Router();

const bookController = require('../controller/BookController');
const checkRole = require('../middleware/RoleMiddleware');

// Public
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);

// Admin
router.post('/', checkRole('admin'), bookController.createBook);
router.put('/:id', checkRole('admin'), bookController.updateBook);
router.delete('/:id', checkRole('admin'), bookController.deleteBook);

module.exports = router;
