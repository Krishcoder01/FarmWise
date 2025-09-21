const express =  require('express');
const router = express.Router();
const upload = require('../config/multer');

//Controllers
const {addCrop , getCrops} = require('../controllers/cropController');

router.post('/addCrop' , upload.single('image'), addCrop);
router.get('/getCrops' , getCrops);

module.exports = router;