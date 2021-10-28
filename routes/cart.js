const { verifyTokenAndAdmin, verifyTokenAndAuthorization, verifyToken } = require("../config/verifyToken");
const router = require("express").Router();

const {
    cartControllerCreate,
    cartControllerUpdate,
    cartControllerDelete,
    cartControllerUsercart,
    cartControllerGetAll
} = require("../controller/cart");

//Create
//Add Cart
router.post("/", verifyToken, cartControllerCreate);

//Update
router.put("/:id", verifyTokenAndAuthorization, cartControllerUpdate);

//Delete
router.delete("/:id", verifyTokenAndAuthorization, cartControllerDelete);

//Get UserCart
router.get("/find/:userId", verifyTokenAndAuthorization, cartControllerUsercart);

//Get all
router.get("/", verifyTokenAndAdmin, cartControllerGetAll);

module.exports = router;