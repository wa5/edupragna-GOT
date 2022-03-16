// export interface InormalizedCollection<T, K extends keyof T> {
//   byId: { [id in K]: T };
//   allIds: (string | number)[];
// }
// export function nr<T, K extends keyof T, S extends keyof T>(
//   collection: T[],
//   keyProps: K,
//   compareKeyorFunc?: S | ((a: T, b: T) => number)
// ): InormalizedCollection<T, K> {
//   const byIdData = normalizeToKeyValue(collection, keyProps);
// }
// function normalizeToKeyValue<T, K extends keyof T>(
//   collection: T[],
//   keyProps: K
// ): { [K in string | number]: T } {
// if(!collection||collection.length===0||!keyProps){
//     return {}
// }
// const byIdData=collection.reduce((result,element)=>{
//     result[element[keyProps]]=element
//     return result
// },{})
// return byIdData
// }
export const y=0
