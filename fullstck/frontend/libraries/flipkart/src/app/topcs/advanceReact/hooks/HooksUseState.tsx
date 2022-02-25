import { useEffect, useState } from "react"
import second from '../../../../data/data.json'
const Box:React.FC<Pylaod|null>=({text})=>{

    return (<>
    <h1>{text}</h1>
    
    </>)
}
interface Pylaod{
    text:string|null
}
const HooksUseState:React.FC=()=>{
const [paylod,setPaylod]=useState<Pylaod|null>(null)
const [paylod1,setPaylod1]=useState(54)
useEffect(()=>{

fetch("http://localhost:3004/students")
.then((res)=>res.json())
.then((res)=>{
    console.log("jj",res)
    setPaylod(res)})

    setPaylod1(678)
},[])

    return (<>
    <h1>{JSON.stringify({paylod})}</h1>
    <h2>{paylod1}</h2>
 
    </>)
}


export default HooksUseState