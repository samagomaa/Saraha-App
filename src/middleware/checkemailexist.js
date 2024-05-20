import { Error } from "mongoose"
import { userModel } from "../../DB/models/user.model.js"


export const checkemailexist = async (req,res,next)=>{
    try{
        let user = await userModel.findOne({email: req.body.email})
    if(user){
        throw new Error("user already exist...")
    }
        next()
    
    }catch(err){
        res.json({
            success: false,
            message:"Error in checkemailexist",
            err : err.message
        })
    }
}
