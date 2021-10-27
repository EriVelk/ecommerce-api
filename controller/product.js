const Product = require("../models/Product");

const productController = {};

productController.productControllerCreate = async(req, res) =>{
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
};

productController.productControllerUpdate = async(req, res) =>{
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new:true });
    } catch (error) {
        res.status(500).json(error);
    }
 
    res.status(200).json(updateProduct);
 };

productController.productControllerDelete = async(req, res) =>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted.");
    } catch (error) {
        res.status(500).json(error);
    }
};

productController.productControllerGet = async(req, res) =>{
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
};

productController.productControllerGetAll = async(req, res) =>{
    
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    
    try {
        let products;
        if(queryNew){
            products = await Product.find().sort({createdAt: -1}).limit(1)
        }else if(queryCategory){
            products = await Product.find({category:{
                $in: [queryCategory]
            }
        });
        }else{
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = productController;