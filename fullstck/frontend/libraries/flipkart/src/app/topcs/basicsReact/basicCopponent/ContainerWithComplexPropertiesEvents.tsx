// const arr=[1,2,3,4]
// arr.map((x,i)=>{
// console.log(">>index",i)
// console.log(">>value",x)

import { useCallback } from "react"

// })
interface IList{
    items:string[],
    onClick?:(item:string)=>void
}

const List:React.FC<IList>=({items,onClick})=>(
        <ul>
            {items.map((item,i)=>(
                <li key={i} onClick={()=>{onClick?.(item)}}>{item}</li>
            ))}
        </ul>
    )


export default function ContainerWithComplexPropertiesEvents(){
    const onLisstClick=useCallback((item:string)=>{
        alert(item)
    },[])
    return (<>

    <List items={["one,","two","three"]} onClick={onLisstClick}/>
    </>)
}