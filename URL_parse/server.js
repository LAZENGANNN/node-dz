const {getTypes: getTypes} = require('./utils/servData.js')

const {studentsController: studentsList} = require('./controllers/studentsController.js')





  
  const http = require("http");
  const fs = require("fs");
  const path = require("path");
  const url = require("url");
  
  
  

const contentTypes = getTypes()



 
  const app = http.createServer(function (request, response) {
    
    parsedURL = url.parse(request.url, true);

    switch (parsedURL.pathname) {

      case "/":
        response.writeHead(302, {
          Location: "/HTML.html",
        });
        response.end();
      break;


      case "/students_list":
        studentsList(request, response)
      break;


      default:
        parsedURL.pathname = decodeURI(parsedURL.pathname);

        const filePath = path.join("./public", request.url.substring(1));      
          fs.access(filePath, fs.constants.R_OK, (err) => {
          if (err) {
            response.writeHead(404, {
              "Content-Type": "text/html; charset=utf-8",
            });
  
            response.end("<h1>Not found</h1>");
          } else {
            const extname = path.extname(filePath);
            const contentType =
              contentTypes[extname] || "application/octet-stream";
  
            response.writeHead(200, {
              "Content-Type": contentType,
            });
            fs.createReadStream(filePath).pipe(response);
          }
        });
    }
  });

  const port = 7777
  app.listen(port, function () {
    console.log(`start 127.0.0.1:${port}`);
  });
  