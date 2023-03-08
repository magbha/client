import axios from "axios"


export default axios.create({
    baseURL: "https://stroom-api.onrender.com",
    headers: {
        'Access-Control-Allow-Origin': 'https://st-room-inventory.onrender.com',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    withCredentials: true,
})