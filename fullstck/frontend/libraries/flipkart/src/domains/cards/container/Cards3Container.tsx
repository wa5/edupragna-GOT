import { Grid } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Slider from "react-slick"
import { fetchProductRequest } from "../../../store/productlist/actionGenerator/actions"
import { getErrorSelector, getPendingSelector, getProductsSelector } from "../../../store/productlist/selector/productlistSelector"
import Cards3 from "../component/Cards3"
import { settings } from "../style/Card3Styles"



const Cards3Container=()=>{
const pending=useSelector(getPendingSelector)
const producs=useSelector(getProductsSelector)
const errors=useSelector(getErrorSelector)
const dispatch=useDispatch()
console.log(producs[0]?.image)
    useEffect(()=>{
        dispatch(fetchProductRequest())
    },[])

    var Po=producs.map((pro,indx)=>

    <Grid item key={indx}>
        <Cards3 
                image={pro.image} title={pro.title} id={indx}/>
        </Grid>
        )

    return (<>
    
    <h1>fggfgf</h1>
    
    <Slider {...settings}>
    {Po}
        </Slider>
    </>)
}

export default Cards3Container