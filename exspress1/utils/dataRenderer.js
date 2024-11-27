const renderData = function (student, template) {
  const rendered = template
    .replace("{{name}}", student.name)
    .replace("{{group}}", student.group)
    .replace("{{gems}}", student.gems)
    .replace("{{coins}}", student.coins)
    .replace("{{tasks}}", student.tasks)
    .replace("{{avGrade}}", student.avGrade)
    .replace("{{age}}", student.age)
    .replace("{{mail}}", student.mail)
    .replace("{{number}}", student.number)
    .replace("{{last}}", student.last)
    .replace("{{achivs}}", student.achivs)
    .replace("{{percent}}", student.percent)
    .replace("{{photo}}", student.photo);

  return rendered;
};


//этот комментарий оставлен специально, он нужен
// const renderData = function (obj, template) {
//     let rendered = template;

//     for (const key in obj) {
//       console.log(key,"=", obj[key])
//       rendered.replace(`{{${key}}}`, obj[key]);
//     }

//     return rendered;
//   };



module.exports = {
  renderData,
};
