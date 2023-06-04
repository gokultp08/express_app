const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
const config = require("./config");

const userExists = async (req, res, next) => {
  // const existingUser = await User.findOne({
  //   userId: req.params.id,
  // });
  // if (existingUser == null) {
  //   return res.status(404).send("Cannot find the item");
  // }
  next();
};
const validateToken = (req, res, next) => {
  const token = jwt.verify(req.token, config.JWT_KEY);
  if (!req.token || !token?.id) {
    return res.status(401).json({ error: "invalid token" });
  }
  return token;
};
module.exports = { userExists, validateToken };
