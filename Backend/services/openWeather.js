const axios = require('axios');

const getLatLong =  async (city , state) => {
    try {
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;
        const geoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}`;
        const response = await axios.get(geoUrl);
        const { lat, lon } = response.data.coord;
        return { lat, lon };
        
    } catch (error) {
        throw new Error("Error fetching latitude and longitude");
    }
}

module.exports = { getLatLong };