import { Schema, model } from "mongoose";


const photoSchema = new Schema({
    title: String,
    image: String
} , {timestamps:true})

photoSchema.post("init" , function (doc){
    doc.image =process.env.BASE_URL + doc.image
})

export const photoModel = model("photo" , photoSchema)