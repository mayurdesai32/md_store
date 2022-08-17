const mongoose = require('mongoose');
const product_schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please Enter Product Name'],
    minLength: [2, ' min should be length of char is 2'],
    maxLength: [12, 'max should be  length of char is 12'],
  },
  desc: { type: String, required: [true, 'please Enter Product Description'] },
  price: {
    type: Number,
    required: [true, 'please Enter Product price'],
    min: [1, 'price cant be less than rs 1'],
    max: [100000, 'price cant be greater than rs 100001'],
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
    min: [0, ' cant be less than 0'],
    max: [100, 'max is 100'],
  },

  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', product_schema);
