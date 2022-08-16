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
router.post('/create', createproduct);
router.put('/updatesingle/:id', updatesingleproduct);
router.get('/getall', getallproduct);

router.get('/getsingle/:id', getsingleproduct);
router.delete('/deletesingle/:id', deleteproduct);
router.delete('/deleteall', deleteallproduct);
module.exports = router;
