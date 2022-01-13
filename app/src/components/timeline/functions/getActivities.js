import callApi from "../../../utils/functions/callApi";

export default async function getActivities(data) {
    const res = await callApi(
        "GET",
        "activity/getActivities?" +
        `brandId=${data.brandId}` +
        `&indicationId=${data.indicationId}`
    );

    return res;
}