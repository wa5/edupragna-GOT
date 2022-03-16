import { createSelector } from "reselect";
import { AppState } from "../../rootReducer";
import { IProductsGlobalState } from "../interfaces/IrootProducts";

const getPending = (state: IProductsGlobalState) => state.domain.ProductState.pending;

const getProducts = (state:IProductsGlobalState) => state.domain.ProductState.product;

const getError = (state: IProductsGlobalState) => state.domain.ProductState.error;
const getSingleProductId = (state: IProductsGlobalState,id:number) => state.domain.ProductState.product[id];

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
