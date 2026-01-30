const express = require('express');
const router = express.Router();

const borrowController = require('../controller/BorrowController');
const checkRole = require('../middleware/RoleMiddleware');

router.post('/', checkRole('user'), borrowController.borrowBook);

module.exports = router;

