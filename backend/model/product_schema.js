const mongoose = require('mongoose');
const product_schema = new mongoose.Schema({
  name: { type: String, required: [true, 'please Enter Product Name'] },
  desc: { type: String, required: [true, 'please Enter Product Description'] },
  price: {
    type: Number,
    required: [true, 'please Enter Product price'],
    maxLength: [5, 'price cant be greater than 99000'],
  },
  rating: { type: Number, default: 0 },
  images: [
    {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  category: {
    type: String,
    required: [true, 'please Enter Product category'],
    // enum: ['shoes','hat'],
  },
  stock: {
    type: Number,
    required: [true, 'please Enter Product Stock'],
    maxLength: [2, 'max is 99'],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', product_schema);
