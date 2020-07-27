const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Problem = new mongoose.Schema({
	complaint: {
		type: String
		
	},
	email: {
		type: String
	},
});


module.exports = mongoose.model("problem", Problem);