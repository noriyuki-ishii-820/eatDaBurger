var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// get all data in the db

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// post new ones from user inputs

router.post("/burgers", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function () {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  var idBurger = "id = " + req.prams.id;
  burger.updateOne(
    {
      devoured: true,
    },
    idBurger,
    function (data) {
      res.direct("/");
    }
  );
});

module.exports = router;
