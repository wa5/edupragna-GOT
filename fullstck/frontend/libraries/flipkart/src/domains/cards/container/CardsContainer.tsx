
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchProductRequest } from "../../../store/productlist/actionGenerator/actions";
import { IProduct } from "../../../store/productlist/interfaces";
import { getProductsSelector } from "../../../store/productlist/selector/productlistSelector";
import { fetchTodoRequest } from "../../../store/todo/ActionGenerator/actions";
import Cards1 from "../component/Cards1";


interface Iownprops{

}
interface IStateProps{
    title:string,
    products:IProduct[]
}

const mapStateToProps=(state:any):IStateProps=>{
console.log(state?.todo?.todo[0]?.title)
console.log( getProductsSelector(state))
return {
    title:state?.todo?.todo[0]?.title,
    products:getProductsSelector(state)
}
}

const mapDispatchToProps=(dispatch:Dispatch)=>{
    dispatch(fetchTodoRequest())
    dispatch(fetchProductRequest())

}
// const renderlist=()=>{

//     return (<>
//    < Cards1 title={""}/>
//     </>)
// }


export const CardsContainer:React.ComponentType<Iownprops>=connect(mapStateToProps,mapDispatchToProps)(Cards1)