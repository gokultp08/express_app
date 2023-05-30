var mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      minlength: 4,
      required: true,
    },
    name: {
      type: String,
      minlength: 4,
      required: true,
    },
    password: {
      type: String,
      minlength: 8,
      required: true,
    },
    additionalDetail: String,
    image: String,
    roles: [],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
