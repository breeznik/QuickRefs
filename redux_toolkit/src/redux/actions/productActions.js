import {ActionTypes} from "../constants/action-types.js";

export const setProducts = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS , 
        payload: products
    }
}

export const selectedProducts = (products) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT , 
        payload: products
    }
}
