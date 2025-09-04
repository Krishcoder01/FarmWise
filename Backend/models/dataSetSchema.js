const mongoose = require('mongoose');

const dataSetSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    },
    weather: {
        main: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    wind: {
        speed: {
            type: Number,
            required: true
        },
        deg: {
            type: Number,
            required: true
        }
    },
    rain: {
        "1h": {
            type: Number,
            required: true
        }
    },
    temperature: {
        current: {
            type: Number,
            required: true
        },
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        }
    },
    humidity: {
        type: Number,
        required: true
    },
    clouds :{
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('DataSet', dataSetSchema);
