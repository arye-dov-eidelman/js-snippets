"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObjectMapper {
    constructor(object) {
        this.object = object;
    }
    map(callBack) {
        return Object.fromEntries(Object.entries(this.object).map(([k, v]) => [k, callBack(v, k, this.object)]));
    }
}
exports.default = ObjectMapper;
