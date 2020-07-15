const mongoose = require('mongoose');
const Comment = mongoose.Schema({

    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register',
        required: true
    },

    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    actcomment: String,
    email:String

})
module.exports = mongoose.model('comment', Comment);