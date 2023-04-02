import express from 'express';
import mongoose from 'mongoose';
import * as _learnController from '../controllers/learn.controller'

const router = express.Router()

router.get('/learn-word',async (req, res) => {
    var data = await _learnController.GetLearnWord();
    res.send(data)
})
router.post('/add-learned', async (req, res) => {
    var result = await _learnController.Add(req.body as object)
    res.send(result)
})
router.post('/update-learned', async (req, res) => {
    var result = await _learnController.Update(req.body as object)
    res.send(result)
})
router.post('/set-level/:id/:level', async (req, res) => {
    var body = { _id: req.params?.id, level: req.params?.level }
    var result = await _learnController.Update(body as object)
    res.send(result)
})

export default router