const ar=[1,2,3,4,6]
const h=ar.map((x,i)=>{
    console.log(">>",i)
    console.log(x)
    return x+i
})
console.log(h)