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

function getBanList() {
  try {
    const filePath = path.join(__dirname, "../data/banList.json");
    const data = JSON.parse(fs.readFileSync(filePath));
    return data;
  } catch (e) {
    console.error(e);
  }
}

function editData(newData, file) {
  try {
    if (file) {
      const filePath = path.join(__dirname, `../data/${file}.json`);
      const data = JSON.stringify(newData);
      fs.writeFileSync(filePath, data);
      return;
    }
    const filePath = path.join(__dirname, "../data/data.json");
    const data = JSON.stringify(newData);
    fs.writeFileSync(filePath, data);
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  getData,
  editData,
  getBanList,
};
