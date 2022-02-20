function simpleSettingState(inital:string):[()=>string,(v:string)=>void]{
let str:string=inital
    return [()=>str,(v:string)=>str=v]
}

const [data,setdata]=simpleSettingState("hello")

console.log(data())
console.log(setdata("im a new value"))
console.log(data())