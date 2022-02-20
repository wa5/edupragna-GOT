interface Cat{
 name:string,
    bread:string
}

type Readonlydata=Readonly<Cat>
type Readonlydata2=Partial<Cat>

function makeCat(name:string,bread:string):Readonlydata{
    return {
        name,bread
    }
}
var usual= makeCat("caty","percian")
//usual.name="indaincat"
console.log(usual)