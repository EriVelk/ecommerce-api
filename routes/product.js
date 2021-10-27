const router = require("express").Router();
const { verifyTokenAndAdmin } = require("./verifyToken");
const { 
        productControllerCreate, 
        productControllerUpdate,
        productControllerDelete,
        productControllerGet,
        productControllerGetAll
        } = require("../controller/product");



//Create

router.post("/", verifyTokenAndAdmin, productControllerCreate);

//Update

router.put("/:id", verifyTokenAndAdmin, productControllerUpdate);

//Delete

router.delete("/:id", verifyTokenAndAdmin, productControllerDelete);

//Get Product

router.get("/find/:id", productControllerGet);

//Get All Products

router.get("/find", productControllerGetAll);


module.exports = router;