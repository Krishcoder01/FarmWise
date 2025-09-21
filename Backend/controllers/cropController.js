const Crop = require('../models/cropsSchema');
const { uploadToCloudinary } = require('../services/cloudinary');


const addCrop = async (req, res) => {
    try {

        const { name, season } = req.body;
        const image = req.file;
          const imageUrl = await uploadToCloudinary(image.buffer);
        console.log("Image uploaded at:", imageUrl);
        if (!name || !season || !image) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingCrop = await Crop.findOne({ name });
        if (existingCrop) {
            return res.status(400).json({ message: "Crop already exists" });
        }
        const newCrop = new Crop({ name, season, image: imageUrl });

        await newCrop.save();
        res.status(201).json({ message: "Crop added successfully", crop: newCrop });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" + error.message });
    }
}

const getCrops = async (req, res) => {
    try {
        const crops = await Crop.find();
        res.status(200).json({ crops });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" + error.message });
    }
}
module.exports = { addCrop, getCrops };