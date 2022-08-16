const express = require('express');
const router = express.Router();

const {
  createorder,
  getallorder,
  getsingleorder,
  deletesingleorder,
} = require('../contoller/order_controller');

router.post('/create', createorder);
router.get('/getall', getallorder);
router.put('/getsingle/:id', getsingleorder);
router.delete('/deletesingle/:id', deletesingleorder);

module.exports = router;
