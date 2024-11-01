const {getRandomSymbols: getRandomSymbols} = require('../utils/randomtron.js')
const {getRandomInt: getRandomInt} = require('../utils/randomtron.js')





const getArray  = function(name){
    if(name === 'symbols') {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
       }
    else if(name === 'nums') {
        return '1234567890'
     }
}


function getStudent() {
    const student = {
          name: 'Бибкин Иван петрович',
          group: `П${getRandomInt(10000,99999)}`,
          gems: `${getRandomInt(1,1000)}`, 
          coins: `${getRandomInt(1,1000)}`, 
          tasks: `${getRandomInt(1,20)}`,
          achivs: `${getRandomInt(1,20)}`,
          avGrade: `${Math.floor(Math.random()*10)}`,
          visit: `${getRandomSymbols(2, getArray('nums'))}`,
          age: `AGE: ${getRandomInt(15,30)}`,
          mail: `${getRandomSymbols(7, getArray('symbols'))}@.gmail.com`,
          number: `+375${getRandomSymbols(9, getArray('nums'))}`,
          last: `Last seen in Mystat: ${getRandomInt(1,30)}/${getRandomInt(1,12)}/${getRandomInt(22,24)}`,

          
    }
        return student
    }


    function getArrStudents(){
        const arr = []
        for(let i = 0; i <= getRandomInt(15, 30); i++){
            arr.push(getStudent())
        }
        return arr
    }

    const students = getArrStudents(getRandomInt(15,30))


    function filterStud(studGroup, minGrade){
        let filtedData= [...students]

        if(studGroup){
            filtedData = filtedData.filter(
                (stud) => stud.group === studGroup
            )
        }
        if(minGrade){
            filtedData = filtedData.filter(
                (stud) => stud.avGrade > minGrade
            )
        }
        return filtedData
    }


    



module.exports = {
    getStudent,
    getArrStudents,
    students,
    filterStud,

}