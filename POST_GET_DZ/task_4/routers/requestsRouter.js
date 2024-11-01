const { GETrouter: GETrouter } = require("./GETrouter.js");
const { POSTrouter: POSTrouter } = require("./POSTrouter.js");

function mainRouter(request, response) {
  switch (request.method) {
    case "GET":
      GETrouter(request, response);
      break;

    case "POST":
      POSTrouter(request, response);
      break;
  }
}

module.exports = {
  mainRouter,
};
