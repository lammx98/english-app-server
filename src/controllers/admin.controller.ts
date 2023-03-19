import mongoose from "mongoose";
import { Result } from "./../models/result";
import WordModel from "./../models/word";
import { Word } from "./../schemas/word.schema";

const model = new WordModel()

async function ImportData(datas: [object]) : Promise<Result<Array<String>>>{
    var results = new Array<String>()
    datas.forEach(async wm => {
        try {
            var data = await model.Create(wm);
            if (data) 
                results.push((wm as WordModel).word as String + ": Added")
            else
                results.push((wm as WordModel).word as String + ": Failed to add")
        } catch (error) {
            console.log(error)   
        }
    });
    return (new Result<Array<String>>()).OK(results)
}

async function ImportDataFromFile(fileContent: any) {
    
}

export { ImportData, ImportDataFromFile }