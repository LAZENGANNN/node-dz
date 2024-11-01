// Задание 4: простой блог
// создайте простое блог-приложение с следующупм endpoint :

// GET С МАРШРУТОМ ВИДА /api/posts -
// получение списка
// всех постов
// GET С МАРШРУТОМ ВИДА /api/posts/123 -
// получе ние
// информации об отдельном посте по его id
// POST С MAPШРУТОМ ВИДА /api/posts -
// создание нового
// поста

//!!! чтобы получить пост по id, надо вручную вписать id в строку !!!

const http = require("http");
const { mainRouter: router } = require("./routers/requestsRouter.js");

const server = http.createServer(router);

const port = 3004;
server.listen(port, function () {
  console.log(`start http://127.0.0.1:${port}`);
});
