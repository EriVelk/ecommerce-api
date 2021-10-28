const router = require("express").Router();

const{authControllerLogin, authControllerRegister} = require("../controller/auth");

//Register User
router.post("/register", authControllerRegister);

//Login User
router.post("/login", authControllerLogin)

module.exports = router;