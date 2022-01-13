module.exports = function getIndications(data, res) {
    global.db.executeQuery(
        `SELECT * FROM indications;`
    ).then(function(rows) {
        res.status(200).send(rows);
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}