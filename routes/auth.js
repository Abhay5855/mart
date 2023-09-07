
const express = require("express");
const router = express.Router();
const {signup} = require("../controllers/auth");




// Sigup

router.get("/register" , signup);

module.exports = router;
