const http = require("http");
const fs = require("fs");
const path = require("path");


const contentTypes = {
    ".ico": "image/x-icon",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",

    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
  };
  
  app = http.createServer(function (request, response) {
    console.log(`Url: ${request.url}`);
  
    switch (request.url) {
      case "/":
        response.writeHead(302, {
             Location: "/HTML.html", "Content-Type": "text/html; charset=utf-8",
        });
        response.end();
        break;
  
      case "/route1":
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        
        response.end();
        break;
  
      case "/route2":
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

        response.end();
        break;

        case "/route3":
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
 
        response.end(`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>app</title>
	<!-- <link rel="stylesheet" href="/css/style.css">
	<script src="js/script.js" defer></script> -->
</head>
<body>
    <p>111</p>
</body>
</html>`);
        break;
            
        default:
      const filePath = path.join("./public", request.url.substring(1));
      console.log(filePath);

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
       
        
  app.listen(7777, "127.0.0.1", function () {
    console.log("start 127.0.0.1:7777");
  });
