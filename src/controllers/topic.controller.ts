import mongoose from "mongoose";
import TopicModel from "../models/topic";

const model = new TopicModel()

async function Create(body: object) {
    await model.Create(body)
}

export { Create }