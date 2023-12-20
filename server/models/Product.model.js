const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    unique: true,
    maxLength: 255,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategory",
  },
  image: String,
  price: {
    type: Number,
    min: 0,
  },
  weight: {
    type: Number,
    min: 0,
  },
  description: {
    type: String,
    maxLength: 1024,
  },
  calories: {
    type: Number,
    min: 0,
  },
  proteins: {
    type: Number,
    min: 0,
  },
  fats: {
    type: Number,
    min: 0,
  },
  carbohydrates: {
    type: Number,
    min: 0,
  },
  composition: [String],
  allergens: [String],
});

module.exports = mongoose.model("Product", ProductSchema);
