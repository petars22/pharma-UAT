module.exports = function getWarnings(data, res) {
    global.db.executeQuery(
        `
            SELECT * FROM warnings
            WHERE
                brand_id = ?
                AND indication_id = ?
                AND active = 1;
        `,
        [
            data.brandId,
            data.indicationId
        ]
    ).then(function(rows) {
        res.status(200).send(rows);
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}