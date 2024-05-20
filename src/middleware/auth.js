import jwt from 'jsonwebtoken'


export const auth = (req,res,next)=>{
    jwt.verify(req.headers.token , "sarahSecreteKey" , (err,decoded)=>{
        if(err){
            res.json({Error: err})
        }
        req.user = decoded
        next()
    })
}