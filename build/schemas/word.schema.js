"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Word = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const wordSchema = new mongoose_1.default.Schema({
    word: { type: String, required: true },
    mean: { type: String, required: true },
    type: { type: String, required: false }
});
const Word = mongoose_1.default.model('word', wordSchema);
exports.Word = Word;
//# sourceMappingURL=word.schema.js.map