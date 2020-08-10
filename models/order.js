const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  //order model

  userid: String,
  name: String,
  price: String,
  billingaddress: String,
  billingnumber: String,
  ordernumber: String,
  dispatched: String,
  quantity: Number,
  grandtotal: String,
  image: String,
  orderdate: String,
});
module.exports = mongoose.model("Order", orderSchema);
