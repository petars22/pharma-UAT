module.exports = function deleteIndication(data, res) {
    global.db.executeQuery(
        `
            DELETE FROM indications
            WHERE id = ?;

            DELETE FROM activities
            WHERE indication_id = ?;

            DELETE FROM activity_history
            WHERE indication_id = ?;
        `,
        [
            data.id,
            data.id,
            data.id
        ]
    ).then(function(rows) {
        res.status(200).send("Successfully deleted indication and all connected activities!");
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}