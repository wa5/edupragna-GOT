import { Grid } from "@mui/material";
import {  Key, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchProductRequest } from "../../../store/productlist/actionGenerator/actions";
import { IProduct } from "../../../store/productlist/interfaces";
import { getPendingSelector, getProductsSelector, getErrorSelector } from "../../../store/productlist/selector/productlistSelector";
import { AppState } from "../../../store/rootReducer";
import Card2 from "../component/Card2";
import { Mydiv } from "./style";


export const Container2Test= () => {
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
    

      

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 4,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
    <Mydiv>
    <h2>Movies</h2>
      <Slider {...settings}>
        
       {po}
      </Slider>
    </Mydiv>
      
   
    </>
  );
};



