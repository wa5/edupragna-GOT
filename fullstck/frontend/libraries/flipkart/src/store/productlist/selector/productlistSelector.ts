import { createSelector } from "reselect";
import { AppState } from "../../rootReducer";

const getPending = (state: AppState) => state.product.pending;

const getProducts = (state: AppState) => state.product.product;

const getError = (state: AppState) => state.product.error;

export const getProductsSelector = createSelector(
  getProducts,
  (products) => products
);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
