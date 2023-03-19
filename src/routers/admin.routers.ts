import express from 'express'
import WordModel from './../models/word'
import multerConfigs from './../configs/multer.configs'
import * as _adminController from './../controllers/admin.controller'

const router = express.Router()

router.post('/upload-data', multerConfigs.single('File'), async (req, res) => {
    const file = req.file
    if(!file) {
        const error = new Error('Missing File')

    }
})

router.post('/create-data', async (req, res) => {
    var result = await _adminController.ImportData(req.body)
    res.send(result)
})

export default router