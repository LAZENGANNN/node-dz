const fs = require("fs");
const path = require("path");

// Задание 1 Дан текстовый файл, где слова разделены пробелом. Необходимо создать
// новый файл, в который требуется переписать из исходного файла все слова,
// состоящие не менее чем из семи букв.
async function task1(fPath, readName, writeName) {
  const readPath = path.join(fPath, readName);
  const writePath = path.join(fPath, writeName);

  try {
    const data = fs.readFileSync(readPath, "utf-8").split(" ");
    const newData = data.filter((el) => el.length >= 7).join(" ");

    fs.writeFileSync(writePath, newData);
  } catch (e) {
    console.error("Ошибка:", e);
  }
}
task1(__dirname, "textFile.txt", "task1-result.txt");

// Задание 2 Дан текстовьй файл. Необходимо переписать его строки в другой файл .
// Порядок строк во второтч файле должен совладать с порядком строк в заданном файле.
// По факту необходимо создать полную копию файла .

async function task2(fPath, readName, writeName) {
  const readPath = path.join(fPath, readName);
  const writePath = path.join(fPath, writeName);

  try {
    const data = fs.readFileSync(readPath, "utf-8");

    fs.writeFileSync(writePath, data);
  } catch (e) {
    console.error("Ошибка", e);
  }
}
task2(__dirname, "textFile.txt", "task2-result.txt");

//   Задание З Дан текстовый файл. Необходимо переписать его строки в другой файл .
// Порядок строк во вторсм файле должен быть обратным по отношению к порядку строк в
// заданноеа файле.
async function task3(fPath, readName, writeName) {
  const readPath = path.join(fPath, readName);
  const writePath = path.join(fPath, writeName);

  try {
    const data = fs
      .readFileSync(readPath, "utf-8")
      .split(" ")
      .reverse()
      .join(" ");

    fs.writeFileSync(writePath, data);
  } catch (e) {
    console.error("Ошибка:", e);
  }
}
task3(__dirname, "textFile.txt", "task3-result.txt");

// Задание 4 Дано два текстовьх файла. Выяснить равны ли они по содержимому друг
// другу .

async function task4(fPath, name1, name2) {
  const readPath1 = path.join(fPath, name1);
  const readPath2 = path.join(fPath, name2);

  try {
    const file1 = fs.readFileSync(readPath1, "utf-8");
    const file2 = fs.readFileSync(readPath2, "utf-8");

    console.log("task4:", file1 === file2);
  } catch (e) {
    console.error("Ошибка:", e);
  }
}
task4(__dirname, "textFile.txt", "task2-result.txt");

// Задание 6 Дан текстовьй файл. Переписать
// на символ & и нао&рот.
// них символа
// Символы, который и на который присходит
// в другой файл все его строки с заменой в
// замена сделать аргументов функции.

async function task6(fPath, readName, writeName, symb1, symb2) {
  const readPath = path.join(fPath, readName);
  const writePath = path.join(fPath, writeName);

  try {
    const data = fs.readFileSync(readPath, "utf-8").split(" ");
    let newData = "";
    data
      .map((el) => {
        if (el.includes(symb1)) {
          newData += el.replace(symb1, symb2) + " ";
        } else {
          newData += el + " ";
        }
      })
      .join(" ");

    fs.writeFileSync(writePath, newData);
  } catch (e) {
    console.error("Ошибка:", e);
  }
}
task6(__dirname, "textFile.txt", "task6-result.txt", "a", "☭");

// Задание 9 Дан текстовьй файл. Узнать его размер в байтах.

async function task9(fPath, name) {
  const readPath = path.join(fPath, name);

  try {
    console.log("task9:", fs.statSync(readPath).size, "bytes");
  } catch (e) {
    console.error("Ошибка:", e);
  }
}
task9(__dirname, "textFile.txt", "task9-result.txt");

//   Задание 14 Дан список путей к файлам. программа должна объединить содержимое всех
// перечисленньх пользователем файлов в один .

async function task14(fPath, name, list) {
  const pathArr = list.split(", ");
  const writePath = path.join(fPath, name);

  try {
    let resultString = "";
    pathArr.map((el) => {
      const readPath = path.join(el);
      resultString += fs.readFileSync(readPath, "utf-8");
    });

    fs.writeFileSync(writePath, resultString);
  } catch (e) {
    console.error("Ошибка:", e);
  }
}

//список путей
const pathList = `${path.join(__dirname, "task1-result.txt")}, ${path.join( __dirname,"task6-result.txt")}, ${path.join(__dirname, "task3-result.txt")}`;

task14(__dirname, "task14-result.txt", pathList);

// Задание 8 Дан текстовый файл. Необходимо создать новый файл и записать в него следующую статистику по исходному файлу:
// ■ Количество символов;
// ■ *Количество цифр
async function task8(fPath, readName, writeName) {
  const readPath = path.join(fPath, readName);
  const writePath = path.join(fPath, writeName);

  try {
    const data = fs.readFileSync(readPath, "utf-8");
    const symbolCount = data.length;
    let numCount = 0;

    data.split(" ").map((el) => {
      if (!(Number(el) + "" === NaN + "")) {
        numCount += 1;
      }
    });
    const stats = `
        ■${symbolCount} символов
        ■ ${numCount} цифр
        `;

    fs.writeFileSync(writePath, stats);
  } catch (e) {
    console.error("Ошибка:", e);
  }
}
task8(__dirname, "textFile.txt", "task8-result.txt");
