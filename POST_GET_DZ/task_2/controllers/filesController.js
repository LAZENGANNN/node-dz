const fs = require("fs");
const path = require("path");

const { getTypes: getTypes } = require("../utils/getServerData.js");
const contentTypes = getTypes();

function filesController(request, response, parsedURL) {
  parsedURL.pathname = decodeURI(parsedURL.pathname);

  const filePath = path.join("./public", request.url.substring(1));
  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      response.writeHead(404, {
        "Content-Type": "text/html; charset=utf-8",
      });

      response.end("<h1>Not found(fileController)</h1>");
    } else {
      const extname = path.extname(filePath);
      const contentType = contentTypes[extname] || "application/octet-stream";

      response.writeHead(200, {
        "Content-Type": contentType,
      });
      fs.createReadStream(filePath).pipe(response);
    }
  });
}

module.exports = {
  filesController,
};
