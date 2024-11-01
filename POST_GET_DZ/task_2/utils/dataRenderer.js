const renderData = function (obj, template) {
  const rendered = template
      .replace("{{title}}", obj.title)
      .replace("{{completed}}", obj.completed)
      .replace("{{createdA}}", obj.createdAt)
  return rendered;
};

module.exports={
  renderData,
}

// .replace("{{completed}}", ()=>{if(obj.completed==="true"){return 'выполнено'}; return 'не выполнено'})