module.exports = function deleteNote(data, res) {
    global.db.executeQuery(
        `
            DELETE FROM activity_history
            WHERE id = ?;
        `,
        [
            data.id
        ]
    ).then(function(rows) {
        res.status(200).send("Successfully deleted note!");
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}