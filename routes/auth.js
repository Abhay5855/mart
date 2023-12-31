
const express = require("express");
const router = express.Router();
const {signup, login, signout} = require("../controllers/auth");
const { isSignedIn } = require("../middlewares/authenticate");


// Sigup
router.post("/register" , signup);

// Login
router.post("/login", login);

// Logout 
router.post("/logout",  signout);

module.exports = router;
