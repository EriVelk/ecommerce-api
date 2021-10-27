const router = require("express").Router();

const{authControllerLogin} = require("../controller/auth");

//Register User
router.post("/register", authControllerLogin);

//Login User
router.post("/login", authControllerLogin)

module.exports = router;