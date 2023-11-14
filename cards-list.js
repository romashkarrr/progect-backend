const list = [
    {
      title: "Дубаї, ОАЕ",
      imgSrc: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-721540609203378406/original/9dfaf7d6-40f2-4673-b468-7c5ab3147f86.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-721540609203378406/original/cc2a2d85-d879-465c-9154-0574629527cd.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-721540609203378406/original/b774c2ea-f956-49c7-8ad4-3b744c6b9cfb.jpeg?im_w=720",
      ],
      rating: "4,89",
      category: "0",
      desc: "На відстані 3836 кілометра",
      price: "224",
      data: "11-16 груд.",
    },
    
  ];

module.exports = { list };

// cards-list.js
// cards-list.js
const List = require('./ListModel'); // Шлях до вашого файлу з моделлю
const { list: cardsListData } = require('./cards-list'); // Дані з вашого файлу cards-list.js

cardsListData.forEach(cardData => {
  const newList = new List(cardData);
  newList.save()
    .then(savedList => {
      console.log('Об\'єкт збережено:', savedList);
    })
    .catch(error => {
      console.error('Помилка при збереженні об\'єкта:', error);
    });
});
