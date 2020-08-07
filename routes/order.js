const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Order = require("../models/order");

router.post("/addorder", (req, res, next) => {
  console.log(req.body);
  Order.create({
    userid: req.body.userid,
    billingaddress: req.body.billingaddress,
    billingnumber: req.body.billingnumber,
    price: req.body.price,
    name: req.body.name,
    ordernumber: req.body.ordernumber,
    grandtotal:req.body.grandtotal,
    dispatched: false,
    quantity: req.body.quantity
  })
    .then(order => {
      res.json({ status: "Product Added!" });
    })
    .catch(next);
});
router.post("/addorder1", (req, res, next) => {
  console.log(req.body);
  Order.create({
    userid: req.body.userid,
    grandtotal:req.body.grandtotal,
    billingaddress: req.body.billingaddress,
    billingnumber: req.body.billingnumber,
    price: req.body.products.price,
    name: req.body.products.name,
    image:req.body.products.image,
    ordernumber: req.body.ordernumber,
    dispatched: "no",
    quantity: req.body.quantity,
    orderdate:Date.now()
  })
    .then(order => {
      res.json({ status: "Product Added!" });
    })
    .catch(next);
});
router.get("/checkorder/:id", (req, res, next) => {
  Order.find({ userid: req.params.id })
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
router.get("/getorder", (req, res, next) => {
  Order.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
router.get("/orderget/:id", function(req, res, next) {
    console.log(req.params.id);
    Order.findOne({ ordernumber: req.params.id })
      .then(order => {
          console.log(order.dispatched)
        if (order.dispatched == "yes") {
          res.send({ status: "Successfully Dispatched" });
        } else if (order.dispatched == "no") {
          res.send({ status: "no" });
        } else {
          res.send({ status: "Not Dispatched" });
        }
      })
      .catch(err => {
          console.log("vetena")
        res.send({status:"vetena"})
      });
  });
router.put("/updatestatus/:id", function(req, res, next) {
    var id = req.params.id;
    Order.findOne({ _id: id }, function(err, foundObject) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        if (!foundObject) {
          res.status(404).send();
        } else {
          if (req.body.dispatched) {
            foundObject.dispatched = req.body.dispatched;
          }
  
          foundObject.save(function(err, updatedObject) {
            if (err) {
              console.log(err);
              res.status(500).send();
            } else {
              res.send(updatedObject);
            }
          });
        }
      }
    });
  });


  router.delete('/deleteorder/:id', function (req, res) {
    Order.findByIdAndDelete(req.params.id, req.body, function (err, order) {
        if (err) return next(err);
        res.json(Order);
    });
});

module.exports = router;