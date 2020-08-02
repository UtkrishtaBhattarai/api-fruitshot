const mongoose = require('mongoose');
const Cart = mongoose.Schema({

    //cart model
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
    name: String,
    price: String,
    description: String,
    usage: String,
    image:String

})
module.exports = mongoose.model('cart', Cart);