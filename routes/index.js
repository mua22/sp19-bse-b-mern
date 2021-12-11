var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "<h2>B Section</h2>" });
});

module.exports = router;
