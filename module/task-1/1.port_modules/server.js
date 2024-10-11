const {getStudent: getStudent} = require('./data/data.js')

const {getArrStudents: getArrStudents} = require('./data/data.js')

const {getTypes: getTypes} = require('./utils/servData.js')

const {pathRandomStudent: randomStudent} = require('./controllers/path_randomSudent.js')

const {pathStudentsList: studentsList} = require('./controllers/path_studentsList.js')





  
  const http = require("http");
  const fs = require("fs");
  const path = require("path");
  
  
  

const contentTypes = getTypes()

const student = getStudent()

const students = getArrStudents()



 
  const app = http.createServer(function (request, response) {
    
    switch (request.url) {

      case "/":
        response.writeHead(302, {
          Location: "/HTML.html",
        });
        response.end();
      break;

        //простой вариант
      case "/random_student":
        randomStudent(student, response, path, fs)
      break;


        //сложный вариант
      case "/students_list":
        studentsList(students, response, path, fs)
      break;


      default:
        const filePath = path.join("./public", request.url.substring(1));
        
  
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
  