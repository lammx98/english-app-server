
// interface IModel<T> {
//     FromSchema(schema: T): void
// }

import { Document, ObjectId } from "mongoose";

class Model{
    _id: ObjectId | null = null;
    /**
     * try to create an instance of model from an object with the same properties
     * @param obj any object
     * @returns an instance of model
     */
    CreateInstance(obj: object): this {
        try {
            Object.getOwnPropertyNames(this).forEach(prop => {
                Object.defineProperty(this, prop, {
                    value: Object.entries(obj).find(o => o[0] === prop)?.[1],
                    writable: true
                })
            });
            return this;
        } catch (error) {
            console.error(error);
            throw new Error("Cannot create instance from object");
        }
        
    }
    /**
     * try to convert schema to model
     * @param schema an instance of Schema
     * @returns an instance of Model
     */
    SchemaToModel(schema: Document): this {
        try {
            Object.getOwnPropertyNames(this).forEach(prop => {
                Object.defineProperty(this, prop, {
                    value: schema.get(prop),
                    writable: true
                })
            });
            return this;
        } catch (error) {
            console.error(error);
            throw new Error("Cannot convert schema to model");
        }
        
    }
    /**
     * try to create an instance of Schema from model
     * @param schema an instance of Schema
     * @returns an instance of Schema
     */
    CreateSchema(schema: Document) : Document{
        try {
            Object.entries(this).forEach(o => {
                schema.set(o[0], o[1])
            });
            return schema;
        } catch (error) {
            console.error(error);
            throw new Error("Cannot create instance of schema from model");
        }
    }
}

export {Model} 