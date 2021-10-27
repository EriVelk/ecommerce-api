const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();
const Cart = require("../models/Cart");

//Create

router.post("/", verifyTokenAndAdmin, async(req, res) =>{
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;