const express = require('express');
const router = express.Router();

//CONTROLLERS
const {loginController ,signupController} = require('../controllers/userController')


router.post('/signup' , signupController);
router.post('/login' , loginController);


module.exports = router;