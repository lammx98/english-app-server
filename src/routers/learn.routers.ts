import express from 'express';
import mongoose from 'mongoose';
import * as _learnController from '../controllers/learn.controller'

const router = express.Router()

router.get('/learn-word',async (req, res) => {
    var data = await _learnController.GetWord();
    res.send(data)
})

export default router