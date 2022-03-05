import {
  FETCH_PRODUCT_FAUILER,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "../actionTypes";
export interface IProductState {
  pending: boolean;
  product: IProduct[];
  error: string | null;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface IFetchProductSuccessPayload {
  product: IProduct[];
}
export interface IFetchProductFailurPayload {
  error: string;
}
export interface IFetchProductRequest {
  type: typeof FETCH_PRODUCT_REQUEST;
}

export interface IFetchProductSuccess {
  type: typeof FETCH_PRODUCT_SUCCESS;
  payload: IFetchProductSuccessPayload;
}
export interface IFetchProductFauiler {
  type: typeof FETCH_PRODUCT_FAUILER;
  payload: IFetchProductFailurPayload;
}

export type IProductAllAction =
  | IFetchProductRequest
  | IFetchProductSuccess
  | IFetchProductFauiler;
