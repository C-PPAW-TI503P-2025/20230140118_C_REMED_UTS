const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Borrowlog = sequelize.define('Borrowlog', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  borrowDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Borrowlog;
