require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();

const port = 3000;

// Connect to the database
mongoose
  .connect("mongodb://127.0.0.1:27017/product", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err, "err");
  });

//Common Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Start the servers

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
