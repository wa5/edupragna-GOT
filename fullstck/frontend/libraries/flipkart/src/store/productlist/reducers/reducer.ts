import {
  FETCH_PRODUCT_FAUILER,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "../actionTypes";
import { IProductAllAction, IProductState } from "../interfaces";

const initalState: IProductState = {
  pending: false,
  product: [],
  error: null,
};

export default (state = initalState, action:IProductAllAction) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PRODUCT_SUCCESS:
        console.log("jj")
      return {
        ...state,
        pending: false,
        product: action.payload.product,
        error: null,
      };
    case FETCH_PRODUCT_FAUILER:
      return {
        ...state,
        pending: false,
        product: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
