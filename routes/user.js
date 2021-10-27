const router = require("express").Router();
const { 
        verifyTokenAndAuthorization, 
        verifyTokenAndAdmin 
        } = require("../config/verifyToken");
        
const {
        userControllerGet, 
        userControllerGetAll, 
        userControllerEdit, 
        userControllerDelete, 
        userControllerGetStats
    } = require("../controller/user");

//Update
router.put("/:id", verifyTokenAndAuthorization, userControllerEdit);

//Delete
router.delete("/:id", verifyTokenAndAuthorization, userControllerDelete);

//Get User
router.get("/find/:id", verifyTokenAndAdmin, userControllerGet);

//Get All User
router.get("/find", verifyTokenAndAdmin, userControllerGetAll);

//Get User Stats
router.get("/stats", verifyTokenAndAdmin, userControllerGetStats);

module.exports = router;