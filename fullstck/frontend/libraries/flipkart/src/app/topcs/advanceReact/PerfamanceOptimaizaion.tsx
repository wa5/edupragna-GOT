import React, { useState,useCallback, useMemo } from 'react'

const ListItem:React.FC<{text:number}>=({text})=>{
    return <li>{text}</li>
}
   
const List:React.FC<{
    numberofitems:number
}>=({numberofitems})=>{
    const listItems=[];
    for(let i=0;i<numberofitems;i++){
        listItems.push(<ListItem text={i}/>)
    }
    return <ul style={{listStyleType:'none'}}>{listItems}</ul>
}
const SaprateCom:React.FC=()=>{
    const [number, setNumber] = useState("");
  const onclick = useCallback((number) => {
    alert("fff");
  }, []);
    return (<>
     <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => onclick(8)}>click me</button>
    </>)
}
export default function PerfamanceOptimaizaion() {
    const [number, setNumber] = useState("");
    const [number1, setNumber1] = useState("");
    const onclick = useCallback((number) => {
      alert(number);
      setNumber(number)
    }, []);
    const listConfig=useMemo(()=>{
        console.log("ll",number)
return number
    },[number])
  return (
    <div>
          <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
         <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => onclick(number)}>click me</button>
    {/* <SaprateCom/> */}
        <List numberofitems={parseInt(listConfig)}/>
     
    </div>
  )
}
