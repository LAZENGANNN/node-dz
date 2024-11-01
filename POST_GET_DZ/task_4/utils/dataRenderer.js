const renderData = function (obj, template) {
  const rendered = template
      .replace("{{title}}", obj.title)
      .replace("{{content}}", obj.content)
      .replace("{{author}}", obj.author)
      .replace("{{createdAt}}", obj.createdAt)


  return rendered;
};

module.exports={
  renderData,
}