let data = [
  {
    id: "1",
    text: "message1",
    author: "user1",
    timeStamp: "dd/mm/yyyy",
  },
  {
    id: "2",
    text: "УЖАСНО ДЛИННОЕ СООБЩЕНИЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕ",
    author: "user42",
    timeStamp: "10.10.10",
  },
];

function getData() {
  return data;
}

function addMess(mes) {
  data.push(mes);
}

function getByAuthor(author) {
  return data.filter((mes) => mes.author === author);
}

module.exports = {
  getData,
  addMess,
  getByAuthor,
};
