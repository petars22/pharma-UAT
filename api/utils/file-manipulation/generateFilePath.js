const uploadPath = global.basePath + "/uploaded-files/";

module.exports = function generateFilePath(path) {
    return uploadPath + path;
}