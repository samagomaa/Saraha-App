import mongoose from "mongoose"


export const connectDB = async (req,res,next)=>{
    return await mongoose.connect('mongodb://127.0.0.1:27017/sarahApp')
    .then(()=>{ console.log("Database connect successfully..")})
    .catch((err)=>{ console.log("Failed to connect database", err)})
} 