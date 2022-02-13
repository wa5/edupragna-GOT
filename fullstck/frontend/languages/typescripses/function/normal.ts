function add():void{
let a=document.getElementById('a')as HTMLInputElement;
let value=a.value
let b=document.getElementById('b')as HTMLInputElement;

let value2=b.value
alert(parseInt(value)+parseInt(value2))
    console.log(b)

}
//ananomus

var sub=function (a:string){
    console.log(a)
}
console.log(sub)
console.log(sub("im second way"));

//console.log("in second case",add())
///document.getElementById("root").innerHTML=add(3,7)


//fate arrow function
var f=()=>{console.log("dfghjkkl")}


(()=>{console.log("dfghjkkl")})()

// const y=()=>{alert("ssdfgh")}
// function x(y){
// y()
// }
function* adq(){
    yield 0;
    yield 1;
    yield 2;

}
var mmObJ5=adq()

console.log(mmObJ5.next().value)
console.log(mmObJ5.next().value)
console.log(mmObJ5.next().value)
console.log(mmObJ5.next().value)