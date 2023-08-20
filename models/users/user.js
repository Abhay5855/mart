const moongoose = require("mongoose");

const { Schema } = moongoose;

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
  },
  { timestamps: true }
);

module.exports = moongoose.model("User", userScheama);
