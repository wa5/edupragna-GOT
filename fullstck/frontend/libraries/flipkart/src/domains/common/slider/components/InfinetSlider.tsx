import { Grid } from "@mui/material";
import {  Key, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchProductRequest } from "../../../../store/productlist/actionGenerator/actions";
import { IProduct } from "../../../../store/productlist/interfaces";
import { getErrorSelector, getPendingSelector, getProductsSelector } from "../../../../store/productlist/selector/productlistSelector";
import { AppState } from "../../../../store/rootReducer";
import Card2 from "../../../cards/component/Card2";



export const InfinetSlider= () => {
    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const producs = useSelector(getProductsSelector);
    const error = useSelector(getErrorSelector);

    const getPending = (state: AppState) => state.todo.pending;

    useEffect(() => {
        dispatch(fetchProductRequest());
    }, []);
   
      let po= producs.map((product: IProduct, index: Key | null | undefined) => (
       <Grid item><Card2 key={index} data={product} /></Grid> 
      ))
   

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
  };
  return (
    <>
      <Slider {...settings}>
        
       {po}
      </Slider>
    </>
  );
};



