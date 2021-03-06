import React, { useState, useCallback } from "react";

const ListItem: React.FC<{ text: number }> = ({ text }) => {
  return <li>{text}</li>;
};

const List: React.FC<{
  numberofitems: {};
}> = ({ numberofitems }) => {
  const listItems = [];
  for (let i = 0; i < numberofitems; i++) {
    listItems.push(<ListItem text={i} />);
  }
  return <ul style={{ listStyleType: "none" }}>{listItems}</ul>;
};
const SaprateCom:React.FC=()=>{
    const [number, setNumber] = useState("");
  const onclick = useCallback((number) => {
    alert("fff");
  }, [number]);
    return (<>
     <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => onclick}>click me</button>
    </>)
}

export default function PerfamanceOptimaizaion() {
  
  return (
    <div>
     <SaprateCom/>
      <List numberofitems={200} />
    </div>
  );
}
