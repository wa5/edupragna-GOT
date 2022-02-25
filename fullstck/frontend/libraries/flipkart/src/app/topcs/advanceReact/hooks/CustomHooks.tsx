import { useEffect, useMemo, useState } from "react"


interface IBeverages{
name:string,
bname:string,
abv:number
}


function useFetchData<Payload>(url:string):{data:Payload|null
    done:boolean}{


        const [data,dataSet]=useState<Payload|null>(null)
        const [done,setDone]=useState(false)
 
        useEffect(()=>{
            fetch(url)
            .then((res)=>res.json())
            .then((d:Payload)=>{
                dataSet(d)
                setDone(true)
            })
        },[url])
    return {
        data,
        done
    }
}



const CustomHooks:React.FC=()=>{
    const {data}=useFetchData<IBeverages[]>('http://localhost:3004/beverag')
   const g=useMemo(()=>(data||[]).filter((bev)=>bev.name.includes('sai')),[data])
  
    return (<>
    {
    g.length&&(
<h1>{JSON.stringify(g![1].abv)}</h1>

    )
}
    
    </>)
}

export default CustomHooks