var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/"),
  function (req, res) {
    burger.all(function (data) {
      var burgerList = {
        burgers: data,
      };
      console.log(burgerList);
      res.render("index", burgerList);
    });
  };

// router.post("/"), function (req, res)...

// router.put("/"), function (req, res)...

module.exports = router;
