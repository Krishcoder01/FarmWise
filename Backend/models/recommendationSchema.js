const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    date : {
        type : Date,
        required : true,
        default : Date.now
    },
    dataSets : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'DataSet',
        required : true
    }]
});

module.exports = mongoose.model('Recommendation', recommendationSchema);
