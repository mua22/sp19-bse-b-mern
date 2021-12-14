const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  price: String,
  color: String,
  department: String,
  description: String,
});

let Product = mongoose.model("Product", schema);

module.exports = Product;
