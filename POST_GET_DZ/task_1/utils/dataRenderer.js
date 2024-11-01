const renderData = function (obj, template) {
  const rendered = template
      .replace("{{author}}", obj.author)
      .replace("{{text}}", obj.text)
      .replace("{{timeStamp}}", obj.timeStamp)
  return rendered;
};

module.exports={
  renderData,
}