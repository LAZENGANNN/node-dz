const fs = require("fs");
const path = require("path");
const url = require("url");

const { renderData: renderData } = require("../utils/dataRenderer.js");
const { filterStud: filterStud } = require("../data/data.js");

// const data = students;

const template1 = fs.readFileSync(
  path.join(__dirname, "../templates/studentDiv.html"),
  "utf-8"
);

const studentsController = function (request, response) {
  let parsedUrl = url.parse(request.url, true);

  let query = parsedUrl.query;
  const minGrade = query.minGrade;
  const group = query.group;

  const filtedData = filterStud(group, minGrade);

  fs.readFile(
    path.join(__dirname, "../templates/smart.html"),
    "utf8",
    (err, template) => {
      if (err) {
        response.writeHead(500, {
          "Content-Type": "text/html; charset=utf-8",
        });
        response.end("<h1>ошибка</h1>");
      } else {
        const renderedData = filtedData
          .map((student) => renderData(student, template1))
          .join("");

        const html = template.replace("{{content}}", renderedData);
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.end(html);
      }
    }
  );
};

module.exports = { studentsController: studentsController };
