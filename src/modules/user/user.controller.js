import { userModel } from "../../../DB/models/user.model.js"
import { sendEmail } from "../../emails/sendEmail.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { catchError } from "../../middleware/catchError.js"
import { AppError } from "../../utils/appError.js"


//sign up
export const signup = catchError(async (req, res, next) => {
                await userModel.insertMany(req.body)
                sendEmail(req.body.email)
                res.json({ success: true, message: "user added successfully..." })
}
)

//verify email after signup
export const verify = catchError(async (req, res, next) => {
        jwt.verify(req.params.email, process.env.JWT_KEY, async (err, decoded) => {
                if (err) return res.json({ err: err })
                await userModel.findOneAndUpdate({ email: decoded.email }, { verifyEmail: true })
                res.json({ message: "success..." })
        })


})

//sign in
export const signin = catchError(async (req, res, next) => {
        let user = await userModel.findOne({ email: req.body.email })
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
                let token = jwt.sign({ userId: user._id }, "sarahSecreteKey")
                res.json({ success: true, message: "user sign in successfully...", token })
        } else {
                next(new AppError("wrong password or email", 401))
        }
})

//forget password
export const forgetPassword = catchError(async(req,res,next) =>{
        sendEmail(req.body.email)
})
