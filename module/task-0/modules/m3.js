const module3 = function() {
    console.log('модуль 3')
    //3Напишите код, который выведет на консоль числа от 0 до 10

  for(let i = 1; i <= 10; i++){
    console.log(i)
  }


//3Напишите код, который выведет на консоль сумму чисел от 1 до 100
let sum1 = 0
for(let i = 1; i <= 100; i++){
    sum1 += i;
  }
  console.log(sum1)
}


module.exports = { module3 };