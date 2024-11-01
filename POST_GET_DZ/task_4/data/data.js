let data = [
  {
    id: "1",
    title: "title1",
    content: "content1",
    author: "user1",
    createdAt: "dd/mm/yy",
  },
  {
    id: "2",
    title: "анекдот про негров",
    content: "Идут 100 негров по пустыне. Навстречу им джин. 99 из них загaдали, чтобы они стали белыми. А 100-ый загадал что бы они все стали черными",
    author: "я",
    createdAt: "11.09.2001",
  },
];

function getData() {
  return data;
}

function addPost(post) {
  data.push(post);
}

function getPostByID(id) {
  return data.find(post => post.id === id)
}

module.exports = {
  getData,
  addPost,
  getPostByID,
};
