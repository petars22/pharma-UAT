import callApi from "../../../../../utils/functions/callApi";
import highlightSearchStatement from "../../../functions/highlightSearchStatement";

export default async function getAnswers(brandId, indicationId, filters, setAnswers) {
    const hasFilters = Object.keys(filters).length > 0;
    const res = await callApi(
        "GET",
        "knowledgeRepository/getAnswers?" +
        `brandId=${brandId}` +
        `&indicationId=${indicationId}` +
        (hasFilters ?
            `&filters=${encodeURIComponent(JSON.stringify(filters))}` : "")
    );

    if(res) setAnswers(res);
    highlightSearchStatement(filters.search);
}