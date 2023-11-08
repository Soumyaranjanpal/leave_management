const User = require("../model/userSchema");
const ErrorHandler = require("../utils/errorHandler");

module.exports = {
  async createUser(req, res, next) {
    console.log(req.body);
    try {
      const { user_name, password, role, email } = req.body;
      console.log(req.body);
      const existentUser = await User.findOne({ email });
      if (!existentUser) {
        const user = await User.create({
          user_name,
          password,
          role
        });
        return res.json(user);
      }
      return next(new ErrorHandler({ message: "User Exists", statusCode: 404 }))
    } catch (err) {
      throw next(new ErrorHandler({ message: err.message, statusCode: 500 }))
    }
  },
  async listUser(req, res) {
    try {
      const existentUser = await User.find();
      if (existentUser) {
        return res.json(existentUser);
      }
      return res.status(404).json({
        message: 'user not found'
      })
    } catch (err) {
      throw Error(`Error While registering new user: ${err}`)
    }
  }
}

