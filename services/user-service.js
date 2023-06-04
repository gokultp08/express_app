const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

async function getUser(req, res, next) {
  const existingUser = await User.findOne({
    userId: req.params.id,
  });
  if (existingUser == null) {
    return res.status(404).send("Cannot find the item");
  }
  res.status(200).json(existingUser);
}

async function addUser(req, res) {
  const { name, email, additionalDetail, image, roles, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send("email must be unique");
  }

  const saltRounds = 20;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    userId: uuidv4().toString(),
    name,
    email,
    additionalDetail,
    image,
    roles: [],
    password: passwordHash,
  });

  const savedUser = await user.save();
  res.status(201).json(savedUser);
}

async function editUser(req, res, next) {
  const existingUser = await User.findOne({
    userId: req.params.id,
  });
  if (existingUser == null) {
    return res.status(404).send("Cannot find the item");
  }
  res.status(200).send("yesss");
  User.findOneAndUpdate(
    {
      userId: req.params.id,
    },
    req.body,
    function (err, user) {
      if (err) return res.status(500).send("Error upadting db");
      res.status(200).send(user);
    }
  );
}

async function deleteUser(req, res, next) {
  const existingUser = await User.findOne({
    userId: req.params.id,
  });
  if (existingUser == null) {
    return res.status(404).send("Cannot find the item");
  }
  res.status(200).send("yesss");
  User.findOneAndDelete(
    {
      userId: req.params.id,
    },
    function (err, user) {
      if (err) return res.status(500).send("Error upadting db");
      res.status(200).send(user);
    }
  );
}

async function getAllUsers(req, res, next) {
  const existingUser = await User.find();
  res.status(200).json(existingUser);
}

module.exports = { getUser, addUser, editUser, deleteUser, getAllUsers };
