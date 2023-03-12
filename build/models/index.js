"use strict";
// interface IModel<T> {
//     FromSchema(schema: T): void
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
class Model {
    constructor() {
        this._id = null;
    }
    /**
     * try to create an instance of model from an object with the same properties
     * @param obj any object
     * @returns an instance of model
     */
    CreateInstance(obj) {
        try {
            Object.getOwnPropertyNames(this).forEach(prop => {
                var _a;
                Object.defineProperty(this, prop, {
                    value: (_a = Object.entries(obj).find(o => o[0] === prop)) === null || _a === void 0 ? void 0 : _a[1],
                    writable: true
                });
            });
            return this;
        }
        catch (error) {
            console.error(error);
            throw new Error("Cannot create instance from object");
        }
    }
    /**
     * try to convert schema to model
     * @param schema an instance of Schema
     * @returns an instance of Model
     */
    SchemaToModel(schema) {
        try {
            Object.getOwnPropertyNames(this).forEach(prop => {
                Object.defineProperty(this, prop, {
                    value: schema.get(prop),
                    writable: true
                });
            });
            return this;
        }
        catch (error) {
            console.error(error);
            throw new Error("Cannot convert schema to model");
        }
    }
    /**
     * try to create an instance of Schema from model
     * @param schema an instance of Schema
     * @returns an instance of Schema
     */
    CreateSchema(schema) {
        try {
            Object.entries(this).forEach(o => {
                schema.set(o[0], o[1]);
            });
            return schema;
        }
        catch (error) {
            console.error(error);
            throw new Error("Cannot create instance of schema from model");
        }
    }
}
exports.Model = Model;
//# sourceMappingURL=index.js.map