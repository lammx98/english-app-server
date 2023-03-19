import { Request } from "express";
import multer from "multer";

const fileStorage = multer.diskStorage({
    destination: 'uploads',
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

export default multer({storage: fileStorage})