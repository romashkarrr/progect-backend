const db = require('./db');
const Link = require('./model');
const links = require('./links'); 

db.once('open', async () => {
  console.log('Підключено до MongoDB');

  await Link.deleteMany();

  try {
    const insertedLinks = await Link.insertMany(links);
    console.log('Дані успішно додані до бази даних:', insertedLinks);
  } catch (error) {
    console.error('Помилка при вставці даних:', error);
  }

  db.close();
});
