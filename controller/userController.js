const User = require("../model/userSchema");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");


exports.createUser =
  catchAsyncError(async (req, res, next) => {
    console.log(req.body);

    const { user_name, password, role, email } = req.body;
    console.log(req.body);
    const existentUser = await User.findOne({ email });
    if (!existentUser) {
      const user = await User.create({
        user_name,
        password,
        email,
        role
      });
      return res.json(user);
    }
    return next(new ErrorHandler(
      'user already Exists',
      400
    ))
  });

exports.listUser = catchAsyncError(async (req, res) => {

  const existentUser = await User.find();
  if (existentUser) {
    return res.json(existentUser);
  }
  return next(new ErrorHandler(
    'No User Found',
    404
  ))
}
)

