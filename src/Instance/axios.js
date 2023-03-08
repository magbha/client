import axios from "axios"


export default axios.create({
    baseURL: "https://stroom-api.onrender.com",
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})