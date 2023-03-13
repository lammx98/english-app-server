import mongoose, { ObjectId } from "mongoose";
import { ISchema } from ".";


interface ILearned extends ISchema {
    wordid: ObjectId,
    userid: ObjectId,
    level: Number
}

const learnedSchema = new mongoose.Schema<ILearned>({
    wordid: { type: mongoose.Types.ObjectId, required: true },
    userid: { type: mongoose.Types.ObjectId, required: true },
    level: { type: Number, required: false }
})

const Learned = mongoose.model<ILearned>('learned', learnedSchema)

export { ILearned, Learned }