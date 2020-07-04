
const nodemailer=require("nodemailer");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
router.post("/email", (req, res, next) => {

    console.log(req.body)
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'fruitshot13@gmail.com',
      pass: 'fruitshot123#'
    }
  });
  
  var mailOptions = {
    from: 'fruitshot13@gmail.com',
    to: req.body.email,
    subject: 'Product Ordered Successfully',
    text: 'Hello'+" "+req.body.fname+ 'Your Product Named' +" "+req.body.products.name+ " "+"is now ordered  ."+" In order to track your order"+" "+
    "please use "+ req.body.nor + ".",
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
});

module.exports = router;