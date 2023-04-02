import { Model } from ".";
import { Topic } from "../schemas/topic.schema";


class TopicModel extends Model {
    title: String | null = null

    async Create(body: object) : Promise<TopicModel> {
        var model = this.CreateInstance(body)
        var schema = model.CreateSchema(new Topic())
        await schema.save()
        return model;
    }
}

export default TopicModel;