const createFolder = require("../../utils/file-manipulation/createFolder");

module.exports = function createBrand(data, res) {
    const id = new require("uuid").v1();
    const createFolderRes = createFolder(id);

    if(createFolderRes === undefined) {
        global.db.executeQuery(
            `
                INSERT INTO brands (id, name, thumbnail)
                VALUES (?, ?, ?);
            `,
            [
                id,
                data.name,
                data.thumbnail
            ]
        ).then(function(rows) {
            res.status(200).send("Successfully created brand!");
        }).catch(function(error) { console.log(error); res.status(400).send(error); });
    }
    else res.status(200).send({error: createFolderRes});
}