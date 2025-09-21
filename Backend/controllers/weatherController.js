const axios = require('axios');

const getWeather = async (req, res) => {
    try {
        const { lat, lng } = req.user;
        if (!lat || !lng) {
            return res.status(400).json({ message: "Latitude and Longitude are required" });
        }
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
        const response = await axios.get(weatherUrl);
        const weatherData = response.data;

        res.status(200).json({ weather: weatherData });
        
      

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error in fetching weather data" + error.message });
    }
}
module.exports = { getWeather };
