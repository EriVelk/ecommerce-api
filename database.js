const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log("ERROR => " + err);
});