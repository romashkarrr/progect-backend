var express = require('express');
var router = express.Router();
var db = require('../db')
var Link = require('../model');
var cardsList = require('./cards-list'); // Змінено ім'я імпортованого файлу

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    // Очистіть попередні дані у колекції, якщо потрібно
    await Link.deleteMany();

    // Змінено ім'я з categories на cardsList
    const insertedLinks = await Link.insertMany(cardsList.list);
    console.log('Дані успішно додані до бази даних:', insertedLinks);

    // Тепер ви можете продовжити звичайну логіку вашого маршруту
    res.render('index', { title: 'Express' });
  } catch (error) {
    console.error('Помилка при вставці даних:', error);
    next(error); // Передайте помилку обробнику помилок Express
  } finally {
    // Закрийте підключення після вставки даних
    db.close();
  }
});

module.exports = router;
