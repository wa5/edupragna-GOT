console.log(1)

var mypromiss=new Promise((res,notresl)=>{
    var pro=false
    if(!pro){
        setTimeout(()=>{
            res(3)
          
        },2000)
    }else{
        notresl("not resolved")
    }
   
})
var resolved=mypromiss
.then((data)=>{
    
console.log(data)
    return data
})
.catch((data)=>{
    
console.log(data)
    return data})

console.log(resolved)
console.log(resolved)


