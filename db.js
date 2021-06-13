  
const mongoose = require("mongoose");

// DB connect 
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(
            "mongodb+srv://test:test12345@teachfinity.0q2sb.mongodb.net/test?retryWrites=true&w=majority"
            ,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useFindAndModify:false,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(err){
        console.log(err);
}
}

module.exports = connectDB;