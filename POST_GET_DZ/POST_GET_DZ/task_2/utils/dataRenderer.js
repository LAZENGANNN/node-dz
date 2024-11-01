const renderData = function (obj, template) {
  const rendered = template
    .replace("{{title}}", `(${obj.id})${obj.title}`)
    .replace("{{completed}}", obj.completed)
    .replace("{{createdA}}", obj.createdAt);
  return rendered;
};

module.exports = {
  renderData,
};
