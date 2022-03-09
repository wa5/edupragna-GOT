import { createSelector } from "reselect";
import { AppState } from "../../rootReducer";

const getPending = (state: AppState) => state.product.pending;

const getProducts = (state: AppState) => state.product.product;

const getError = (state: AppState) => state.product.error;
const getSingleProductId = (state: AppState,id:number) => state.product.product[id];

export const getSingleProductsSelectorId = createSelector(
  getSingleProductId,
  (products) => products
);
export const getProductsSelector = createSelector(
  getProducts,
  (products) => products
);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
