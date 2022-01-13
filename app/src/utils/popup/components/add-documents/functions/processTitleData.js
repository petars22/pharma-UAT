export default function processTitleData(title) {
    const data = {
        title: title.trim(),
        cohort: getSpecificData("cohort", title),
        analysisSet: getSpecificData("analysisSet", title),
        endpoint: getSpecificData("endpoint", title)
    };

    return data;
}

function getSpecificData(key, title) {
    let output = "";
    const lowercaseTitle = title.toLowerCase();

    switch(key) {        
        case "cohort":
            if(lowercaseTitle.indexOf("cohort 1") > - 1) output = "Cohort 1";
            if(lowercaseTitle.indexOf("cohort 2") > - 1) output = "Cohort 2";
            if(lowercaseTitle.indexOf("cohort 3") > - 1) output = "Cohort 3";
            break;
        
        case "analysisSet":
            if(lowercaseTitle.indexOf("mitt") > - 1) output = "mITT";
            if(lowercaseTitle.indexOf("ias") > - 1 || lowercaseTitle.indexOf("inferential analysis set") > - 1) output = "IAS";
            if(lowercaseTitle.indexOf("sas") > - 1 || lowercaseTitle.indexOf("safety analysis set") > - 1) output = "SAS";
            if(lowercaseTitle.indexOf("fas") > - 1 || lowercaseTitle.indexOf("full analysis set") > - 1) output = "FAS";
            break;

        case "endpoint":
            if(lowercaseTitle.indexOf("best overall response") > - 1) output = "Best Overall Response";
            if(lowercaseTitle.indexOf("duration of response") > - 1) output = "Duration Of Response";
            if(lowercaseTitle.indexOf("objective response rate") > - 1) output = "Objective Response Rate";
            if(lowercaseTitle.indexOf("overall survival") > - 1) output = "Overall Survival";
            if(lowercaseTitle.indexOf("progression-free survival") > - 1) output = "Progression-Free Survival";
            if(lowercaseTitle.indexOf("time") > - 1) output = "Time";
            if(lowercaseTitle.indexOf("safety") > - 1) output = "Safety";
            break;

        default:
            break;
    }

    return output;
}