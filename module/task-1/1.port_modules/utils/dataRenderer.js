
const renderData =  function(student){
    return  `
    <div style="display: block; border: 1px solid blue; border-radius: 10px;">
  
  
    <div>
  <img src="/userCircle.png" alt="photo">
  <p>${student.name}</p>
  </div>
  <div>
  Group:${student.group}
  </div>
  <div>
  <p>Gems:${student.gems}</p>   <p>Coins:${student.coins}</p>    <p>Tasks:${student.tasks}</p>    <p>Achivpments:${student.achivs}</p>
  </div>
  <div>
  Average grade${student.avGrade}
  </div>
  <div>
  ${student.age}
  </div>
  <div>
  ${student.mail}
  </div>
  <div>
  ${student.number}
  </div>
  <div>
  ${student.last}
  </div>
  

  </div>
    `
   }

module.exports = {
    renderData,
}