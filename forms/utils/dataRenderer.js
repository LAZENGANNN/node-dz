const renderData = function (obj, template) {
    const rendered = template
        .replace("{{photo}}", obj.photo)
        .replace("{{login}}", obj.login)
        .replace("{{login}}", obj.login)
        .replace("{{login}}", obj.login)
        .replace("{{password}}", obj.password)
        .replace("{{email}}", obj.email)
    return rendered;
};
  
  module.exports={
    renderData,
  }