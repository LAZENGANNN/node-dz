const module4 = function(){
    console.log('модуль 4')
    //4Создайте массив чисел [1,2,3,4,5]. напишите код, котрый выведет сумму всех элементов в консоль
  const arr = [1,2,3,4,5] 
  let sum2 = 0
  for(let i = 0; i<=(arr.length-1); i++){
    sum2 += arr[i]
  }
  console.log(sum2)


  //4Создайте массив чисел [1,2,3,4,5]. напишите код, котрый выведет чётные элементы

  for(let i = 0; i<=(arr.length-1); i++){
    if(arr[i]%2 === 0){
        console.log(arr[i])
    }
  }
}



module.exports = {module4}