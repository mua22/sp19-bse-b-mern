var express = require("express");
var router = express.Router();

router.get("/help", function (req, res, next) {
  res.render("help");
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "<h2>B Section</h2>" });
});

module.exports = router;
