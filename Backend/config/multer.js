const multer = require('multer');
const path = require('path');

// Set up storage engine
const sorage = multer.memoryStorage({});

// File filter to allow only images
module.exports = upload = multer({ storage: sorage });