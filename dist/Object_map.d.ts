declare type MappableObjectCallBack = (value: any, key?: any, object?: object) => any;
export default class MappableObject extends Object {
    mapEntries(callBack: MappableObjectCallBack): object;
}
export {};
