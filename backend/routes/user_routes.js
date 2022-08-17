const express = require('express');
const router = express.Router();

const {
  createuser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getalluser,
  getsingleuser,
  deletesingleuser,
} = require('../contoller/user_controller');

const { isAuthenticatedUser, authorizeRoles } = require('../utils/auth');

router.post('/create', createuser);

router.post('/login', loginUser);
router.get('/logout', isAuthenticatedUser, logout);
router.post('/password/forgot', forgotPassword);
router.put('/password/reset', resetPassword);
// authorizeRoles('admin'),
router.get('/getall', isAuthenticatedUser, getalluser);
router.put(
  '/getsingle/:id',
  isAuthenticatedUser,
  authorizeRoles('admin'),
  getsingleuser
);
router.delete(
  '/deletesingle',
  isAuthenticatedUser,
  authorizeRoles('admin'),
  deletesingleuser
);

module.exports = router;
