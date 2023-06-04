var router = require("express").Router();
var userService = require("../services/user-service");
var middlewares = require("../utils/middlewares.js");

router.get("/:id", userService.getUser);

router.get("/all", userService.getAllUsers);

router.post("", userService.addUser);

router.put("/:id", middlewares.userExists, userService.editUser);

router.delete("/:id", middlewares.userExists, userService.deleteUser);

module.exports = router;
