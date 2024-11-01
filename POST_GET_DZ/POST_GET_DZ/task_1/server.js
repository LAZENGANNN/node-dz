// создайте простое чат—приложение с следующупм endpoint :
// •
// •
// •
// МЕТОД С МАРШРУТОМ ВИДА /api/messages -
// получение всех
// сообщений
// МЕТОД С МАРШРУТОМ ВИДА /api/messages/username -
// получение всех сообщений от конкретного автора
// С МАРШРУТОМ ВИДА /api/messages
// — отправка нового
// сообщения от заданного пользователя

//!!! чтобы получить пост по отправителю, надо вручную вписать имя в строку !!!
// тоже самое с пагинацией ?limit=

const http = require("http");
const { mainRouter: router } = require("./routers/requestsRouter.js");

const server = http.createServer(router);

const port = 3001;
server.listen(port, function () {
  console.log(`start http://127.0.0.1:${port}`);
});
