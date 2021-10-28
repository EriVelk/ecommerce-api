const Cart = require("../models/Cart");
const {deletedCart} = require("../utils/constants");

const cartController = {};

cartController.cartControllerCreate = async(req, res) =>{
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
};

cartController.cartControllerUpdate = async(req, res) =>{
    try {
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            }, { new:true }
        );
        res.status(200).json(updateCart);
    } catch (error) {
        res.status(500).json(error);
    }
};

cartController.cartControllerDelete = async(req, res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json({deletedCart});
    } catch (error) {
        res.status(500).json(error);
    }
};

cartController.cartControllerUsercart = async(req, res) =>{
    try {
        const cart = Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
};

cartController.cartControllerGetAll = async(req, res) =>{
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(200).json(error);
    }
};

module.exports = cartController;