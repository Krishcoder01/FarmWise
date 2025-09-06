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
    bestPrice : {
        type : Number,
        required : true
    },  
    type : {
        type : String,
        enum : ['machine' , 'fertilizer', 'pesticide', 'seed' , 'plant'],
        required : true
    },
    seller : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Seller',
        required : true

    }
});

module.exports = mongoose.model('Product', productSchema);
