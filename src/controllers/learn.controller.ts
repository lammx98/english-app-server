import mongoose, { ObjectId } from "mongoose";
import { ILearned } from "../schemas/learned.schema";
import LearnedModel from "../models/learned";
import { Result } from "../models/result";
import WordModel from "../models/word";

const wordModel = new WordModel();
const learnModel = new LearnedModel();


async function GetLearnWord() {
    try {
        var data = await wordModel.GetRandom([]);
        if (data != null) {
            return (new Result<WordModel>()).OK(data)
        }
        return (new Result<Array<WordModel>>()).DataEmpty()
    } catch (error) {
        return (new Result<Array<WordModel>>()).Error(String(error))
    }
}

async function Add(body: object): Promise<Result<ObjectId>> {
    try {
        return (new Result<ObjectId>).OK(await learnModel.Create(body));
    } catch (error) {
        return (new Result<ObjectId>()).Error(String(error))
    }
}


async function Update(body: object) : Promise<Result<ILearned>> {
    try {
        return (new Result<ILearned>()).OK(await learnModel.Update(body));
    } catch (error) {
        return (new Result<ILearned>()).Error(String(error))
    }
}
export { GetLearnWord, Add, Update }