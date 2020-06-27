const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const auth = require("./auth");
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const registerRoute = require("./routes/users");
const productRouter=require('./routes/products');
const uploadRouter = require('./routes/upload_route');


var app = express();
app.use(function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
});
app.use(morgan("tiny"));
app.use(express.json());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(
	bodyparser.urlencoded({
		extended: false
	})
);

require("./db/fruitshot");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/register", registerRoute);
app.use('/upload', uploadRouter);
app.use('/product', productRouter);

app.use(auth.verifyUser);

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.statusCode = 500;
	res.json({ status: err.message });
});

app.listen(4000);