import {
  FETCH_PRODUCT_FAUILER,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "../actionTypes";
import {
    IFetchProductFailurPayload,
  IFetchProductFauiler,
  IFetchProductRequest,
  IFetchProductSuccess,
  IFetchProductSuccessPayload,
} from "../interfaces";

export const fetchProductRequest = (): IFetchProductRequest => ({
  type: FETCH_PRODUCT_REQUEST,
});
export const fetchProductSuccess = (
  payload: IFetchProductSuccessPayload
): IFetchProductSuccess => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload,
});
export const fetchProductFauiler = (
  payload: IFetchProductFailurPayload
): IFetchProductFauiler => ({
  type: FETCH_PRODUCT_FAUILER,
  payload,
});
