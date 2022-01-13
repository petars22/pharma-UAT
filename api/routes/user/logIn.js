module.exports = function logIn(data, res) {
    global.db.executeQuery(
        `
            SELECT *
            FROM users
            WHERE
                (username = ? OR email = ?)
                AND password = ?;
        `,
        [
            data.username,
            data.username,
            data.password
        ]
    ).then(function(rows) {
        if(rows.length === 1) res.status(200).send({
            email: rows[0].email,
            displayName: rows[0].display_name
        });
        else res.status(400).send({ error: "no user found" });
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}