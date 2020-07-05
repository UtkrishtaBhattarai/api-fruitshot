const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const auth = require("./auth");
const express = require("express");
const bcrypt = require("bcryptjs");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const registerRoute = require("./routes/users");
const productRouter = require("./routes/products");
const uploadRouter = require("./routes/upload_route");
const SliderRoute = require("./routes/slider_route");
const CartRoute = require("./routes/cart");
const OrderRoute = require("./routes/order");
const emailRoute = require("./routes/nodemailer");
const notificationRoute = require("./routes/notification");

var app = express();
app.use(function (req, res, next) {
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
    extended: false,
  })
);

require("./db/fruitshot");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/register", registerRoute);
app.use("/upload", uploadRouter);
app.use("/product", productRouter);
app.use("/slider", SliderRoute);
app.use("/cart", CartRoute);
app.use("/order", OrderRoute);
app.use("/email", emailRoute);
app.use("/notification", notificationRoute);
app.use(auth.verifyUser);

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/fruitshot";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let password1 = "admin123";
  bcrypt.hash(password1, 10, function (err, hash) {
    if (err) {
      throw new Error("Could not hash!");
    }

    var dbo = db.db("fruitshot");
    var myobj = { email: "admin123@gmail.com", password: hash };
    dbo.collection("admin_logins").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.statusCode = 500;
  res.json({ status: err.message });
});

app.listen(4000);
