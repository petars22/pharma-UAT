export default function getTitleFromRtfFile(file) {
    let temp = file.split("lastrow");
    let title = [];

    if(temp.length === 3) {
        temp = temp[1];
        temp = temp.split("rtlch");

        for(let i = 0; i < temp.length; i++) {
            if(temp[i].indexOf("f0") > -1) {
                let titlePart = temp[i].split("f0").pop();

                if(titlePart.indexOf("}") > -1) title.push(titlePart.split("}")[0].split("\\")[0]);
                else if(titlePart.indexOf("{") > -1) title.push(titlePart.split("{")[0].split("\\")[0]);
            }
        }
    }

    title = title.join("").replace("  ", " ");
    console.log(title);

    return title;
}
