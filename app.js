require("dotenv").config();

const express = require("express");

const moongoose = require("mongoose");

const app = express();

const port = 3000;


// Start the servers

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
