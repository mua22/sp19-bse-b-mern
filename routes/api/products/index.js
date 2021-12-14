var express = require("express");
var router = express.Router();
const Product = require("../../../models/Product");

router.get("/", async function (req, res, next) {
  let products = await Product.find();
  res.send(products);
});

module.exports = router;
