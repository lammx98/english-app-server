import mongoose, { ObjectId } from "mongoose";
import { Topic } from "../schemas/topic.schema";
import { Result } from "./../models/result";
import WordModel from "./../models/word";
import { Word } from "./../schemas/word.schema";

const model = new WordModel()

async function ImportData(datas: [object]) : Promise<Result<Array<String>>>{
    var results = new Array<String>()
    await Promise.all(datas.map(async wm => {
        try {
            var data = await model.Create(wm);
            if (data) 
                results.push((wm as WordModel).word as String + ": Added")
            else
                results.push((wm as WordModel).word as String + ": Failed to add")
        } catch (error) {
            console.log(error)   
        }
    }));
    return (new Result<Array<String>>()).OK(results)
}

async function ImportDataFromFile(fileContent: any) {
    
}
async function GetOrCreateTopic(key: string) : Promise<ObjectId> {
    key = key.replace('.txt', '')
    var topic = await Topic.findOne({title: key}).lean();
    if (topic != null) return topic._id;
    var schema = new Topic();
    schema.title = key
    await schema.save()
    return schema._id;
}


export { ImportData, ImportDataFromFile, GetOrCreateTopic }