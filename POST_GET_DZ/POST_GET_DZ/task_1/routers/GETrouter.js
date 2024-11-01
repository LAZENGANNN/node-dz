const url = require("url");
const { filesController } = require("../controllers/filesController.js");
const { mesController } = require("../controllers/messController.js");

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
    case "/api/messages":
      mesController(request, response);
      break;
    case "/creatorPage":
      response.writeHead(302, {
        Location: "/creatorPage.html",
      });
      response.end();
      break;
    default:
      if (parsedURL.pathname.includes("/api/messages/")) {
        let author = parsedURL.pathname.slice(14);
        mesController(request, response, author);
        break;
      }
      filesController(request, response, parsedURL);
  }
}

module.exports = {
  GETrouter,
};
