const fs = require("fs");
const path = require("path");
const url = require("url");

const { getData: getData, getPostByID, addPost } = require("../data/data.js");
const { renderData: renderData } = require("../utils/dataRenderer.js");

const pageTemplate = fs.readFileSync(
  path.join(__dirname, "../templates/postsPage.html"),
  "utf-8"
);
const template = fs.readFileSync(
  path.join(__dirname, "../templates/post.html"),
  "utf-8"
);

function postsController(request, response, id) {
  let data = getData();

  let parsedUrl = url.parse(request.url, true);
  let query = parsedUrl.query;
  const limit = query.limit;

  if (id) {
    let postToRender = [];
    postToRender.push(getPostByID(id));
    const renderedData = postToRender
      .map((post) => renderData(post, template))
      .join("");

    const html = pageTemplate.replace("{{content}}", renderedData);
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(`${html}`);
  } else if (limit) {
    let toRender = [];

    data.map((post) => {
      if (data.indexOf(post) <= limit - 1) {
        toRender.push(post);
      }
    });

    const renderedData = toRender
      .map((post) => renderData(post, template))
      .join("");

    const html = pageTemplate.replace("{{content}}", renderedData);
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(`${html}`);
  } else {
    const renderedData = data
      .map((post) => renderData(post, template))
      .join("");

    const html = pageTemplate.replace("{{content}}", renderedData);
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(`${html}`);
  }
}

function createPost(request, response) {
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
    console.log(data.length);

    const newPost = {
      id: data.length + 1 + "",
      title: object.title,
      content: object.content,
      author: object.author,
      createdAt: time + "",
    };
    addPost(newPost);

    response.end("пост добавлен");
  });
}

module.exports = {
  postsController,
  createPost,
};
