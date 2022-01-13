module.exports = function deleteBrand(data, res) {
    global.db.executeQuery(
        `
            DELETE FROM brands
            WHERE id = ?;

            DELETE FROM indications
            WHERE brand_id = ?;

            DELETE FROM activities
            WHERE brand_id = ?;

            DELETE FROM activity_history
            WHERE brand_id = ?;
        `,
        [
            data.id,
            data.id,
            data.id,
            data.id
        ]
    ).then(function(rows) {
        res.status(200).send("Successfully deleted bran and all connected indications!");
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}