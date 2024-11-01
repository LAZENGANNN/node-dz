const url = require("url");
const { createPost } = require("../controllers/postsController");


function POSTrouter(request, response) {
  const parsedURL = url.parse(request.url, true);
  switch (parsedURL.pathname) {
    case '/api/posts':
      createPost(request,response)
    break;

    default:
      response.end("<h1>ошибка адреса POST запроса</h1>");
      break;
  }
}

module.exports = {
  POSTrouter,
};
