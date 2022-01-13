module.exports = function addNote(data, res) {
    global.db.executeQuery(
        `
            INSERT INTO activity_history (
                id,
                country_id,
                note,
                activity_id,
                month,
                year,
                brand_id,
                indication_id,
                created_by,
                updated_by
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `,
        [
            new require("uuid").v1(),
            data.countryId,
            data.note,
            data.activityId,
            data.month,
            data.year,
            data.brandId,
            data.indicationId,
            data.username,
            data.username
        ]
    ).then(function(rows) {
        res.status(200).send("Successfully added note to activity!");
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}