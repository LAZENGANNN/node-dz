
//
//Используя express реализовать клиентскую и серверную стороны для MetaStar на минималках.
//

const express = require("express");
const path = require("path");
const {
  getAllStudent,
  selStudent,
  findBest,
} = require("./controllers/studentController");

const app = express();
const port = 7777;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.status(200).sendFile("index.html"));

app.get("/api/student", (req, res) => {
  const toSend = getAllStudent();
  res.send(toSend);
});

app.use(express.json());

app.post("/api/selStudent", (req, res) => {
  console.log("server: ", req.body);
  selStudent(req, res);
});

app.post("/api/bestStudent", (req, res) => {
  findBest(req, res);
});

app.use((req, res, next) => res.status(404).send("<h2>Not found</h2>"));

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
