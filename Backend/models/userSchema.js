const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    crops :{
        type : [mongoose.Schema.Types.ObjectId] ,
        ref : 'Crop',
        required : true
    },
    state :{
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    lat : {
        type: Number,
        // required: true  
    },
    lng : {
        type: Number,
        // required: true
    }
});

module.exports = mongoose.model('User', userSchema);