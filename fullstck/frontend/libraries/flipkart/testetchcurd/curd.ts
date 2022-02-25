import fetch from 'node-fetch'

fetch("http://localhost:3004/students")
.then((res)=>res.json())
.then((res)=>{
    console.log("jj",res)
    })

