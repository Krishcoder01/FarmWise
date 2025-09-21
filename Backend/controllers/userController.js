const User = require('../models/userSchema');
const cropSchema = require('../models/cropsSchema');
const { generateHashPassword, comparePassword } = require('../utils/function');
const { generateToken } = require('../utils/function');
const {getLatLong}= require('../services/openWeather')


const signupController = async (req, res) => {
    try {
        const { name, phone, password , state , city , crops } = req.body;
        if (!name || !phone || !password || !state || !city || !crops) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
    
        const hashedPassword = await generateHashPassword(password);
        const { lat, lon } = await getLatLong(city, state);
        
        const newUser = new User({
            name,
            phone,
            password: hashedPassword,
            state,
            city,
            crops,
            lat,
            lng : lon
        });

        const token = generateToken(newUser);
        await newUser.save();
    
        res.status(201).json({ message: "User registered successfully", token: token });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error at Signup" + error.message });// + error.message
    }
}

const loginController = async (req, res) => {

    try {
        const { phone, password } = req.body;
        if (!phone || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ phone });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        if (await comparePassword(password, user.password) === false) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = generateToken(user);
        res.status(200).json({ message: "Login successful", token : token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error at Login" + error.message });// + error.message
    }
}

// async function profileController(req, res) {

// }



module.exports = {signupController , loginController};