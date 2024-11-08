const fs = require("fs");
const path = require("path");
const { argv } = require("process");

let argv2 = "";

if (process.argv[2]) {
  argv2 = process.argv[2].toUpperCase();
}

// console.log(argv2)
const filesInDir = fs.readdirSync(__dirname, "utf-8");
switch (argv2) {
  case "DIR":
    filesInDir.map((f) => {
      const filepath = path.join(__dirname, f);
      const stat = fs.statSync(filepath);

      if (stat.isDirectory() === true) {
        console.log(`
    ----------------${filesInDir.indexOf(f)}----------------
            name: ${f}
            type: Directory
            created at: ${stat.birthtime}
            `);
      } else {
        console.log(`
    ----------------${filesInDir.indexOf(f)}----------------
        name: ${f}
        type: File
        created at: ${stat.birthtime}
        size: ~ ${stat.size / 1000} kiloBytes
        `);
      }
    });
    break;

  case "DIRTO":
    let data = "";

    filesInDir.map((f) => {
      const filepath = path.join(__dirname, f);
      const stat = fs.statSync(filepath);

      if (stat.isDirectory() === true) {
        data += `
    ----------------${filesInDir.indexOf(f)}----------------
        name: ${f}
        type: Directory
        created at: ${stat.birthtime}
            `;
      } else {
        data += `
    ----------------${filesInDir.indexOf(f)}----------------
        name: ${f}
        type: File
        created at: ${stat.birthtime}
        size: ~ ${stat.size / 1000} kiloBytes
        `;
      }
    });

    const writeName = argv[3];
    const writePath = path.join(__dirname, writeName);
    fs.writeFileSync(writePath, data);
    break;

    case "COPY":
        const path0 = path.join(argv[3])
        const parsedPath0 = path.parse(path0)


        
        

        // const readStream = fs.createReadStream(
        //     path.join(__dirname, workdir, "./logo.png")
        //   );
        //   const writeStream = fs.createWriteStream(
        //     path.join(__dirname, workdir, "./example13.jpg")
        //   );
        //   readStream.pipe(writeStream);
        console.log(parsedPath0)


    break;

  default:
    console.log(`
        error: НЕВЕРНЫЕ АРГУМЕНТЫ
        `);
}
