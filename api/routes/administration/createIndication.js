const createFolder = require("../../utils/file-manipulation/createFolder");

module.exports = function createIndication(data, res) {
    const id = new require("uuid").v1();
    const createFolderRes = createFolder(`${data.brandId}/${id}`);

    if(createFolderRes === undefined) {
        global.db.executeQuery(
            `
                INSERT INTO indications (id, name, brand_id)
                VALUES (?, ?, ?);
            `,
            [
                id,
                data.name,
                data.brandId
            ]
        ).then(function(rows) {
            res.status(200).send("Successfully created indication!");
        }).catch(function(error) { console.log(error); res.status(400).send(error); });
    }
    else res.status(200).send({error: createFolderRes});
}