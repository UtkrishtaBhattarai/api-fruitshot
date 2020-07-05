const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Admin = new mongoose.Schema({
	email: {
        type: String
	},
	password: {
		type: String
	}
});


module.exports = mongoose.model("admin_login", Admin);