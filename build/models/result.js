"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor(code = null, message = null, data = null) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
    OK(data = null) {
        var _a, _b;
        this.code = (_a = this.code) !== null && _a !== void 0 ? _a : 200;
        this.message = (_b = this.message) !== null && _b !== void 0 ? _b : "OK";
        this.data = data !== null && data !== void 0 ? data : this.data;
        return this;
    }
    Error(message = null) {
        var _a;
        this.code = (_a = this.code) !== null && _a !== void 0 ? _a : 500;
        this.message = message !== null && message !== void 0 ? message : "An exception was throwed";
        this.data = this.data;
        return this;
    }
    DataEmpty(message = null) {
        var _a;
        this.code = (_a = this.code) !== null && _a !== void 0 ? _a : 201;
        this.message = message !== null && message !== void 0 ? message : "Data not found";
        this.data = this.data;
        return this;
    }
}
exports.Result = Result;
//# sourceMappingURL=result.js.map