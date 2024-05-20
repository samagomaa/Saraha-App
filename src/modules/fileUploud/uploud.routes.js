import { Router } from "express"
import { photoModel } from "../DB/models/photo.model.js";
import { uploadSingleFile } from "./modules/fileUploud/uploud.js";
const router = Router()

router.post('/photos', uploadSingleFile('img'), async (req, res) => {
    req.body.image = req.file.filename
    await photoModel.insertMany(req.body)
    res.json({ message: "success" })
})
router.get('/photos', async (req, res) => {
    let photos = await photoModel.find()
    res.json({ success: true, photos })
})

export default router