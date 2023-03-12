import express from 'express';
import mongoose from 'mongoose';
import * as _wordController from '../controllers/word.controller';

const router = express.Router()

router.get('/get', async (req: express.Request, res: express.Response) => {
    var data = await _wordController.GetById(new mongoose.Types.ObjectId(req.query.id as string))
    res.send(data)
})

router.post('/create', async (req: express.Request, res: express.Response) => {
    var result = await _wordController.Create(req.body as object)
    res.send(result)
})

export default router