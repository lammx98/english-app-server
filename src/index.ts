"use strict";
import express from 'express';
import mongoose from 'mongoose'
import wordrouter from './routers/word.routers'
const bodyParser = require('body-parser')
require('dotenv').config()
/** env variables */
const DATABASE_CONNECTION = process.env.DATABASE_CONNECTION as string
const PORT = parseInt(process.env.PORT as string)
/** import components */

/** global settings */

/** server */
const app: express.Application = express()
/** settings */
app.use(bodyParser.urlencoded({extends: true}))
app.use(bodyParser.json())
/** connect mongo DB */
mongoose.set('strictQuery', false)
mongoose.connect(DATABASE_CONNECTION)

mongoose.connection.on('error' , (error) => { console.log(error); })
mongoose.connection.once('connected', () => { console.log(`Connected to ${DATABASE_CONNECTION}`); })

/** routers config */
app.get('/test', (req: express.Request, res: express.Response) => {
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello World</h1>')
})

app.use('/api/word', wordrouter)

app.listen(PORT, () => console.log(`app running on ${PORT}`))
//app.listen(PORT, 'localhost', () => console.log(`app running on http://localhost:${PORT}`))