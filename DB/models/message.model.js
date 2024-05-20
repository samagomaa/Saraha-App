import { Schema, Types, model } from "mongoose";

const messageSchema = new Schema({
    message:String,
    receviedId : Types.ObjectId
}, {timestamps:true})

export const messageModel = model("message" , messageSchema)