const uploadFiles = require("../../utils/file-manipulation/uploadFiles");

module.exports = function addAnswer(files, data, res) {
    const uploadResponse = uploadFiles(`${data.brandId}/${data.indicationId}/answers/`, files);
    //TODO implement error handling for upload
    if(uploadResponse.errors.length > 0) {

    }

    global.db.executeQuery(
        `
            INSERT INTO answers(
                id,
                brand_id,
                indication_id,
                question,
                answer,
                answer_date,
                sources,
                origin,
                category,
                similar_question,
                created_by
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?);
        `,
        [
            new require("uuid").v1(),
            data.brandId,
            data.indicationId,
            data.question,
            data.answer,
            data.answerDate,
            uploadResponse.sources,
            data.origin,
            data.category,
            data.similarQuestion,
            data.username
        ]
    ).then(function(rows) {
        res.status(200).send("Successfully added asnwer!");
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}