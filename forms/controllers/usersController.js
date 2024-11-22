const fs = require("fs");
const path = require("path");

const formidable = require("formidable");

const { renderData } = require("../utils/dataRenderer");
const { getData, editData } = require("./dataController");
const { flattenObject } = require("../utils/flattenObject");

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
    newData.push(renderData(el, cardTemplate));
  });
  const html = pageTemplate.replace("{{content}}", newData.join(""));
  response.end(html);
}

function createUser(request, response, form) {
  form.parse(request, (err, userFields) => {
    if (err) {
      response.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
      response.end(err.message);
      return;
    }

    let data = getData();
    data.push(flattenObject(userFields));
    editData(data);

    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(`<h1>user ${userFields.login} added</h1>`);
  });
}

function authorisation(request, response, form) {
  form.parse(request, (err, userFields) => {
    if (err) {
      response.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
      response.end(err.message);
      return;
    }

    let data = getData();

    console.log(flattenObject(userFields));

    const user = data.find(
      (el) => el.login === flattenObject(userFields).login
    );

    if (data.find((el) => el.login === flattenObject(userFields).login)) {
      console.log(user);
      const authTemplate = fs.readFileSync(
        path.join(__dirname, "../templates/authPage.html"),
        "utf-8"
      );
      const pageTemplate = fs.readFileSync(
        path.join(__dirname, "../templates/templPage.html"),
        "utf-8"
      );

      const newData = renderData(user, authTemplate);
      const html = pageTemplate.replace("{{content}}", newData);
      response.end(html);
    } else {
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(`<h1 style="color: red;"> авторизация не пройдена.
      вернитесь на предыдущую страницу и повторите попытку</h1>`);
    }
  });
}

function editUsers(request, response, form) {
  form.parse(request, (err, userFields) => {
    if (err) {
      response.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
      response.end(err.message);
      return;
    }
    let data = getData();
    const obj = flattenObject(userFields)

    console.log(obj);

    // const user = data.find(
    //   (el) => el.login === flattenObject(userFields).login
    // );
    console.log(obj.action, obj.action === "ban")
    if (obj.action === "delete") {
     let newdata = data.filter(el => el.login != obj.login && el.password != obj.password)
      editData(newdata)

    }
    else if(obj.action === "ban"){
      
    } else {
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(`<h1>1</h1>`);
    }
  });
  };

module.exports = {
  getAllUsers,
  createUser,
  authorisation,
  editUsers,
};
