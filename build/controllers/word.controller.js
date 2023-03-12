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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetById = exports.Update = exports.Create = void 0;
const word_schema_1 = require("../schemas/word.schema");
const word_1 = __importDefault(require("../models/word"));
const result_1 = require("../models/result");
const model = new word_1.default();
function Create(body) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield model.create(body);
    });
}
exports.Create = Create;
function Update(_id, model) {
    return __awaiter(this, void 0, void 0, function* () {
        var update = yield word_schema_1.Word.findById(_id).exec();
        if (update) {
            update.word = model.word;
            update.mean = model.mean;
            yield update.update();
            return "Ok";
        }
        return "item not found";
    });
}
exports.Update = Update;
function GetById(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var data = yield model.GetById(_id);
            if (data != null) {
                return (new result_1.Result()).OK(data);
            }
            return (new result_1.Result()).DataEmpty();
        }
        catch (error) {
            return (new result_1.Result()).Error(String(error));
        }
    });
}
exports.GetById = GetById;
//# sourceMappingURL=word.controller.js.map