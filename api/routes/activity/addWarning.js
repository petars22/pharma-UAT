module.exports = function addWarning(data, res) {
    global.db.executeQuery(
        `
            INSERT INTO warnings (
                id,
                brand_id,
                indication_id,
                activity_id,
                warning,
                created_by,
                updated_by
            ) VALUES (?, ?, ?, ?, ?, ?, ?);
        `,
        [
            new require("uuid").v1(),
            data.brandId,
            data.indicationId,
            data.activityId,
            data.warning,
            data.username,
            data.username
        ]
    ).then(function(rows) {
        res.status(200).send("Successfully added warning to activity!");
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}