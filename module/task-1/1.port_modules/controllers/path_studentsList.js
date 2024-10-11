 const {renderData: renderData} = require('../utils/dataRenderer.js')





const pathStudentsList = function (students, response, path, fs) {
    fs.readFile( path.join(__dirname, "../templates/smart.html"), "utf8",
    (err, template) => {        
      if (err) {
        response.writeHead(500, {
          "Content-Type": "text/html; charset=utf-8",
        });
        response.end("<h1>ошибка</h1>");
      } else {
          const renderedData = students.map(
              student =>  renderData(student))
              .join('')


          const html = template.replace("{{content}}", renderedData);
          response.writeHead(200, {  "Content-Type": "text/html; charset=utf-8", });
          response.end(html);
      }
  });
}

module.exports = {pathStudentsList: pathStudentsList}