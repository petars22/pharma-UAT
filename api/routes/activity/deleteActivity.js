module.exports = function deleteActivity(data, res) {
    global.db.executeQuery(
        `
            DELETE FROM activities
            WHERE id = ?;

            DELETE FROM activity_history
            WHERE activity_id = ?;
        `,
        [
            data.id,
            data.id
        ]
    ).then(function(rows) {
        res.status(200).send("Successfully deleted activity and all connected notes!");
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}