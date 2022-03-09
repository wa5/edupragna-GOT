import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductRequest } from "../../../store/productlist/actionGenerator/actions"
import { getErrorSelector, getPendingSelector, getProductsSelector } from "../../../store/productlist/selector/productlistSelector"



const Cards3Container:React.FC=()=>{
const pending=useSelector(getPendingSelector)
const producs=useSelector(getProductsSelector)
const errors=useSelector(getErrorSelector)
const dispach=useDispatch()


useEffect(()=>{
    dispach(fetchProductRequest)
},[])

    return (<>
    
    
    
    
    </>)
}

export default Cards3Container