module.exports = function getActivities(data, res) {
    global.db.executeQuery(
        `
            SELECT * FROM activities
            WHERE
                brand_id = ?
                AND indication_id = ?
            ORDER BY order_index;
        `,
        [
            data.brandId,
            data.indicationId,
        ]
    ).then(function(rows) {
        res.status(200).send(rows);
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}