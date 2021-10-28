const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log("ERROR => " + err);
});

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);


app.listen(process.env.PORT || 5000, ()=>{
    console.log('Backend server is running');
});