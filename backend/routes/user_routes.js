const express = require('express');
const router = express.Router();

const {
  createuser,
  getalluser,
  getsingleuser,
  deletesingleuser,
} = require('../contoller/user_controller');
router.post('/create', createuser);
router.get('/getall', getalluser);
router.put('/getsingle/:id', getsingleuser);
router.delete('/deletesingle', deletesingleuser);

module.exports = router;
