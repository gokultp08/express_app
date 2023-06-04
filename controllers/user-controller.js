var router = require("express").Router();
var userService = require("../services/user-service");
var middlewares = require("../utils/middlewares.js");

router.get("/all", userService.getAllUsers);

router.get("/:id", userService.getUser);

router.post("", userService.addUser);

router.put("/:id", middlewares.userExists, userService.editUser);

router.delete("/:id", userService.deleteUser);

module.exports = router;
