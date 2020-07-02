const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const slider = new mongoose.Schema({
	image: {
		type: String
	}
});

module.exports = mongoose.model("slider", slider);
