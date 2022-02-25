import fetch from 'node-fetch'

// fetch('http://localhost:3004/students')
// .then((a)=>{return a.json()})
// .then((b)=>{console.log(b)})


interface Mydata{
    id:number,
    name:string,
    chocalate:string
}



const  funD=async():Promise<Mydata>=>{
   let d=await fetch('http://localhost:3000/students')
 
    return d.json()
}
funD().then((g)=>{
 
    
   
    console.log(g)
   
})