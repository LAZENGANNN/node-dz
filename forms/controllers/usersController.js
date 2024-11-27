const fs = require("fs");
const path = require("path");

const { renderData } = require("../utils/dataRenderer");
const { getData, editData, getBanList } = require("./dataController");
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
  form.parse(request, (err, userFields, files) => {
    if (err) {
      response.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
      response.end(err.message);
      return;
    }

    let data = getData();
    obj = flattenObject(userFields);

    ////работа с файлом/////

    const file = files.photo[0];
    console.log("original path:", file.filepath);

    let newPath = path.join(
      `D:/node-js/dz/forms/public/img`,
      `${obj.login}-avatarPicture-${file.originalFilename}`
    );

    console.log("newpath: ", newPath);

    fs.rename(file.filepath, newPath, (err) => {
      if (err) {
        console.error("Ошибка при сохранении файла:", err);
      } else {
        console.log("Файл успешно сохранен по пути: ", newPath);
      }
    });

    //////////////
    if (obj.password === obj.password2) {
      const user = {
        login: obj.login,
        password: obj.password,
        email: obj.email,
        photo: newPath,
      };

      data.push(user);
      editData(data);
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(`<h1>пользователь ${user.login} добавлен</h1>`);
    } else {
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(
        `<h1 style="color: red;">пароль не совпадает с повтором пароля. поаторите попытку</h1>`
      );
    }
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

    const user = data.find(
      (el) =>
        el.login === flattenObject(userFields).login &&
        el.password === flattenObject(userFields).password
    );
    console.log(user);

    if (user) {
      const authTemplate = fs.readFileSync(
        path.join(__dirname, "../templates/authPage.html"),
        "utf-8"
      );
      const pageTemplate = fs.readFileSync(
        path.join(__dirname, "../templates/templPage.html"),
        "utf-8"
      );

      let banList = getBanList();
      if (
        banList.find(
          (el) => el.login === user.login && el.password === user.password
        )
      ) {
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.end(
          `<h1 style="color: red;"> пользователь ${user.login} заблокирован</h1>`
        );
        return;
      }

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
    const obj = flattenObject(userFields);

    if (obj.action === "delete" && data.find((el) => el.login === obj.login)) {
      let newdata = data.filter(
        (el) => el.login != obj.login && el.password != obj.password
      );
      editData(newdata);
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(`<h1>пользователь ${obj.login} удалён</h1>`);
    } else if (
      obj.action === "ban" &&
      data.find((el) => el.login === obj.login)
    ) {
      let banList = getBanList();
      const user = data.find(
        (el) => el.login === obj.login && el.password === el.password
      );
      banList.push(user);
      editData(banList, "banList");
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(`<h1>пользователь заблокирован</h1>`);
    } else {
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(`<h1 style="color: red;" >пользователь не найден</h1>`);
    }
  });
}

module.exports = {
  getAllUsers,
  createUser,
  authorisation,
  editUsers,
};
