module.exports = function deleteWarning(data, res) {
    global.db.executeQuery(
        `
            DELETE FROM warnings
            WHERE id = ?;
        `,
        [
            data.id
        ]
    ).then(function(rows) {
        res.status(200).send("Successfully deleted warning!");
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}