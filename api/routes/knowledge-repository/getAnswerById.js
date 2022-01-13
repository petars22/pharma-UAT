module.exports = function getAnswerById(data, res) {
    global.db.executeQuery(
        `SELECT * FROM answers WHERE id = ?;`,
        [
            data.id
        ]
    ).then(function(rows) {
        res.status(200).send(rows);
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}