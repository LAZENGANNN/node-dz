const module6 = function(){
    let num1 = 2
let num2 = -5
let num3 = 0
    console.log('модуль 6')
    //6Hапишите функцию, которая принимает два числа в качестве аргументов и возвращает их сумму.
const funcSum = (num1, num2) =>{
    return num1 + num2
}
console.log(funcSum(num1, num2))


//6напишите функцию, которая принимает массив чисел в качестве аргумента и возвращает среднее значение всех элементов массива.
const funcAve = (num1, num2, num3) =>{
    return (num1 + num2 + num3) /3
}
console.log(funcAve(num1, num2, num3))

}



module.exports = {module6}