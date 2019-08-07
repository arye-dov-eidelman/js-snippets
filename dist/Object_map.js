"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MappableObject extends Object {
    mapEntries(callBack) {
        return Object.fromEntries(Object.entries(this).map(([key, value]) => [key, callBack(value, key, this)]));
    }
}
exports.default = MappableObject;
// Alternately add mapEntries to the Object prototype
// @ts-ignore
Object.prototype.mapEntries = function (mapEntriesCB) {
    return Object.fromEntries(Object.entries(this).map(([key, value]) => [key, mapEntriesCB(value, key, this)]));
};
