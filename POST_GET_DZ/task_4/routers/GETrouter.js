const url = require("url");
const {filesController: filesController} = require("../controllers/filesController.js");
const {postsController: postsController} = require("../controllers/postsController.js")


function GETrouter(request, response) {
  const parsedURL = url.parse(request.url, true);
  console.log(parsedURL.pathname);
  switch (parsedURL.pathname) {
    case "/":
      response.writeHead(302, {
        Location: "/HTML.html",
      });
      response.end();
      break;
    case '/api/posts':
        postsController(request, response);
        break;
    case "/creatorPage":
      response.writeHead(302, {
        Location: "/creatorPage.html",
      });
      response.end();
      break;
    default:
        if(parsedURL.pathname.includes('/api/posts/')){
          let id = parsedURL.pathname.slice(11)          
          postsController(request, response, id);
          break;
        }
      filesController(request, response, parsedURL);
  }
}

module.exports = {
  GETrouter,
};
