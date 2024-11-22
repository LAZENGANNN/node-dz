const url = require("url");
const { createUser, authorisation, editUsers } = require("../controllers/usersController");

const formidable = require("formidable")

let form = new formidable.IncomingForm({
  keepExtensions: true,
  uploadDir: "./img"
});

function POSTrouter(request, response) {
  const parsedURL = url.parse(request.url, true);
  switch (parsedURL.pathname) {
    case "/api/users/create":
        createUser(request, response, form)
      break;

      case "/api/users/auth":
        authorisation(request, response, form)
        break;

        case "/api/users/edit":
          editUsers(request, response, form)
          break;
    default:
      response.end("<h1>ошибка адреса POST запроса</h1>");
      break;
  }
}

module.exports = {
  POSTrouter,
};
