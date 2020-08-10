const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Register = new mongoose.Schema({
  //user model
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  createddate: {
    type: Date,
  },
});

module.exports = mongoose.model("register", Register);
