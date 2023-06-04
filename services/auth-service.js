const User = require("../models/user-model");
const config = require("../utils/config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(req, res, next) {
  const { username, password } = request.body;

  const user = await User.findOne({
    email: username,
  });

  if (user === null) {
    return res.status(404).send("User doesnt exist");
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).send("Invalid credentials");
  }

  const data = {
    username,
    id: user.userId,
  };

  const token = jwt.sign(data, config.JWT_KEY, {
    expiresIn: 60 * 60 * 24,
  });

  res.status(200).json({ token, data: user.getMappedData() });
}

module.exports = { login };
