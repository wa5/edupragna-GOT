import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchProductRequest } from "../../../store/productlist/actionGenerator/actions";
import {
  getPendingSelector,
  getProductsSelector,
  getErrorSelector,
} from "../../../store/productlist/selector/productlistSelector";
import { AppState } from "../../../store/rootReducer";
import Card2 from "../component/Card2";
import { settings } from "../style/cardsstyle";
import { Mydiv } from "./style";

export const CardsContainer = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const producs = useSelector(getProductsSelector);
  const error = useSelector(getErrorSelector);

  const getPending = (state: AppState) => state.todo.pending;
  useEffect(() => {
    dispatch(fetchProductRequest());
  }, [producs]);

  let po =
    producs.length === 0 ? (
      <>loadng....</>
    ) : (
      producs.map((product, index) => (
        <Grid item>
          <Card2 key={index} data={product} />
        </Grid>
      ))
    );

 
  return (
    <>
      <Mydiv>
        <h2>Movies</h2>
        <Slider {...settings}>{po}</Slider>
      </Mydiv>
    </>
  );
};
