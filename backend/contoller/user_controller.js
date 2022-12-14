const User = require('../model/user_schema');

const crypto = require('crypto');

const wrapAsync = require('../error_handler/wrapAsync');

const ErrorHandler = require('../error_handler/ErrorHandler');

const sendToken = require('../utils/jwtToken');
const Email = require('../utils/sendEmail');

// registration
exports.createuser = wrapAsync(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: 'gdfgdf',
      url: 'hgfhfghfghgfhfgfgh',
    },
  });
  sendToken(user, 201, res);
});

// login
exports.loginUser = wrapAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //
  if ((!email, !password)) {
    return next(new ErrorHandler('please enter username and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');
  // const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHandler('invalid username or password', 400));
  }

  // check if password is correct
  const isPasswordMatch = await user.comparePassword(password);
  console.log(isPasswordMatch);
  if (!isPasswordMatch) {
    return next(new ErrorHandler('invalid username or password', 400));
  }
  sendToken(user, 200, res);
});

// for logout
exports.logout = wrapAsync(async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({ success: true, message: 'Logout' });
});

// forgot password

//
exports.forgotPassword = wrapAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler('Email Id is not register', 404));
  }

  // get reset token
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  // Create reset password url
  const resetUrl = `${req.protocol}://${req.get(
    'host'
  )}/password/reset/${resetToken}`;

  const message = `Your reset password token is as follow:\n\n${resetUrl}`;

  try {
    mail = {
      from: process.env.SMTP_FROM_EMAIL,
      to: user.email,
      // to: 'msdesai32@gmail.com',
      subject: 'MD-Shop Password Recovery',
      text: message,
    };

    const output = await Email.sendMail(mail);
    console.log(output);
    res.status(200).json({
      success: true,
      message: `Email sent to: ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});

exports.resetPassword = wrapAsync(async (req, res, next) => {
  // Hash URL token
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        'Password reset token is invalid or has been expired',
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler('Password does not match', 400));
  }

  // Setup new password
  user.password = req.body.password;

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

// admin
exports.getalluser = wrapAsync(async (req, res) => {
  res.json('getalluser route is runnin');
});

exports.getsingleuser = wrapAsync(async (req, res) => {
  res.json('getsingleuser route is runnin');
});

exports.deletesingleuser = wrapAsync(async (req, res) => {
  res.json('deletesingleuser route is runnin');
});
