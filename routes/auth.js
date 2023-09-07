
const express = require("express");
const router = express.Router();
const {signup, login} = require("../controllers/auth");


// Sigup
router.post("/register" , signup);

// Login
router.post("/login", login);

module.exports = router;
