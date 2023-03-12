import mongoose from "mongoose";
import {Model} from ".";
import { IWord, Word } from "../schemas/word.schema"
import { Result } from "./result";

class WordModel extends Model {
    word: String | null = null;
    mean: String | null = null;
    type: String | null = null;

    async create(body: object) : Promise<mongoose.Types.ObjectId>{
        var model = this.CreateInstance(body);
        var schema = model.CreateSchema(new Word());
        await schema.save();
        return schema._id;
    }
    async GetById(_id: mongoose.Types.ObjectId) : Promise<WordModel | null> {
        var result = await Word.findById(_id).exec();
        if (result) {
            return (new WordModel()).SchemaToModel(result);
        }
        return null;
    }
}

export default WordModel;