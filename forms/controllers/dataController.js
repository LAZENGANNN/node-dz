const fs = require("fs");
const path = require("path");

function getData() {
  try {
    const filePath = path.join(__dirname, "../data/data.json");
    const data = JSON.parse(fs.readFileSync(filePath));
    return data;
  } catch (e) {
    console.error(e);
  }
}

// function editData(newData) {
//   try {
//     const filePath = path.join(__dirname, "../data/data.json");
//     const data = JSON.stringify(newData);
//     fs.writeFileSync(filePath, data);
//   } catch (e) {
//     console.error(e);
//   }
// }

module.exports = {
  getData,
};
