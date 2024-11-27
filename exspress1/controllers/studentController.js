const { getArrStudents } = require("../data/data");

const path = require("path");
const fs = require("fs");
const { renderData } = require("../utils/dataRenderer");
const { log } = require("console");

const students = getArrStudents();

const cardTemplate = fs.readFileSync(
  path.join(__dirname, "../templates/card.html"),
  "utf-8"
);

function getAllStudent() {
  let data = students;

  let newData = [];

  data.map((el) => {
    newData.push(renderData(el, cardTemplate));
  });

  return newData.join("");
}

function selStudent(req, res) {
  const obj = req.body;
  const findName = obj.name;

  let data = students;

  let student = [];

  data.map((el) => {
    let elName = el.name;

    if (elName.includes(findName)) {
      student.push(el);
    }
  });

  let newData = [];

  student.map((el) => {
    newData.push(renderData(el, cardTemplate));
  });

  res.send(newData.join(""));
}

function findBest(req, res) {
  const obj = req.body;
  const op = obj.op;

  let data = students;

  let best = { op: 0 };

  if (op === "gems") {
    best = { gems: 0 };
  } else {
    best = { coins: 0 };
  }

  data.map((el) => {

    //выводит каждое сравнение
    // console.log(el[op], best[op])

    if ((el[op] + 0) > (best[op] + 0)) {
      best = el;
    }
  });



  res.send(renderData(best, cardTemplate));
}

module.exports = {
  getAllStudent,
  selStudent,
  findBest,
};
