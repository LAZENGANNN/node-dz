const fs = require("fs");
const path = require("path");

// 2. Реализовать функцию, которая принимает файл с числами, перечисленными через пробел.
// Затем суммирует все числа и возвращает результат.

function task2(file) {
  let sum = 0;
  try {
    file.split(" ").map((num) => {
      sum += Number(num);
    });
  } catch (e) {
    console.error("Ошибка:", e);
  }
  return sum;
}
const result2 = task2(
  fs.readFileSync(path.join(__dirname, "for_task2.txt"), "utf-8")
);
console.log("task2:", result2, "\n");

// 3. *Реализовать функцию, которая принимает на вход путь к файлу со списком примеров в виде записей вида “13+9” и т.п.
// А на выходе создаёт новый файл с ответам в виде ответов в виде записи “13+9=22”.
//  Запарьтесь чуть генерацией файла с соответствующим содержимым! :)

async function task3(fPath, readName, writeName) {
  const readPath = path.join(fPath, readName);
  const writePath = path.join(fPath, writeName);

  try {
    const data = fs.readFileSync(readPath, "utf-8").split(" ");

    let newData = "";

    data.map((el) => {
      newData += `${el}=${eval(el)} `;
    });

    fs.writeFileSync(writePath, newData);
  } catch (e) {
    console.error("Ошибка:", e);
  }
}

task3(__dirname, "for_task3.txt", "task3_result.txt");

// 5. Создать функцию, которая в директории, в которой был осуществлён запуск скрипта, находит только файлы с заданным в качестве аргумента расширением.
// После нахождения вернуть их (названия с расширением) в виде массива.
// В зависимости одного из аргументов функции реализовать возможность после формирования списка дополнительно отобразить его в нумерованном виде.
// По умолчанию список выводиться не должен — только возвращаться.

async function task5(ex, isOut) {
  workdir = path.join(__dirname);

  try {
    const filesInDir = fs.readdirSync(workdir);

    let fileList = [];

    filesInDir.map((f) => {
      if (f.includes(ex)) {
        fileList.push(f);
      }
    });

    if (isOut === true) {
      console.log(`files with '${ex}' extention:`);
      for (let i = 0; i <= fileList.length - 1; i++) {
        console.log(`${i + 1})${fileList[i]}`), "\n";
      }
    }
    return filesInDir;
  } catch (e) {
    console.error("Ошибка:", e);
  }
}

//true - список выводится
task5("txt", true);
