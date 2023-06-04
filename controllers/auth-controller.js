var router = require("express").Router();
var authService = require("../services/auth-service");

router.post("/login", authService.login);

module.exports = router;
