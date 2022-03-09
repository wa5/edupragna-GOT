import { connect } from "react-redux";
import { getSingleProductsSelectorId } from "../../../store/productlist/selector/productlistSelector";
import Cards4MoreDetails from "../component/Cards4MoreDetails";

interface IStateProps{
    image:string,
    title:string,
    description:string,
    rating: {
        rate: number,
        count: number
        }
    }
interface  IownProps{
    id:number
}

const mapStateToprops=(state:any,ownProps:IownProps):IStateProps=>{

console.log("----",getSingleProductsSelectorId(state,ownProps.id))
    return {
        image:getSingleProductsSelectorId(state,ownProps.id)?.image,
        title:"gfhj",
        description:"dsffgh",
        rating: {
            rate: 5,
            count: 3
            }
    }
}

export const SinglePageCardConatiner:React.ComponentType<IownProps>=connect(mapStateToprops)(Cards4MoreDetails)