const fs =  require("fs");
const generateFilePath = require("./generateFilePath");

module.exports = function uploadFiles(path, files) {
    let sources = [];
    let fileNameArray = [];
    let errors = [];
    const today = new Date();
    const todayDate =
        today.getFullYear() + "-" +
        today.getMonth() + "-" +
        (today.getDate() < 10 ? "0" + today.getDate() : today.getDate());

    for(let i = 0; i < files.length; i++) {
        fileNameArray = files[i].originalname.split(".");

        const targetPath = fileNameArray[0] + "_" + todayDate + "." + fileNameArray[1];
        const res = fs.renameSync(
            files[i].path,
            generateFilePath(path + targetPath)
        );

        if(res === undefined) {
            sources.push({
                name: files[i].originalname,
                path: targetPath
            });
        }
        else errors.push(errors);
    }
    
    sources = JSON.stringify(sources);

    return {sources, errors};
}