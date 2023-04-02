import mongoose, { ObjectId, Schema } from "mongoose";
import { ISchema } from './index'

interface IWord extends ISchema {
    word: String,
    mean: String,
    type: String,
    pronounce: String,
    image: string,
    createdBy: ObjectId,
    topicid: ObjectId
}

const wordSchema = new mongoose.Schema<IWord>({
    word: {type: String, required: true},
    mean: {type: String, required: true},
    type: {type: String, required: false},
    pronounce: {type: String, required: false},
    image: {type: String, required: false},
    createdBy: {type: Schema.Types.ObjectId, required: false},
    topicid: {type: Schema.Types.ObjectId, required: false}
})

const Word = mongoose.model<IWord>('word', wordSchema)

export {IWord, Word};