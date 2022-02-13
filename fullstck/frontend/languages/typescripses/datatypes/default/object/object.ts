interface LooseObject{
    [key:string]:any
}

var OBJ:LooseObject={}
//var OBJ:{[key:string]:any}={}
//or
var OBJ2:Record<string,any>={}
OBJ2.jj="dhg"
OBJ.o="jjj"
console.log(OBJ2)












type Chair1={
    legs:number,
    color:string,
    company:object
    waite?:number//to attache dynamic values
    }

interface Chair{
legs:number,
color:string,
company:object
waite?:number
}
//it gives errors
var cahir4:object={
    legs:4,
    color:"red",
    company:{wood:{rowwood:'uuu'},nails:'yy'}
}
// console.log(cahir4.legs)
var cahir:Chair={
    legs:4,
    color:"red",
    company:{wood:{rowwood:'uuu'},nails:'yy'}
}
cahir.waite=76
console.log(cahir)