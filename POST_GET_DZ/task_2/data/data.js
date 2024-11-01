let data = [
  {
    id: "1",
    title: "Купить молокo",
    completed: "не ваполнено",
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

function edit(id, newTodo){
  console.log('edit', id, newTodo)
  oldTodo = getById(id)
  console.log('old',oldTodo)
  data.map(
    item => {
      console.log('index',data.indexOf(oldTodo)+1+'')
      // if((data.indexOf(oldTodo)+1+'') === id){
      //   console.log('item',item)
      //   console.log("id", id , (data.indexOf(oldTodo)+1+''))
      //   // console.log('if', (data.indexOf(oldTodo)+1+'') === id)
      //   item.title = newTodo.title
      //   item.completed = newTodo.completed
      // }
      if(item.id === id){
        item.title = newTodo.title
        item.completed = newTodo.completed
      }
    }
  )
}




module.exports = {
  getData,
  add,
  edit,
};
