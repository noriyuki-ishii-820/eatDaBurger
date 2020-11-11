var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// get all data in the db

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

// post new ones from user inputs

router.post("/api/burgers", function (req, res) {
  burger.insertOne([req.body.burger_name], function () {
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var id = req.prams.id;
  burger.updateOne(id, function () {
    res.direct("/");
  });
});

module.exports = router;
