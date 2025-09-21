const cloudinary = require('../config/cloudinary');

const uploadToCloudinary = (imageBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                resource_type: 'image',
                folder: 'crops'
            },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.secure_url);
                }
            }
        );

        stream.end(imageBuffer); 
    });
};

module.exports = {uploadToCloudinary};