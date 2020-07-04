const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    userid: String,
    name: String,
    price: String,
    billingaddress: String,
    billingnumber: String,
    ordernumber: String,
    dispatched: String,
    quantity: Number,
    grandtotal:String,
    image:String
});
module.exports = mongoose.model('Order', orderSchema);