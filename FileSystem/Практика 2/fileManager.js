const fs = require("fs");
const path = require("path");
const { argv } = require("process");

let argv2 = "";

if (process.argv.length >= 3) {
  argv2 = process.argv[2].toUpperCase();
}

// 1. Команда DIR: отобразить список файлов и папок в текущем каталоге. 
// При этом для каждого из отобразить дату создания, тип (папка/файл), название. Для

// файлов отобразить размер в килобайтах.
// Под конец отображения вывести кол-во файлов и папок, а также кол-во файлов отдельно. 
// Также отобразите суммарный объём файлов в переданном каталоге.

const filesInDir = fs.readdirSync(__dirname, "utf-8");
switch (argv2) {
  case "DIR":
    let filesCount = 0;
    let dirsCount = 0;
    let sizeSum = 0;

    filesInDir.map((f) => {
      const filepath = path.join(__dirname, f);
      const stat = fs.statSync(filepath);

      if (stat.isDirectory() === true) {
        dirsCount++;
        sizeSum += stat.size;

        console.log(`
    ----------------${filesInDir.indexOf(f)}----------------
        name: ${f}
        type: Directory
        created at: ${stat.birthtime}
            `);
      } else {
        filesCount++;
        sizeSum += stat.size;

        console.log(`
    ----------------${filesInDir.indexOf(f)}----------------
        name: ${f}
        type: File
        created at: ${stat.birthtime}
        size: ~ ${stat.size / 1000} kiloBytes
        `);
      }
    });

    console.log(`
    -------------totally-------------
    files and dirs: ${filesCount + dirsCount}
    files: ${filesCount}
    size: ~ ${sizeSum / 1000} kiloBytes
    `);
    break;

    // 2. DIRTO: сделать тоже самое, что и DIR, но результат сохранить в файл, 
    // название которого передано в кач-ве аргумента при вызове через консоль.

  case "DIRTO":
    let DIRTOdata = "";

    let TfilesCount = 0;
    let TdirsCount = 0;
    let TsizeSum = 0;

    filesInDir.map((f) => {
      const filepath = path.join(__dirname, f);
      const stat = fs.statSync(filepath);

      if (stat.isDirectory() === true) {
        TdirsCount++;
        TsizeSum += stat.size;

        DIRTOdata += `
    ----------------${filesInDir.indexOf(f)}----------------
        name: ${f}
        type: Directory
        created at: ${stat.birthtime}
            `;
      } else {
        TfilesCount++;
        TsizeSum += stat.size;

        DIRTOdata += `
    ----------------${filesInDir.indexOf(f)}----------------
        name: ${f}
        type: File
        created at: ${stat.birthtime}
        size: ~ ${stat.size / 1000} kiloBytes
        `;
      }
    });

    DIRTOdata += `
    -------------totally-------------
    files and dirs: ${TfilesCount + TdirsCount}
    files: ${TfilesCount}
    size: ~ ${TsizeSum / 1000} kiloBytes
    `

    const writeName = argv[3];
    const writePath = path.join(__dirname, writeName);
    fs.writeFileSync(writePath, DIRTOdata);
    break;

    // 4. Команда UNION: объеднить все текстовые файлы в один.
    //  Передавать в кач-ве аругментов пути к файлам.

  case "UNION":
    //последним аргуметом передаётся назание файла, в который записывается результат
    const pathList = argv.filter((el) => argv.indexOf(el) >= 3);
    UNIONdata = "";

    pathList.map((p) => {
      if (pathList.indexOf(p) != pathList.length - 1) {
        const readpath = path.join(p);
        UNIONdata += fs.readFileSync(readpath, "utf-8");
      }
    });

    const UwritePath = path.join(__dirname, pathList[pathList.length - 1]);
    fs.writeFileSync(UwritePath, UNIONdata);

    break;

  default:
    console.log(`
        error: НЕВЕРНЫЕ АРГУМЕНТЫ
        `);
}
