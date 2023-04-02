import express from 'express';
import mongoose from 'mongoose';
import * as _gameController from './../controllers/game.controller'

const router = express.Router()

router.get('/get-ot-words',async (req, res) => {
    var data = await _gameController.GetWord();
    res.send(data)
})

export default router;