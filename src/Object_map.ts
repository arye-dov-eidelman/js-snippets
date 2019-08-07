type MappableObjectCallBack = (value: any, key?: any, object?: object) => any

export default class MappableObject extends Object {
	mapEntries(callBack : MappableObjectCallBack): object {
		return Object.fromEntries(Object.entries(this).map(
			([key, value]) => [key, callBack(value, key, this)]
		))
	}
}

// Alternately add mapEntries to the Object prototype
// @ts-ignore
Object.prototype.mapEntries = function(mapEntriesCB) {
	return Object.fromEntries(Object.entries(this).map(
		([key, value]) => [key, mapEntriesCB(value, key, this)]
	));
}