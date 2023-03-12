"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const word_routers_1 = __importDefault(require("./routers/word.routers"));
const bodyParser = require('body-parser');
require('dotenv').config();
/** env variables */
const DATABASE_CONNECTION = process.env.DATABASE_CONNECTION;
const PORT = parseInt(process.env.PORT);
/** import components */
/** global settings */
/** server */
const app = (0, express_1.default)();
/** settings */
app.use(bodyParser.urlencoded({ extends: true }));
app.use(bodyParser.json());
/** connect mongo DB */
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(DATABASE_CONNECTION);
mongoose_1.default.connection.on('error', (error) => { console.log(error); });
mongoose_1.default.connection.once('connected', () => { console.log(`Connected to ${DATABASE_CONNECTION}`); });
/** routers config */
app.get('/test', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});
app.use('/api/word', word_routers_1.default);
app.listen(PORT, () => console.log(`app running on ${PORT}`));
//# sourceMappingURL=index.js.map