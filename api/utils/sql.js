const mysql = require('mysql');

/*const con = new mysql.createPool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    multipleStatements: true
});*/

const con = new mysql.createPool({
    user: "pharmaApp",
    host: "pharma-app.cxnhxqmqyrfc.eu-central-1.rds.amazonaws.com",
    password: "Aa123456!",
    port: 3306,
    database: "pharma-app",
    multipleStatements: true
});

exports.executeQuery = function (query, params) {
    return new Promise(function (resolve, reject) {
        con.getConnection(function (error, connection) {
            if(error) return reject(error);

            connection.query(query, params, function (error, results) {
                connection.release();

                if(error) {
                    return reject(error);
                }

                return resolve(results);
            });
        });
    });
}