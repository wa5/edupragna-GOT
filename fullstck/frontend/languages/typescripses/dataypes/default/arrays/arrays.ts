var a:string="apple"
var b:string="boll"
var c:string="cat"
var d:string="dog"
var arr:string[]=["apple1","boll","cat","dog"]
var [app,boll]=arr//destursing of arrays
console.log(a)
console.log(arr[0])
arr[arr.length]="eliphant"

console.log(arr)
var arrnum=new Array(1,2,4)
arrnum.push(12)
console.log(arrnum)
var arr1=[{a:3,b:"boll"},{a:3,b:"cat"},{a:3,c:"dog"},{a:3}]
const found=arr1.filter((data)=>data.b==="boll")
console.log(found)
const found2=arr1.find((data)=>data.b==="boll")
console.log(found2)
const arrt:number[]=[1,2,3,4,5]
const reducer=((previous,current)=>previous+current)
console.log(arrt.reduce(reducer))