let data = [
  {
    id: "1",
    title: "Купить молокo",
    completed: "не выполнено",
    createdAt: "dd/mm/yyyy",
  },
  {
    id: "2",
    title: "наконец доделать домашку GET POST",
    completed: "выполнено",
    createdAt: "10.10.10",
  },
];

function getData() {
  return data;
}

function add(mes) {
  data.push(mes);
}

function getById(id) {
  return data.find((item) => item.id === id);
}

function edit(id, newTodo) {
  oldTodo = getById(id);
  data.map((item) => {
    if (item.id === id) {
      if (newTodo.eTitle != "") {
        item.title = newTodo.eTitle;
      }

      item.completed = newTodo.completed;
    }
  });
}

function deleteTask(id) {
  const newData = data.filter((item) => item.id != id);
  data = newData
}

module.exports = {
  getData,
  add,
  edit,
  deleteTask,
};
