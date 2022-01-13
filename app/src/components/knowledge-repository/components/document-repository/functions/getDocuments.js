import callApi from "../../../../../utils/functions/callApi";


export default async function getDocuments(brandId, indicationId, filters, setDocuments) {    
    const hasFilters = Object.keys(filters).length > 0;
    const res = await callApi(
        "GET",
        "knowledgeRepository/getDocuments?" +
        `brandId=${brandId}` +
        `&indicationId=${indicationId}` +
        (hasFilters ?
            `&filters=${encodeURIComponent(JSON.stringify(filters))}` : "")
    );

    if(res) setDocuments(res);
    //highlightSearchStatement(filters.search);
}
