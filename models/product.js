const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price:{
    type:Number
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };