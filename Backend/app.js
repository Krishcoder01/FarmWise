// Imports

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const axios = require('axios');
const connectDb = require('./config/db');


//routes
const userRoutes = require('./routes/userRoutes');
const cropRoutes = require('./routes/cropRoutes');
const weatherRoutes = require('./routes/weatherRoutes');





// Configurations
dotenv.config();

// Database Connect
connectDb();


// Middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set('view engine','ejs')




// Routes

app.get('/', async (req, res) => {
    // res.send('Welcome to the Weather App Of FarmWise 🙇‍♂️');
    res.send("Welocome to the Weather App Of FarmWise 🙇‍♂️");
});


app.use('/api/user' , userRoutes);
app.use('/api/crop' , cropRoutes);
app.use('/api/weather' , weatherRoutes);



// Server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} 🚀🚀`);
});