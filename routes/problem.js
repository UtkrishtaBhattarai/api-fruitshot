const express = require("express");
const mongoose = require("mongoose");
const Complaint = require("../models/problem");
const router = new express.Router();
const bodyParser = require("body-parser");
const nodemailer=require("nodemailer");
var app = express();

router.get("/complaints", function (req, res) {
  Complaint.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
router.post("/upload_complain", (req, res, next) => {
  Complaint.create({
    email:req.body.email,
    complaint:req.body.complaint
  })
    .then((complaint) => {
      res.json({ status: "Complaint Added!" });
    })
    .catch(next);

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
      subject: 'Complaint received',
      text: 'Hello'+" "+" "+req.body.email+ " "+"we have  now received yyour complaint  ."+" Will get back to you shortly"
      ,
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
});



module.exports=router;