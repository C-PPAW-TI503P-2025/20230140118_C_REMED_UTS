require('dotenv').config();
const express = require('express');
const app = express();

// Database & Models
const db = require('./src/models');

// Routes
const bookRoutes = require('./src/routes/BookRoutes');
const borrowRoutes = require('./src/routes/BorrowRoutes');

// Middleware global
app.use(express.json());

// Test endpoint
app.get('/', (req, res) => {
  res.send('Library API Running');
});

// API Routes
app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);

// Database connection + server start
(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Database connected');

    await db.sequelize.sync();
    console.log('Database synced');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
})();
