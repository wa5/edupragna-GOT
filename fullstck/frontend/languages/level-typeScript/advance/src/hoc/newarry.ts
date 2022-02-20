
type Mutionfun=(v:number)=>number

function arryMutate(
    number:number[],
    mutate:Mutionfun
):number[]{
return number.map(mutate)
}

console.log(arryMutate([1,3,4],(v)=>v*2))