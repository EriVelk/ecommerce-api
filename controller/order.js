const Order = require("../models/Order");
const {deletedOrder} = require("../utils/constants");

const orderController = {};

orderController.orderControllerCreate = async(req, res)=>{
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }

};

orderController.orderControllerUpdate = async(req, res) =>{
    try {
        const updateOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            }, { new: true }
        );
        res.status(200).json(updateOrder);
    } catch (error) {
        res.status(500).json(error);
    }
};

orderController.orderControllerDelete = async(req, res) =>{
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({deletedOrder});
    } catch (error) {
        res.status(500).json(error);
    }
};

orderController.orderControllerUserOrder = async(req, res)=>{
    try {
        const orders = await Order.find({userId: req.params.userId});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
};

orderController.orderControllerGetAll = async(req, res)=>{
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
};

orderController.orderControllerGetMonth = async (req, res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    console.log(date);
    console.log(lastMonth);
    console.log(previousMonth);
    //Compare amount month vs last month
    try {
        const income = await Order.aggregate([
            {$match: {createdAt:{ $gte: previousMonth } } },
            {
                $project:{
                    month:{$month: "$createdAt"},
                    sales: "$amount"
                },
            },{
                $group:{
                    _id:"$month",
                    total:{$sum: "$sales"}
                }
            }
        ]);
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json(error);
    }
};


module.exports = orderController;