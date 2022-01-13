module.exports = function createActivity(data, res) {
    global.db.executeQuery(
        `
            INSERT INTO activities (
                id,
                name,
                brand_id,
                indication_id,
                created_by,
                updated_by
            ) VALUES (?, ?, ?, ?, ?, ?)
        `,
        [
            new require("uuid").v1(),
            data.name,
            data.brandId,
            data.indicationId,
            data.username,
            data.username
        ]
    ).then(function(rows) {
        res.status(200).send("Successfully created activity!");
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}