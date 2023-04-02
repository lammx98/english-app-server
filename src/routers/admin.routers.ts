import express, { Request } from 'express'
import WordModel from './../models/word'
import multerConfigs from './../configs/multer.configs'
import * as _adminController from './../controllers/admin.controller'
import * as fs from 'fs'
import * as path from 'path'
import { Word } from '../schemas/word.schema'

const router = express.Router()

router.post('/upload-data', multerConfigs.single('File'), async (req, res) => {
    const file = req.file
    if (!file) {
        const error = new Error('Missing File')

    }
})

router.post('/create-data', async (req, res) => {
    var result = await _adminController.ImportData(req.body)
    res.send(result)
})

router.get('/create-json', async (req, res) => {
    try {
        var folder = "/Users/xuanlam98/Works/Source/english-app/server-app/data";
        var resarr = [String]
        await fs.readdirSync(folder).forEach(async file => {
            var topicId = await _adminController.CreateTopic(path.basename(file))
            var fileContent = await fs.readFileSync(path.join(folder, file), 'utf-8')
            var arr = fileContent.split('\n')
            arr.forEach(async str => {
                try {
                    var info = str.split(/[.:]+/)
                    var wm = new WordModel();
                    wm.word = info[1].trim()
                    wm.mean = info[2].trim()
                    wm.topicid = topicId
                    var schema = wm.CreateSchema(new Word())
                    await schema.save()
                    resarr.push(schema._id)
                } catch (error) {
                    console.log(error)
                    return;
                }
            });
        })

        res.send(resarr)
    } catch (error) {
        console.log(error)
    }
})
router.post('/create-topic', async (req, res) => {

})
export default router