import axios from "axios"


export default axios.create({
    baseURL: "https://stroom-api.onrender.com",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    withCredentials: true,
    crossorigin:true
})