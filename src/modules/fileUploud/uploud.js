import multer from "multer";
import { v4 as uuidv4 } from 'uuid';


export const uploadSingleFile = (fileName)=>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, uuidv4() + "-" + file.originalname)
        }
    })
    function fileFilter(req, file, cb) {
    
        if (file.mimetype.startsWith("image")) {
            cb(null, true)
        } else {
            cb(new AppError("images Only" , 401) , false)
        }
    }
    const upload = multer({ storage, fileFilter })
    return upload.single(fileName)
}

export const uploadArrayOfFiles = (fileName)=>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, uuidv4() + "-" + file.originalname)
        }
    })
    function fileFilter(req, file, cb) {
    
        if (file.mimetype.startsWith("image")) {
            cb(null, true)
        } else {
            cb(new AppError("images Only" , 401) , false)
        }
    }
    const upload = multer({ storage, fileFilter })
    return upload.array(fileName)
}

