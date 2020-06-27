const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Register = new mongoose.Schema({
	fname: {
		type: String
	},
	lname: {
		type: String
	},
	address: {
		type: String
	},
	phone: {
		type: String
	},
	email: {
        type: String,
        required:true    
	},
	password: {
		type: String
	}
});

module.exports = mongoose.model("register", Register);