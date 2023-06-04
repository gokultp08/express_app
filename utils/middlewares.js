const User = require("../models/user-model");

const userExists = async (req, res, next) => {
  // const existingUser = await User.findOne({
  //   userId: req.params.id,
  // });
  // if (existingUser == null) {
  //   return res.status(404).send("Cannot find the item");
  // }
  next();
};
module.exports = { userExists };
