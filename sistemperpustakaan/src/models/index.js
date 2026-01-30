const sequelize = require('../config/database');

const Book = require('./Book');
const BorrowLog = require('./Borrowlog');

// Relasi
Book.hasMany(BorrowLog, { foreignKey: 'bookId' });
BorrowLog.belongsTo(Book, { foreignKey: 'bookId' });

const db = {};
db.sequelize = sequelize;
db.Book = Book;
db.BorrowLog = BorrowLog;

module.exports = db;
