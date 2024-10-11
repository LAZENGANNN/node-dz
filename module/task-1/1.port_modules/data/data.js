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
          avGrade: `4.8`,
          visit: `${getRandomSymbols(2, getArray('nums'))}`,
          age: `AGE: ${getRandomInt(15,30)}`,
          mail: `${getRandomSymbols(7, getArray('symbols'))}@.gmail.com`,
          number: `375${getRandomSymbols(9, getArray('nums'))}`,
          last: `Last seen in Mystat: ${getRandomInt(1,30)}/${getRandomInt(1,12)}/${getRandomInt(22,24)}`
    }
        return student
    }


    function getArrStudents(){
        const arr = []
        for(let i = 0; i <= getRandomInt(1,4); i++){
            arr.push(getStudent())
        }
        return arr
    }


    



module.exports = {
    getStudent,
    getArrStudents,

}