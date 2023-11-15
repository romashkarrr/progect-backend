// insertData.js
const db = require('./db'); // Ваш db.js
const Listing = require('./Listing'); // Ваш Listing.js

const list = [
  // Ваш масив даних
];

async function insertData() {
  try {
    await Listing.insertMany(list);
    console.log('Дані успішно вставлені в базу даних.');
  } catch (error) {
    console.error('Помилка вставки даних:', error);
  } finally {
    db.close();
  }
}

insertData();
