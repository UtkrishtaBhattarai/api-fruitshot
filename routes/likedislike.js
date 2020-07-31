const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const LikeDislike = require("../models/like_dislike");

router.post("/like", (req, res, next) => {
    console.log(req.body+"ma ho");
    return;
  LikeDislike.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    specification: req.body.specification,
    categoryid: req.body.categoryid
  })
    .then(product => {
      res.json({ status: "Product Added!" });
    })
    .catch(next);
});


module.exports = router;