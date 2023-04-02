import express, { Request, Response } from 'express'
import * as _topicController from '../controllers/topic.controller';

const router = express.Router()

router.post('/create', async (req: Request, res: Response) => {
    await _topicController.Create(req.body)
    res.send("OK")
})
router.post('/create-multi', async (req: Request, res: Response) => {
    var lstTopic = req.body as [String]
    lstTopic.forEach(async topic => {
        await _topicController.Create({title: topic})
    });
    res.send("OK")
})

export default router;