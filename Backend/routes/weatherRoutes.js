const express = require('express');
const router = express.Router();
const axios = require('axios');
const {tokenExtractor} = require('../utils/function')


//CONTROLLERS
const { getWeather } = require('../controllers/weatherController');


router.get('/getWeather', tokenExtractor, getWeather);


module.exports = router;