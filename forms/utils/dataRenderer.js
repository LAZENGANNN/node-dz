const renderData = function (obj, template) {
    const rendered = template
        .replace("{{login}}", obj.login)
        .replace("{{login}}", obj.login)
        .replace("{{password}}", obj.password)
    return rendered;
};
  
  module.exports={
    renderData,
  }