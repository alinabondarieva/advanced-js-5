// Створити сторінку, яка імітує стрічку новин соціальної мережі Twitter.

// Технічні вимоги:
// При відкритті сторінки необхідно отримати з сервера список всіх користувачів та загальний список публікацій. 
//Для цього потрібно надіслати GET запит на наступні дві адреси:
// https://ajax.test-danit.com/api/json/users
// https://ajax.test-danit.com/api/json/posts

// Після завантаження всіх користувачів та їх публікацій необхідно відобразити всі публікації на сторінці.
// Кожна публікація має бути відображена у вигляді картки (приклад: https://prnt.sc/q2em0x), та включати заголовок, текст, а також ім'я, прізвище та імейл користувача, який її розмістив.
// На кожній картці повинна бути іконка або кнопка, яка дозволить видалити цю картку зі сторінки. При натисканні на неї необхідно 
//надіслати DELETE запит на адресу https://ajax.test-danit.com/api/json/posts/${postId}. Після отримання підтвердження із сервера (запит пройшов успішно), 
//картку можна видалити зі сторінки, використовуючи JavaScript.
// Більш детальну інформацію щодо використання кожного з цих зазначених вище API можна знайти тут.
// Цей сервер є тестовим. Після перезавантаження сторінки всі зміни, які надсилалися на сервер, не будуть там збережені. Це нормально, все так і має працювати.
// Картки обов'язково мають бути реалізовані у вигляді ES6 класів. Для цього необхідно створити клас Card. При необхідності ви можете додавати також інші класи.

import api from "./API.js"
import users from "./Users.js" 
import posts from "./Posts.js"
try{
    api.getData("https://ajax.test-danit.com/api/json/users")
    .then(data => users.render(data))
} catch(error){
    console.log(error)
}

try{
    api.getData("https://ajax.test-danit.com/api/json/posts")
    .then(data => posts.render(data))
}catch(error){
    console.log(error)
}