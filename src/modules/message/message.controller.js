import { messageModel } from "../../../DB/models/message.model.js"
import { catchError } from "../../middleware/catchError.js"
import QRcode from 'qrcode'


const addMessage = catchError(async(req, res, next) => {
    messageModel.insertMany(req.body)
    res.json({ message: "message added successfully.." })
})


const getMsg = catchError(async (req, res, next) => {
    let message = await messageModel.find({ receviedId: req.params.id })
    if(message.length){
        res.json({ messages: message })
    }else{
        res.json({messages:"there are no messages for this user"})
    }
}
)

const shareProfile = catchError(async(req, res, next) => {
    QRcode.toDataURL("http://localhost:3000/message/shareProfile" , (err , qr)=>{
        res.send(`<img src="${qr}"/>`)
    })
    
})

export { addMessage, getMsg  , shareProfile}