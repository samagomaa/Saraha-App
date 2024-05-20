import { Schema, model } from "mongoose";


const userSchema = new Schema({
    userName:String,
    email: String,
    password: String,
    age :{
        type:Number,
        min:[10 , "too short age"],
        max:[80 , "too big age"]
    },
    role:{
        type: String,
        enum:['user' , 'admin'],
        default: "user"
    },
    verifyEmail:{
        type:Boolean,
        default: false
    },
    isActive:{
        type:Boolean,
        default: true
    },
    isUser:{
        type:Boolean,
        default: false
    }
}, {timestamps:true})

export const userModel = model("user" , userSchema)