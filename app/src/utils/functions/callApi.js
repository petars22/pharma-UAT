import axios from 'axios';

export default async function callApi(method, path, data) {    
    if(method === "GET") {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}${path}`
        ).then(res => {
            return res.data;
        }).catch(error => { console.log(error) });

        return res;
    } 
    else if(method === "POST") {
        const res = axios.post(
            `${process.env.REACT_APP_API_URL}${path}`,
            data,
        ).then(res => {
            return res.data;
        }).catch(error => { console.log(error) });

        return res;
    }
};