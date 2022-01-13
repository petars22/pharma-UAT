module.exports = function getNotes(data, res) {
    global.db.executeQuery(
        `
            SELECT * FROM activity_history
            WHERE
                year = ?
                AND brand_id = ?
                AND indication_id = ?;
        `,
        [
            data.year,
            data.brandId,
            data.indicationId
        ]
    ).then(function(rows) {
        res.status(200).send(rows);
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}