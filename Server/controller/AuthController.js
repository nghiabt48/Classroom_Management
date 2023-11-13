const AppError = require('../utils/appError')
const { getUserData } = require('../router/OAuth')
const GiangVien = require('../model/GiangVienModel')
exports.protect = async function (req, res, next) {
  try {
    // Get token
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return next(
        new AppError('You are not logged in! Please log in to get access.', 401)
      );
    }

    // 2) Verification token
    const user_decoded = await getUserData(token);
    let currentUser
    // 3) Check if token is valid
    if (user_decoded) {
      currentUser = await GiangVien.findOne({ email: user_decoded.email });
      if (!currentUser) {
        // New user is logging in, so create a new one
        await GiangVien.create({
          email: user_decoded.email,
          name: user_decoded.name,
          picture: user_decoded.picture
        });
      }
    } else return next(
      new AppError(
        'Something went wrong, please log in again.',
        401
      )
    );

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();
  } catch (err) {
    res.status(401).json({
      status: 'failed',
      message: err.message
    })
  }
}