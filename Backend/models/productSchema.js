const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    quantity : {
        type : Number,
        required : true,
        default : 1
    },
    type : {
        type : String,
        enum : ['machine' , 'fertilizer', 'pesticide', 'seed' , 'plant'],
        required : true
    }
});

module.exports = mongoose.model('Product', productSchema);
