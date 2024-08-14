const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("db connected");
        
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB