const mongoose = require('mongoose');

const mandiPriceSchema = new mongoose.Schema({
    crop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crop',
        required: true
    },
    price : [{
        location: {
            type: String,
            required: true},
        value: {
            type: Number,
            required: true
        }
    }]
});

module.exports = mongoose.model('MandiPrice', mandiPriceSchema);