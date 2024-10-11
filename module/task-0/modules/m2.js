const module2 = function() {
    console.log('модуль 2')

        //2Напишите код, который проверит, является ли число чётным
let num1 = 2
let num2 = -5
let num3 = 0
let func = (num) =>{
if(num%2 === 0){
    console.log("Число чётное")
}
else{
    console.log("Число нечётное")
}
}
func(num1)
func(num2)


//2Напишите код, который проверяет, является число положительным, отрицательным или нулём


let func1 = (num) =>{
    if(num > 0){
        console.log("больше нуля")
    }
    else if(num<0){
        console.log("меньше нуля")
    }
    else if(num ===0){
        console.log("ноль")
    }
}
func1(num1)
func1(num2)
func1(num3)
    }


    module.exports = { module2 };