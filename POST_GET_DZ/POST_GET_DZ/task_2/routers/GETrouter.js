const url = require("url");
const { filesController } = require("../controllers/filesController.js");
const { todoController } = require("../controllers/todoController.js");

function GETrouter(request, response) {
  const parsedURL = url.parse(request.url, true);
  // console.log(parsedURL.pathname);
  switch (parsedURL.pathname) {
    case "/":
      response.writeHead(302, {
        Location: "/HTML.html",
      });
      response.end();
      break;
    case "/api/todos":
      todoController(request, response);
      break;
    case "/creatorPage":
      response.writeHead(302, {
        Location: "/creatorPage.html",
      });
      response.end();
      break;
      case "/editPage":
      response.writeHead(302, {
        Location: "/editPage.html",
      });
      response.end();
      break;
    default:
      // if (parsedURL.pathname.includes("/api/messages/")) {
      //   let author = parsedURL.pathname.slice(14);
      //   mesController(request, response, author);
      //   break;
      // }
      filesController(request, response, parsedURL);
  }
}

module.exports = {
  GETrouter,
};
