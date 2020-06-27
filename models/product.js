const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    description: String,
    usage: String

});
module.exports = mongoose.model('products', productSchema);