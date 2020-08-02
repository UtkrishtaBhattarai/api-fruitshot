const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Admin model
const Admin = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
	},
	password: {
		type: String
	}
});


module.exports = mongoose.model("admin_login", Admin);