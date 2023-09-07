const User = require("../models/users/user");

exports.signup = (req, res) => {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to save in the DB",
      });
    }

    res.json({
      email: user.email,
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
    });
  });
};
