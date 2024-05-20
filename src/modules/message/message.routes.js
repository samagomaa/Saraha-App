import { Router } from "express";
import * as messageController from './message.controller.js'
import { auth } from "../../middleware/auth.js";
import { validation } from "../../middleware/validation.js";
import { messageSchema, paramSchema } from "./message.validation.js";


const router = Router()

router.post("/addMessage", validation(messageSchema) , auth , messageController.addMessage)
router.get("/getMessage/:id" ,validation(paramSchema), auth , messageController.getMsg)
router.get("/shareProfile" , messageController.shareProfile)



export default router;