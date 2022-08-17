const express = require('express');
const router = express.Router();

const {
  createproduct,
  getallproduct,
  getsingleproduct,
  deleteproduct,
  deleteallproduct,
  updatesingleproduct,
} = require('../contoller/product_controller');

const { isAuthenticatedUser, authorizeRoles } = require('../utils/auth');

const sam = (req, res, next) => {
  console.log('hello');
  const { token } = req.cookies;
  console.log(token);
};
router.post('/create', isAuthenticatedUser, createproduct);
router.put('/updatesingle/:id', updatesingleproduct);
router.get('/getall', isAuthenticatedUser, getallproduct);

router.get('/getsingle/:id', getsingleproduct);
router.delete(
  '/deletesingle/:id',
  isAuthenticatedUser,
  authorizeRoles('admin'),
  deleteproduct
);
router.delete(
  '/deleteall',
  isAuthenticatedUser,
  authorizeRoles('admin'),
  deleteallproduct
);
module.exports = router;
