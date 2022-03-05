import axios, { AxiosResponse } from 'axios'
import {all, call, put, takeLatest} from 'redux-saga/effects'
import { fetchProductFauiler, fetchProductSuccess } from '../actionGenerator/actions'
import { FETCH_PRODUCT_REQUEST } from '../actionTypes'
import { IProduct } from '../interfaces'

const getProdcts=()=>axios.get<IProduct[]>('https://fakestoreapi.com/products')

//worker saga
function* getProductDataSaga(){
    console.log("im called")
    try{
        const response:AxiosResponse<IProduct[]>=yield call(getProdcts)
        yield put(fetchProductSuccess({product:response.data}))
        console.log("im called")
    }catch(e:any){
        yield put(fetchProductFauiler({error:e.message}))

    }
   
}



function* productWatcherSaga(){
yield all([takeLatest(FETCH_PRODUCT_REQUEST,getProductDataSaga)])
}

export default productWatcherSaga