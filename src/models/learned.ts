import { ObjectId, Schema } from "mongoose";
import { ILearned, Learned } from "../schemas/learned.schema";
import { Model } from ".";
import moment from "moment";



class LearnedModel extends Model {
    wordid: ObjectId | null = null
    userid: ObjectId | null = null
    level: Number | null = null
    lastLearned: Date | null = null

    async Create(body: Object) : Promise<ObjectId> {
        var model = this.CreateInstance(body);
        model.lastLearned = new Date()
        var schema = model.CreateSchema(new Learned())
        await schema.save();
        return schema._id;
    }

    async Update(body: Object) : Promise<ILearned | null> {
        var model = this.CreateInstance(body);
        var schema = model.CreateSchema(new Learned());
        return await Learned.findOneAndUpdate({_id: schema._id}, schema, { new: true});
    }

    async GetById(_id: ObjectId) : Promise<LearnedModel | null> {
        var result = await Learned.findById(_id).exec();
        if (result) {
            return (new LearnedModel()).SchemaToModel(result);
        }
        return null;
    }
}

export default LearnedModel