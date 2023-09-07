const expressJwt = require("express-jwt");

exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id === req.auth._id;

  if (!checker) {
    return res.status(403).json({
      error: "Access Denied",
    });
  }

  next();
};

exports.isSignedIn = expressJwt({
  secret: "shhhhh",
  userProperty: "auth",
});
