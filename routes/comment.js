const express = require('express');
const mongoose = require('mongoose');
const Comment = require('../models/comment');
const router = new express.Router();
const bodyParser = require('body-parser');
var app = express();
const Product = require('../models/comment');
const auth = require('../auth')


router.get('/', function (req, res) {
    Cart.find()
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


router.get('/:id', function (req, res) {
    Comment.find({productid:req.params.id})
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


router.post('/addcomment', (req, res, next) => {
    Comment.create({
        productid: req.body.product._id,
        userid: req.body.userid,
        actcomment: req.body.actcomment,
       email:req.body.email
    }).then((comment) => {
        console.log(req.body);
        res.json({ status: "Comment Added!" });
    }).catch(next);
});

router.delete('/deletecomment/:id', function (req, res) {
    Cart.findByIdAndDelete(req.params.id, req.body, function (err, register) {
        if (err) return next(err);
        res.json(register);
    });
});


module.exports = router;