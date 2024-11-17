const fs = require("fs");
const path = require("path");

const formidable = require("formidable")

const { renderData } = require("../utils/dataRenderer");
const { getData } = require("./dataController");

function getAllUsers(request, response) {
  const cardTemplate = fs.readFileSync(
    path.join(__dirname, "../templates/card.html"),
    "utf-8"
  );
  const pageTemplate = fs.readFileSync(
    path.join(__dirname, "../templates/templPage.html"),
    "utf-8"
  );

  let data = getData();
  let newData = [];

  data.map((el) => {
    console.log(el);
    newData.push(renderData(el, cardTemplate));
  });
  const html = pageTemplate.replace("{{content}}", newData.join(""));
  response.end(html);
}


function createUser (request, response) {
    let form = new formidable.IncomingForm();

    form.parse(request, (err, userFields)=>{
        if (err) {
            response.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
            response.end(err.message);
            return;
          }
        console.log(userFields);

        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.end(`<h1>createUser WORKS</h1>`);

    })
    

}


module.exports = {
  getAllUsers,
  createUser,
};
