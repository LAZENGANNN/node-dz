function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

//строки для случайных символов
  const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const nums = '1234567890'


//выбирает указанное количество случайных символов из тех двух строк
function getRandomSymbols(count, arr){
    let result = ''
    for(let i = 0; i <= count; i++){
        result+= arr.charAt(getRandomInt(0, arr.length))
    }
    
    return result

}
  
  const http = require("http");
  const fs = require("fs");
  const path = require("path");
  
  // MIME-типы
  const contentTypes = {
    ".ico": "image/x-icon",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
  
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
  };
  
 const renderData =  function(student){
  return  `
  <div style="display: block;">


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

  //чтобы данные срандомились заново нужно перезапустить сервер

  function getStudent() {
  const student = {
        name: 'Бибкин Иван петрович',
        group: `П${getRandomSymbols(4, nums)}`,
        gems: `${getRandomInt(1,1000)}`, 
        coins: `${getRandomInt(1,1000)}`, 
        tasks: `${getRandomInt(1,20)}`,
        achivs: `${getRandomInt(1,20)}`,
        avGrade: `4.8`,
        visit: `${getRandomSymbols(2, nums)}`,
        age: `AGE: ${getRandomInt(15,30)}`,
        mail: `${getRandomSymbols(7, symbols)}@.gmail.com`,
        number: `375${getRandomSymbols(9, nums)}`,
        last: `Last seen in Mystat: ${getRandomInt(1,30)}/${getRandomInt(1,12)}/${getRandomInt(22,24)}`
  }
      return student
  }
  
const student = getStudent()

function getArrStudents(count){
    const arr = []
    for(let i = 0; i <= count; i++){
        arr.push(getStudent())
    }
    return arr
}


const students = getArrStudents(getRandomInt(1,5))



  console.log(JSON.stringify(student, null, "\t"));
  
  const app = http.createServer(function (request, response) {
    console.log(`Url: ${request.url}`);
  
    switch (request.url) {
      case "/":
        response.writeHead(302, {
          Location: "/HTML.html",
        });
        response.end();
        break;

        //простой вариант
      case "/random_student":
        fs.readFile( path.join(__dirname, "./templates/smart.html"), "utf8",
          (err, template) => {        
            if (err) {
              response.writeHead(500, {
                "Content-Type": "text/html; charset=utf-8",
              });
              response.end("<h1>ошибка</h1>");
            } else {

                //картинка не рандомится
              const renderedData = renderData(student)
              const html = template.replace("{{content}}", renderedData);
              response.writeHead(200, {  "Content-Type": "text/html; charset=utf-8", });
              response.end(html);
            }
          });
        break;


        //сложный вариант
        case "/students_list":
            fs.readFile( path.join(__dirname, "./templates/smart.html"), "utf8",
          (err, template) => {        
            if (err) {
              response.writeHead(500, {
                "Content-Type": "text/html; charset=utf-8",
              });
              response.end("<h1>ошибка</h1>");
            } else {
                const renderedData = students.map(
                    student =>  renderData(student))
                    .join('')





                const html = template.replace("{{content}}", renderedData);
                response.writeHead(200, {  "Content-Type": "text/html; charset=utf-8", });
                response.end(html);
            }
        });
        break;


      default:
        const filePath = path.join("./public", request.url.substring(1));
        console.log(filePath);
  
        fs.access(filePath, fs.constants.R_OK, (err) => {
          if (err) {
            response.writeHead(404, {
              "Content-Type": "text/html; charset=utf-8",
            });
  
            response.end("<h1>Not found</h1>");
          } else {
            const extname = path.extname(filePath);
            const contentType =
              contentTypes[extname] || "application/octet-stream";
  
            response.writeHead(200, {
              "Content-Type": contentType,
            });
            fs.createReadStream(filePath).pipe(response);
          }
        });
    }
  });

  app.listen(7777, function () {
    console.log(`start 127.0.0.1:7777`);
  });
  