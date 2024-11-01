// разработайте приложение для управления списком задач с endpoint :
// •
// •
// •
// МЕТОД С МАРШРУТОМ ВИДА /api/todos -
// получение всех
// задач
// С МАРШРУТОМ ВИДА /api/todos -
// создание новой
// задачи
// С МАРШРУТОМ ВИДА /api/todos/edit
// обновление
// задачи по ID
// С МАРШРУТОМ ВИДА /api/todos/de1ete - удаление
// задачи по ID

const http = require("http");
const { mainRouter: router } = require("./routers/requestsRouter.js");

const server = http.createServer(router);

const port = 3002;
server.listen(port, function () {
  console.log(`start http://127.0.0.1:${port}`);
});
