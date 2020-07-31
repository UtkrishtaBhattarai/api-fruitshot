const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const LikeDislike = require("../models/like_dislike");

router.post('/likeme', (req, res, next) => {
  console.log(req.body.productid);
  LikeDislike.create({
      productid: req.body.productid,
      userid: req.body.userid,
      is_liked:1,
      is_disliked:2
  }).then((cart) => {
      console.log(req.body);
      res.json({ status: "Like Added!" });
  }).catch(next);
});

router.delete('/deletecart/:id', function (req, res) {
  Cart.findByIdAndDelete(req.params.id, req.body, function (err, register) {
      if (err) return next(err);
      res.json(register);
  });
});
router.post("/checklike/:id", function (req, res) {
  console.log(req.params.id + "is prodict id ");
  console.log(req.body.userid + "is user id ")
  const pp = LikeDislike.find({ productid: req.params.id, userid: req.body.userid }).countDocuments().then(function (count) {
      if (count == 0) {
          res.send({ status: "addhere" });
      }
      else {
          res.send({ status: "cantadd" });
      }
  })
})

router.get("/likecount/:id", function (req, res) {
  const pp = LikeDislike.find({ is_liked: 1,productid:req.params.id  }).countDocuments().then(function (count) {
    res.status(200).json(count);
    console.log("akjdhasjkdhasjk dasjkhdkasjdh akjsdhaksjdh askjdhkasd hdsakj dhask"+count)
  })
})




router.post('/dislikeme', (req, res, next) => {
  console.log(req.body.productid);
  LikeDislike.create({
      productid: req.body.productid,
      userid: req.body.userid,
      is_disliked:1,
      is_liked:2
  }).then((cart) => {
      console.log(req.body);
      res.json({ status: "Dislike Added!" });
  }).catch(next);
});

router.post("/checkdislike/:id", function (req, res) {
  const pp = LikeDislike.find({ productid: req.params.id, userid: req.body.userid }).countDocuments().then(function (count) {
      if (count == 0) {
          res.send({ status: "addhere" });
      }
      else {
          res.send({ status: "cantadd" });
      }
  })
})

router.get("/dislikecount/:id", function (req, res) {
  const pp = LikeDislike.find({ is_disliked: 1,productid:req.params.id  }).countDocuments().then(function (count) {
    res.status(200).json(count);
    console.log("akjdhasjkdhasjk dasjkhdkasjdh akjsdhaksjdh askjdhkasd hdsakj dhask"+count)
  })
})



module.exports = router;