import callApi from "../../../utils/functions/callApi";

export default async function getData(
    brandId,
    indicationId,
    year,
    setData
) {
    let output = {
        activities: [],
        notes: {},
    };

    output.activities = await callApi(
        "GET",
        "activity/getActivities?" +
        `brandId=${brandId}` +
        `&indicationId=${indicationId}`
    );

    const notesRes = await callApi(
        "GET",
        "activity/getNotes?" +
        `year=${year}` +
        `&brandId=${brandId}` +
        `&indicationId=${indicationId}`
    );

    const warningsRes = await callApi(
        "GET",
        "activity/getWarnings?" +
        `brandId=${brandId}` +
        `&indicationId=${indicationId}`
    );

    output.activities.forEach(activity => output.notes[activity.id] = {});
    
    if(notesRes.length > 0) {
        for(let i = 0; i < notesRes.length; i++) {
            if(output.notes[notesRes[i].activity_id]) {
                if(!output.notes[notesRes[i].activity_id][notesRes[i].month]) output.notes[notesRes[i].activity_id][notesRes[i].month] = [];
    
                output.notes[notesRes[i].activity_id][notesRes[i].month].push({
                    id: notesRes[i].id,
                    countryId: notesRes[i].country_id,
                    note: notesRes[i].note,
                    month: notesRes[i].month,
                    year: notesRes[i].year
                });
            }
        }
    }
    
    let index;
    if(warningsRes.length > 0) {
        for(let i = 0; i < warningsRes.length; i++) {
            index = output.activities.findIndex(a => a.id === warningsRes[i].activity_id);

            if(index > -1) output.activities[index].warning = warningsRes[i];
        }
    }

    setData(output);
}