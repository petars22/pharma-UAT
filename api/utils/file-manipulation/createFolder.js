const fs = require("fs");
const generateFilePath = require("./generateFilePath");

module.exports = function createFolder(path) {
    const res = fs.mkdirSync(generateFilePath(path));
    console.log(res);
    return res;
}