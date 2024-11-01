const url = require("url");
const { sendMes } = require("../controllers/messController.js");

function POSTrouter(request, response) {
  const parsedURL = url.parse(request.url, true);
  switch (parsedURL.pathname) {
    case "/api/messages":
      sendMes(request, response);
      break;

    default:
      response.end("<h1>ошибка адреса POST запроса</h1>");
      break;
  }
}

module.exports = {
  POSTrouter,
};
