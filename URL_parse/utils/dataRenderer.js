
const renderData =  function(student, template){



  const rendered =
   template.replace("{{name}}", student.name)
            .replace("{{group}}", student.group)
            .replace("{{gems}}", student.gems)
            .replace("{{coins}}", student.coins)
            .replace("{{tasks}}", student.tasks)
            .replace("{{avGrade}}", student.avGrade)
            .replace("{{age}}", student.age)
            .replace("{{mail}}", student.mail)
            .replace("{{number}}", student.number)
            .replace("{{last}}", student.last)


  return rendered
  //   return  `
  //   <div style="display: block; border: 1px solid blue; border-radius: 10px; max-width: 100px;">
  
  
  //   <div>
  // <img src="/userCircle.png" alt="photo">
  // <p>${student.name}</p>
  // </div>
  // <div>
  // Group:${student.group}
  // </div>
  // <div>
  // <p>Gems:${student.gems}</p>   <p>Coins:${student.coins}</p>    <p>Tasks:${student.tasks}</p>    <p>Achivpments:${student.achivs}</p>
  // </div>
  // <div>
  // Average grade${student.avGrade}
  // </div>
  // <div>
  // ${student.age}
  // </div>
  // <div>
  // ${student.mail}
  // </div>
  // <div>
  // ${student.number}
  // </div>
  // <div>
  // ${student.last}
  // </div>
  

  // </div>
  //   `
   }

module.exports = {
    renderData,
}