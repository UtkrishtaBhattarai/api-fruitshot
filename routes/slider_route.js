const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Slider = require("../models/slider");

router.post("/addslider", (req, res, next) => {
	Slider.create({
		image: req.body.image,
	})
		.then((slider) => {
			res.json({ status: "Slider Added!" });
		})
		.catch(next);
});

router.get("/getSlider", (req, res, next) => {
	Slider.find()
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

router.delete("/deleteslider/:id", function (req, res, next) {
	Slider.findByIdAndDelete(req.params.id).then((response) => {
		console.log("Slider deleted of " + req.params.id);
	});
});

router.get("/:id", function (req, res) {
	Slider.findById(req.params.id)
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

module.exports = router;
