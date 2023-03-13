import mongoose, { ObjectId } from "mongoose";
import { ILearned } from "src/schemas/learned.schema";
import LearnedModel from "../models/learned";
import { Result } from "../models/result";
import WordModel from "../models/word";

const wordModel = new WordModel();
const learnModel = new LearnedModel();

async function GetWord(): Promise<Result<Array<WordModel>>> {
    try {
        var exceptIds = new Array<ObjectId>();
        var arrData = new Array<WordModel>();
        for (let index = 0; index < 4; index++) {
            var data = await wordModel.GetRandom(exceptIds);
            if (data != null) {
                arrData.push(data);
                exceptIds.push(data._id as ObjectId);
            }
        }
        if (arrData.length > 0) {
            return (new Result<Array<WordModel>>).OK(arrData);
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
export { GetWord, Add, Update }