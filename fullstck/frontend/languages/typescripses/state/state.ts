// var a=1
// setInterval(()=>{
//     console.log(a++)
// },1000)


function stests(){
    var num
    const  inc=(props:number)=>{
        num=props
        console.log(num)
    }
    console.log(num)
    return [num,inc]
}
var [num,inc]=stests()
console.log(num)
console.log(inc(3))
console.log(num)