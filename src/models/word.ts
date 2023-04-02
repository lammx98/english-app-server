import mongoose, { ObjectId } from "mongoose";
import { Image } from "../schemas/image.schema";
import {Model} from ".";
import { IWord, Word } from "../schemas/word.schema"
import { Result } from "./result";

class WordModel extends Model {
    word: String | null = null;
    mean: String | null = null;
    type: String | null = null;
    pronounce: String | null = null;
    createdBy: ObjectId | null = null;
    image: String | null = null;
    topicid: ObjectId | null = null;

    async Create(body: object) : Promise<ObjectId>{
        var model = this.CreateInstance(body);
        var schema = model.CreateSchema(new Word());
        await schema.save();
        return schema._id;
    }
    async GetById(_id: ObjectId) : Promise<WordModel | null> {
        var result = await Word.findById(_id).exec();
        if (result) {
            return (new WordModel()).SchemaToModel(result);
        }
        return null;
    }
    async GetByIdWithoutImage(_id: ObjectId) : Promise<WordModel | null> {
        var data = await this.GetById(_id)
        if (data) {
            var image = await Image.findOne({wordid: data._id}).exec()
            if (image) {
                data.image = image.content;
            }
            return data;
        }
        return null
    }
    async GetRandom(exceptIds: Array<ObjectId> | null) : Promise<WordModel | null> {
        var count = await Word.count().lean();
        var random = Math.floor(Math.random() * (count - (exceptIds ? exceptIds?.length : 0)));
        var result = await Word.findOne({_id: { $nin: exceptIds }}).skip(random).exec();
        if (result) {
            return (new WordModel()).SchemaToModel(result);
        }
        return null;
    }
}

export default WordModel;