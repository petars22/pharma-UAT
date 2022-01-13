import callApi from "../../../utils/functions/callApi";

export default async function getBrandsData(setBrandsData) {
    let brands, indications;
    brands = await callApi(
        "GET",
        "administration/getBrands"
    );
    
    if(brands) {
        let temp = {};
        indications = await callApi(
            "GET",
            "administration/getIndications"
        );

        for(let i = 0; i < indications.length; i++) {
            if(!temp[indications[i].brand_id]) temp[indications[i].brand_id] = [];

            temp[indications[i].brand_id].push(indications[i]);
        }

        for(let i = 0; i < brands.length; i++) {
            if(temp[brands[i].id]) brands[i].indications = temp[brands[i].id];
            else brands[i].indications = [];
        }
    }

    setBrandsData(brands);
}