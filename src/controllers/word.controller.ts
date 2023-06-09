import mongoose, { ObjectId } from "mongoose";
import {IWord, Word} from '../schemas/word.schema'
import WordModel from '../models/word'
import { Result } from "../models/result";

const model = new WordModel();

async function Create(body: object) : Promise<Result<ObjectId>> {
    try {
        var data = await model.Create(body);
        if (data != null) {
            return (new Result<ObjectId>()).OK(data)
        }
        return (new Result<ObjectId>()).DataEmpty()
    } catch (error) {
        return (new Result<ObjectId>()).Error(String(error))
    }
}

async function Update(_id: mongoose.Types.ObjectId, model: IWord) : Promise<String> {
    var update = await Word.findById(_id).exec();
    if (update) {
        update.word = model.word;
        update.mean = model.mean;
        await update.update()
        return "Ok"
    }

    return "item not found";
}

async function GetById(_id: ObjectId) : Promise<Result<WordModel>> {
    try {
        var data = await model.GetById(_id);
        if (data != null) {
            return (new Result<WordModel>()).OK(data)
        }
        return (new Result<WordModel>()).DataEmpty()
    } catch (error) {
        return (new Result<WordModel>()).Error(String(error))
    }
}

export { Create, Update, GetById }