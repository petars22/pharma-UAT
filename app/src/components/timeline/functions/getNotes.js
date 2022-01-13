import callApi from "../../../utils/functions/callApi";

export default async function getNotes(
    brandId,
    indicationId,
    year,
    activityIds
) {
    let notes = {};
    activityIds.forEach(id => notes[id] = {});

    const res = await callApi(
        "GET",
        "activity/getNotes?" +
        `year=${year}` +
        `&brandId=${brandId}` +
        `&indicationId=${indicationId}`
    );
    
    if(res.length > 0) {
        for(let i = 0; i < res.length; i++) {
            if(notes[res[i].activity_id]) {
                if(!notes[res[i].activity_id][res[i].month]) notes[res[i].activity_id][res[i].month] = [];
    
                notes[res[i].activity_id][res[i].month].push({
                    id: res[i].id,
                    countryId: res[i].country_id,
                    note: res[i].note,
                    month: res[i].month,
                    year: res[i].year
                });
            }
        }
    }

    return notes;
}