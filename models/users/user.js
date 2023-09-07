const moongoose = require("mongoose");
const { Schema } = moongoose;
const crypto = require("crypto");

const { v4: uuidv4 } = require("uuid");

const userScheama = new Schema(
  {
    email: {
      type: "String",
      required: true,
      trim: true,
    },

    salt: String,

    first_name: {
      type: String,
      required: true,
      trim: true,
    },

    last_name: {
      type: String,
      required: true,
      trim: true,
    },

    profilePic: {
      type: String,
    },

    posts: {
      type: Array,
      default: [],
    },

    encrypt_password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Creating a virtual
userScheama
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4;
    this.encrypt_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

// Adding methods to the schema
userScheama.methods = {
  authenticate: function (plainPassword) {
    return this.securePassword(plainPassword) ===  this.encrypt_password;
  },

  securePassword: function (plainPassword) {
    if (!plainPassword) return "";

    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainPassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = moongoose.model("User", userScheama);
