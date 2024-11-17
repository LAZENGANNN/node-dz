const http = require("http");
const { mainRouter: router } = require("./routers/reqRouter.js");

const server = http.createServer(router);

const port = 7777;
server.listen(port, function () {
  console.log(`start http://127.0.0.1:${port}`);
});