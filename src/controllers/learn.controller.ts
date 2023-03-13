import mongoose, { ObjectId } from "mongoose";
import { Result } from "../models/result";
import WordModel from "../models/word";

const model = new WordModel();

async function GetWord() : Promise<Result<Array<WordModel>>> {
    try {
        var exceptIds = new Array<ObjectId>();
        var arrData = new Array<WordModel>();
        for (let index = 0; index < 4; index++) {
            var data = await model.GetRandom(exceptIds);
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

export { GetWord }