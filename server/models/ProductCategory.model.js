const mongoose = require("mongoose");

const ProductCategoryScheme = mongoose.Schema({
  name: {
    type: String,
    minLength: 1,
    maxLength: 100,
    unique: true,
  },
  order: Number,
});

module.exports = mongoose.model("ProductCategory", ProductCategoryScheme);
