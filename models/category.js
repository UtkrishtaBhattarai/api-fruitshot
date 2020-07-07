const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Category = new mongoose.Schema({
	categoryName: {
		type: String,
		unique: true,
	}
});


module.exports = mongoose.model("categoryName", Category);