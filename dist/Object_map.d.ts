export default class ObjectMapper {
    object: object;
    constructor(object: object);
    map(callBack: ObjectMapCallBack): {
        [x: string]: {
            value: any;
        };
        [x: number]: {
            value: any;
        };
    };
}
declare type ObjectMapCallBack = (value: any, key?: any, object?: object) => {
    value: any;
};
export {};
