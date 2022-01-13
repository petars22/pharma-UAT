const uploadFiles = require("../../utils/file-manipulation/uploadFiles");

module.exports = function addDocument(files, data, res) {
    const uploadResponse = uploadFiles(`${data.brandId}/${data.indicationId}/documents/`, files);
    console.log(data);

    global.db.executeQuery(
        `
            INSERT INTO documents(
                id,
                brand_id,
                indication_id,
                title,
                cohort,
                analysis_set,
                endpoint,
                data_cutoff_date,
                document,
                created_by
            ) VALUES (?,?,?,?,?,?,?,?,?,?);
        `,
        [
            new require("uuid").v1(),
            data.brandId,
            data.indicationId,
            data.title,
            data.cohort,
            data.analysisSet,
            data.endpoint,
            data.dataCutoffDate,
            uploadResponse.sources,
            data.username
        ]
    ).then(function(rows) {
        res.status(200).send("Successfully added asnwer!");
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}