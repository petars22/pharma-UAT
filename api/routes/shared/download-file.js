const generateFilePath = require("../../utils/file-manipulation/generateFilePath");
const path = require("path");

module.exports = function downloadFile(data, res) {
    const file = path.resolve(generateFilePath(`${data.brandId}/${data.indicationId}/${data.type}/${data.path}`));
    
    res.download(file, data.filename);
}