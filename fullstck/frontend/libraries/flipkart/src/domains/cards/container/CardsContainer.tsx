
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchTodoRequest } from "../../../store/todo/ActionGenerator/actions";
import Cards1 from "../component/Cards1";


interface Iownprops{

}
interface IStateProps{
    title:string
}

const mapStateToProps=(state:any):IStateProps=>{
console.log(state?.todo?.todo[0]?.title)
return {
    title:state?.todo?.todo[0]?.title
}
}

const mapDispatchToProps=(dispatch:Dispatch)=>{
    dispatch(fetchTodoRequest())

}
export const CardsContainer:React.ComponentType<Iownprops>=connect(mapStateToProps,mapDispatchToProps)(Cards1)