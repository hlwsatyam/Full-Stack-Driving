const { Login, Register } = require("../Controllers/AuthControllers");

const AuthRouter = require("express").Router();

AuthRouter.post("/login", Login);
AuthRouter.post("/register", Register);

module.exports = { AuthRouter };
