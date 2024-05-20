import { Error } from "mongoose"

export function catchError (fn){
    return (req,res,next)=>{
        return fn(req,res,next).catch((err)=>{
            return next(new Error(err.message, {cause : err.cause}))
        })
    }
}