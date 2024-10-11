const module7 = function(){
    console.log('модуль 7')
//7создание библиотеки книг
const books = [
    { title: "Жизнь Пи", author: "Янн Мартел", year: 2001 },
    { title: "Война и мир", author: "Лев Толстой", year: 1869 },
    { title: "Преступление и наказание", author: "Фёдор Достоевский", year: 1866 },
    { title: "Гарри Поттер и Орден Феникса", author: "Дж. К. Роулинг", year: 2003 },
    { title: "Анна Каренина", author: "Лев Толстой", year: 1877 },
    { title: "Евгений Онегин", author: "Александр Пушкин", year: 1833 },
    { title: "Шантарам", author: "Грегори Дэвид Робертс", year: 2003 },
    { title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967 }
]


console.log(books.filter((book) => book.year > 2000))


//7созание каталога товаров
const products = [
    {name: "Ноутбук", price: 7500, stock: 4, discount: 7550/100 * 10 },
    { name: "Смартфон", price: 5000, stock: 39, discount:  5000/100 * 10},
    { name: "Наушники", price: 250, stock: 100, discount:  250/100 * 3},
    { name: "Клавиатура", price: 400, stock: 1, discount:  400/100 * 3},
    { name: "Монитор", price: 1500, stock: 20, discount:  1500/100 * 10}
]

const lower5 = (arr) =>{
 const filter = []
arr.map(prod => 
    {
        if(prod.stock < 5){filter.push(prod)}
    })
    return filter
}
console.log(lower5(products))
}


module.exports = {module7}