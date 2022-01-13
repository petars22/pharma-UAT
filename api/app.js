require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
global.express = require("express");
global.basePath = __dirname;
const bodyParser = require("body-parser");
const app = global.express();
const port = process.env.PORT || 4300;
const routes = require("./routes/routes");
global.db = require("./utils/sql");

app.disable("etag");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Access-Control-Allow-Origin");
    next();
});

app.use("/uploaded-files", global.express.static(__dirname + "/uploaded-files"));
app.use("/", routes);

app.listen(port, () => {
});