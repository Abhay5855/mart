const User = require("../models/users/user");
var jwt = require("jsonwebtoken");
const {
  userValidator,
} = require("../validators/user");

// Register user
exports.signup = (req, res) => {


  // Error handling
  const {error} = userValidator.validate(req.body);

  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "Not able to save user in DB",
      });
    }
    res.json({
      email: user?.email,
      id: user?._id,
      last_name: user?.last_name,
      first_name: user?.first_name,
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "Email does not exist",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(400).json({
        err: "Password do not match",
      });
    }

    //Save the token
    var token = jwt.sign({ _id: user._id }, "shhhhh");

    res.cookie("token", token, { expire: new Date() + 9999 });

    const { _id, email, role } = user;

    return res.json({
      token,

      user: { _id, email, role },
    });
  });
};

// Logout
exports.signout = async (req, res) => {
  res.clearCookie("token");

  return res.json({
    message: "User logout successfully",
  });
};
