const express = require("express");
const mongoose = require("mongoose");
const Notification = require("../models/notification");
const router = new express.Router();
const bodyParser = require("body-parser");
var app = express();

router.get("/notifications", function (req, res) {
  Notification.find()
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
  Notification.create({
    postedDate: req.body.postedDate,
    endDate: req.body.endDate,
    description: req.body.description,
    title: req.body.title,
  })
    .then((product) => {
      res.json({ status: "Notification Added!" });
    })
    .catch(next);
});