// const arr=[1,2,3,4]
// arr.map((x,i)=>{
// console.log(">>index",i)
// console.log(">>value",x)
// })


const List:React.FC<{
    items:string[];}>=({items})=>(
        <ul>
            {items.map((v,i)=>(
                <li key={i}>{v}</li>
            ))}
        </ul>
    )


export default function ContainerWithComplexProperties(){
    return (<>

    <List items={["one,","two","three"]}/>
    </>)
}