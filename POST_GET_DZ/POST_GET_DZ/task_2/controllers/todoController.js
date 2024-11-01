const fs = require("fs");
const path = require("path");
const url = require("url");

const { getData, add, edit, deleteTask } = require("../data/data.js");
const { renderData: renderData } = require("../utils/dataRenderer.js");

const pageTemplate = fs.readFileSync(
  path.join(__dirname, "../templates/allMessagesPage.html"),
  "utf-8"
);
const template = fs.readFileSync(
  path.join(__dirname, "../templates/message.html"),
  "utf-8"
);

function todoController(request, response) {
  let data = getData();

  let parsedUrl = url.parse(request.url, true);
  let query = parsedUrl.query;
  const limit = query.limit;

  if (limit) {
    let toRender = [];

    data.map((mess) => {
      if (data.indexOf(mess) <= limit - 1) {
        toRender.push(mess);
      }
    });

    const renderedData = toRender
      .map((mess) => renderData(mess, template))
      .join("");

    const html = pageTemplate.replace("{{content}}", renderedData);
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(`${html}`);
  } else {
    const renderedData = data.map((mes) => renderData(mes, template)).join("");

    const html = pageTemplate.replace("{{content}}", renderedData);
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(`${html}`);
  }
}

function createTask(request, response) {
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

    const time = new Date();
    let data = getData();

    const newMess = {
      id: data.length + 1 + "",
      title: object.title,
      completed: "не выполнено",
      createdAt: time + "",
    };
    add(newMess);

    response.end("задание добавлено");
  });
}

function editTask(request, response) {
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
    edit(object.id, object);
    response.end("задание изменено");
  });
}

function delTask(request, response) {
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
    deleteTask(object.id);
    response.end("задание удалено");
  });
}

module.exports = {
  todoController,
  createTask,
  editTask,
  delTask,
};
