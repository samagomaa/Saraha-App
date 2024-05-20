import { Router } from "express"
import * as usercontroller from "./user.controller.js"
import { hashpassword } from "../../middleware/hashpassword.js"
import { checkemailexist } from "../../middleware/checkemailexist.js"
import { validation } from "../../middleware/validation.js"
import { signInSchema, signUpSchema } from "./user.validation.js"


const router = Router()

router.post('/signup', validation(signUpSchema) ,checkemailexist , hashpassword , usercontroller.signup)
router.post('/signin', validation(signInSchema) , usercontroller.signin)
router.get('/verify/:email', usercontroller.verify)


export default router