import mongoose from "mongoose";
import { ISchema } from ".";

interface ITopic extends ISchema{
    title: string
}

const topicSchema = new mongoose.Schema<ITopic>({
    title: {type: String, required: true }
})

const Topic = mongoose.model<ITopic>('topic', topicSchema)

export { ITopic, Topic }