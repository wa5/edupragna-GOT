
import fetch from 'node-fetch'
interface Mydata{
    id:number,
    name:string,
    chocalate:string
}

// fetch('http://localhost:3000/students')
// .then((a)=> a.json())
// .then((b)=>console.log("---------------",b))


const simplSettings=(
    //inital:string
):[()=>any,(v:any)=>void]=>{
    let str:any
    return [()=>str,(v:any)=>str=v]
}


const  funD=async():Promise<Mydata>=>{
   let d=await fetch('http://localhost:3000/students')
 
    return d.json()
}
let m:Mydata;
let [data33,setdada33]=simplSettings()
funD().then((g)=>{
 
    
    m=g
    setdada33(m)
    console.log(data33())
   // console.log(m)
})
console.log(data33())
console.log(data33())
