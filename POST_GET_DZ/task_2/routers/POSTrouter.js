const url = require("url");
const { createTask, editTask } = require("../controllers/todoController.js");


function POSTrouter(request, response) {
  const parsedURL = url.parse(request.url, true);
  switch (parsedURL.pathname) {
    case "/api/todos":
      createTask(request, response);
      break;
    case "/api/todos/edit":
      editTask(request, response);
      break;

    default:
      response.end("<h1>ошибка адреса POST запроса</h1>");
      break;
  }
}

module.exports = {
  POSTrouter,
};
