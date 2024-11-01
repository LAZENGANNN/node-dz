const url = require("url");
const { calcText: calcText } = require("../controllers/calcController.js");
const { calcJson: calcJson } = require("../controllers/calcController.js");

function POSTrouter(request, response) {
  const parsedURL = url.parse(request.url, true);
  switch (parsedURL.pathname) {
    case "/api/calcText":
      calcText(request, response);
      break;

    case "/api/calcJson":
      calcJson(request, response);
      break;

    default:
      response.end("<h1>ошибка адреса POST запроса</h1>");
      break;
  }
}

module.exports = {
  POSTrouter,
};
