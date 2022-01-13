var router = global.express.Router();
const methods = require("./methods.js");
const multer = require("multer");
const upload = multer({
    dest: "D:/projekti/pharma-app/uploaded-files"
});

router.get("/", function(req, res) {
    res.status(200).send("Pharma App Rest API ");
});

router.get("/:route/:method", function (req, res) {
    const route = req.params.route;
    const method = req.params.method;

    if (Object.keys(methods).includes(route) && Object.keys(methods[route]).includes(method)) methods[route][method](req.query, res);
    else res.status(404).send("Route Not Found");
});

router.post(
    "/shared/uploadFilesAndInsertData",
    upload.array("files", 40),
    (req, res) => {
        require(`./${req.body.path}`)(req.files, req.body, res);
    }
);

router.post("/:route/:method", function(req, res) {
    const route = req.params.route;
    const method = req.params.method;

    if(Object.keys(methods).includes(route) && Object.keys(methods[route]).includes(method)) 
        methods[`${route}`][`${method}`](method === "uploadFiles" ? req : req.body, res);
    else res.status(404).send("Route Not Found");
});

module.exports = router;