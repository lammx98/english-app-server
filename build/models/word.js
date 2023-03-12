"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const word_schema_1 = require("../schemas/word.schema");
class WordModel extends _1.Model {
    constructor() {
        super(...arguments);
        this.word = null;
        this.mean = null;
        this.type = null;
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            var model = this.CreateInstance(body);
            var schema = model.CreateSchema(new word_schema_1.Word());
            yield schema.save();
            return schema._id;
        });
    }
    GetById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield word_schema_1.Word.findById(_id).exec();
            if (result) {
                return (new WordModel()).SchemaToModel(result);
            }
            return null;
        });
    }
}
exports.default = WordModel;
//# sourceMappingURL=word.js.map