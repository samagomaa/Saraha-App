process.on('uncaughtException', (err) => { console.log("Error", err); })
import { connectDB } from "../DB/connectionDB.js"
import userRouter from "./modules/user/user.routes.js"
import messageRouter from "./modules/message/message.routes.js"
import photoRouter from "./modules/fileUploud/uploud.routes.js"
import { AppError } from "./utils/appError.js"
import { globalError } from "./middleware/globalErrorMiddleware.js"
import dotenv from 'dotenv'

dotenv.config()

export const bootstrap = (app, express) => {
    app.use(express.json())
    app.use('/user', userRouter)
    app.use('/message', messageRouter)
    app.use('/', express.static('uploads'))
    app.use('/upload' , photoRouter)
    app.all("*", (req, res, next) => { next(new AppError(`invalid routing : ${req.originalUrl}`, 404)) })
    process.on('unhandledRejection', (err) => { console.log("Error", err); })
    app.use(globalError)
    connectDB()
} 