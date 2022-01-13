module.exports = function getDocuments(data, res) {
    let filtersQuery = "";
    let filtersArray = [];
    
    if(data.filters) {
        const filters = JSON.parse(data.filters);
        if(filters.search) {
            filtersQuery += `AND (question LIKE '%${filters.search}%' OR answer LIKE '%${filters.search}%')`;
        }
    }

    global.db.executeQuery(
        `
            SELECT * FROM documents
            WHERE
                brand_id = ?
                AND indication_id = ?
                ${filtersQuery}
            ORDER BY date_created DESC;
        `,
        [
            data.brandId,
            data.indicationId,
            ...filtersArray
        ]
    ).then(function(rows) {
        res.status(200).send(rows);
    }).catch(function(error) { console.log(error); res.status(400).send(error); });
}