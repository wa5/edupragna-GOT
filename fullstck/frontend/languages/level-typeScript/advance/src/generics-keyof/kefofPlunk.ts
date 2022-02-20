function plunk<Datatype,keyType extends keyof Datatype>(
    items:Datatype[],
    key:keyType
    ):Datatype[keyType][]
    {
    return items.map(item=>item[key])
}

const dogs=[
    {name:"mimi",age:12},
    {name:"lpg",age:13}
]
console.log(plunk(dogs,"age"))
console.log(plunk(dogs,"name"))