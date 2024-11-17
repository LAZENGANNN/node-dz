const url = require("url");
const { createUser } = require("../controllers/usersController");

const formidable = require("formidable")

let form = new formidable.IncomingForm();

function POSTrouter(request, response) {
  const parsedURL = url.parse(request.url, true);
  switch (parsedURL.pathname) {
    case "/api/users/create":
        

        form.parse(request, (err, userFields)=>{
            if (err) {
                response.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
                response.end(err.message);
                return;
              }
            console.log(userFields);
    
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            response.end(`<h1>Пользователь добавлен</h1>`);
            console.log("\n================================\n");
        })
      break;
    default:
      response.end("<h1>ошибка адреса POST запроса</h1>");
      break;
  }
}

module.exports = {
  POSTrouter,
};
