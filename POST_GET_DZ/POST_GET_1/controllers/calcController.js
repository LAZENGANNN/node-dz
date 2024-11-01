const { textToSymbol: textToSymbol } = require("../utils/operationConverter");

function calcText(request, response) {
  let data = "";
  request.on("data", (chunk) => {
    data += chunk;
  });
  request.on("end", () => {
    if (!data.length) {
      response.writeHead(400, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end("Bad Request");
    }

    let responseData = `${eval(data)}`;
    response.end(responseData);
  });
}

function calcJson(request, response) {
  let dataFromClient = "";
  request.on("data", (chunk) => {
    dataFromClient += chunk;
  });

  request.on("end", () => {
    if (!dataFromClient.length) {
      response.writeHead(400, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end("Bad Request");
    }
    const object = JSON.parse(dataFromClient);

    let stringToCalc = `${object.num1}${object.operation}${object.num2}`;
    let responseData = `${eval(stringToCalc)}`;

    response.end(responseData);
  });
}

function calcQuery(request, response, parsedURL) {
  const query = parsedURL.query;

  const op = textToSymbol(query.op);

  const result = eval(`${query.a}${op}${query.b}`);

  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(`<h1>результат: ${result}</h1>`);
}

module.exports = {
  calcText,
  calcJson,
  calcQuery,
};
