export default class ObjectMapper {
	object: object
	constructor(object: object){
		this.object = object
	}

	map(callBack : ObjectMapCallBack){
		return Object.fromEntries(
			Object.entries(this.object).map(
					([k, v]) => [k, callBack(v, k, this.object)]
			)
		)
	}
}
type ObjectMapCallBack = (value: any, key?: any, object?: object) => {value: any}