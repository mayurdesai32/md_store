//
const wrapAsync = require('../error_handler/wrapAsync');
// const AppError = require('../error_handler/AppError');
const ErrorHandler = require('../error_handler/ErrorHandler');
const Product = require('../model/product_schema');

exports.createproduct = wrapAsync(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({ success: true, product });
});

exports.updatesingleproduct = wrapAsync(async (req, res, next) => {
  id = req.params.id;
  var product = await Product.findById(id);

  if (!product) {
    // return res.status(500).json({
    //   success: false,
    //   message: `product with this id :${id} not found`,
    // });
    return next(new ErrorHandler('Product not found', 404));
  }

  product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, product });
});

exports.getallproduct = wrapAsync(async (req, res, next) => {
  const product = await Product.find();

  res.status(200).json({ success: true, product });
});

exports.getsingleproduct = wrapAsync(async (req, res) => {
  id = req.params.id;
  const product = await Product.findById(id);
  console.log(product);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: `product with this id :${id} not found`,
    });
  }

  res.status(200).json({ success: true, product });
});

exports.deleteproduct = wrapAsync(async (req, res) => {
  try {
    id = req.params.id;
    var product = await Product.findById(id);
    if (!product) {
      return res.status(500).json({
        success: false,
        message: `product with this id :${id} not found`,
      });
    }
    product = await Product.deleteOne();
    res
      .status(200)
      .json({ success: true, message: `product with id ${id} deleted` });
  } catch (error) {
    console.log(e);
  }
});

exports.deleteallproduct = wrapAsync(async (req, res) => {
  console.log('hello');
  product = await Product.deleteMany();
  res.json({ success: true, message: `all product deleted` });
});
