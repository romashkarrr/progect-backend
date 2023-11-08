const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  dbName: 'sample_airbnb', // Вкажіть назву вашої бази даних тут
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Помилка підключення до MongoDB:', err);
});

db.once('open', () => {
  console.log('Підключено до MongoDB');
});

module.exports = db;
