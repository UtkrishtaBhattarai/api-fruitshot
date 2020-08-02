const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
   
    //likeanddislike model
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register',
        required: true
    },
    is_liked:false,
    is_disliked:false

});
module.exports = mongoose.model('likedislike', productSchema);