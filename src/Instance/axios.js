import axios from "axios"


export default axios.create({
    baseURL: "https://stroom-api.onrender.com",
    headers: {
        'Access-Control-Allow-Origin': 'https://st-room-inventory.onrender.com',

    },

})