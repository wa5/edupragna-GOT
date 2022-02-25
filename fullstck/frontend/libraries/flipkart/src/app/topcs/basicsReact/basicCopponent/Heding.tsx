//rulrs 
//1---file name capes 
//if file contains html then file extension should .tsx
//keep same name function as file name
//4)if u have multile emnts give one wrapper parent elemt
//5)react fragment instead of using parent div

// const HOne=(props:{title:string})=>{
// return (
//     <h1>{props.title}</h1>
 
// )
// }


// const HOne=({title}:{title:string})=>{
//     return (
//         <h1>{title}</h1>
     
//     )
//     }

interface IHeadings{
    title:string
}


const HOne=({title}:IHeadings)=>{
    return (
        <h1>{title}</h1>
     
    )
    }
export default function Heding(){
return <>
<HOne  title="heading"/>
</>
}