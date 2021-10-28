const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("../config/verifyToken");
const router = require("express").Router();

const { 
    orderControllerCreate,
    orderControllerUpdate,
    orderControllerDelete,
    orderControllerUserOrder,
    orderControllerGetAll,
    orderControllerGetMonth
} = require("../controller/order");

//Create
router.post("/", verifyToken, orderControllerCreate);

//Update
router.put("/:id", verifyTokenAndAdmin, orderControllerUpdate);

//Delete
router.delete("/:id", verifyTokenAndAdmin, orderControllerDelete);

//Get user order
router.get("/find/:userId", verifyTokenAndAuthorization, orderControllerUserOrder);

//Get all
router.get("/", verifyTokenAndAdmin, orderControllerGetAll);

//Get Monthly income
router.get("/income", verifyTokenAndAdmin, orderControllerGetMonth);

module.exports = router;