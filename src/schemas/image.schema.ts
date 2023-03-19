import mongoose, { ObjectId, Schema } from "mongoose";
import { ISchema } from ".";

interface IImage extends ISchema {
    content: String,
    wordid: ObjectId
}

const imageSchema = new mongoose.Schema<IImage>({
    content: {type: String, required: true},
    wordid: {type: Schema.Types.ObjectId, required: true}
})

const Image = mongoose.model<IImage>('Image', imageSchema)

export {IImage, Image}