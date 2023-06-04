var mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: String,
    name: {
      type: String,
      // minlength: 4,
      required: true,
    },
    email: {
      type: String,
      // minlength: 4,
      required: true,
    },
    password: {
      type: String,
      // minlength: ,
      required: true,
    },
    additionalDetail: String,
    image: String,
    roles: [],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
