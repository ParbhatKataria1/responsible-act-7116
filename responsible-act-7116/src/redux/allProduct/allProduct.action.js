import * as types from './allProduct.actionTypes'
import { fetchAllProductData, fetchDeleteAllProductData, fetchPostAllProductData, fetchUpdateAllProductData } from './allProduct.api';


export  const getAllProductData =  (type='allproduct')=>async(dispatch)=>{
    dispatch({type:types.ALLPRODUCT_LOADING});
    try {
        let data = await fetchAllProductData(type);
        // console.log(data);
        if(data){
            dispatch({type:types.GET_ALLPRODUCT_DATA, payload:data});
            return data
        }
    } catch (error) {
        dispatch({type:types.ALLPRODUCT_ERROR})
    }
}


export  const postALlProductData =  (obj, type='allproduct')=>async(dispatch)=>{
    dispatch({type:types.ALLPRODUCT_LOADING});
    try {
        let data = await fetchPostAllProductData(obj, type);
       
        if(data){
            
            dispatch({type:types.POST_ALLPRODUCT_DATA, payload:data})
            return data;
        }
    } catch (error) {
        dispatch({type:types.ALLPRODUCT_ERROR})
    }
}

export  const updateAllProductData =  (id , obj, type='allproduct')=>async(dispatch)=>{
    console.log(id, obj, 'this is ')
    dispatch({type:types.ALLPRODUCT_LOADING});
    try {
        let data = await fetchUpdateAllProductData(id, obj, type);
        if(data){
            
            dispatch({type:types.UPDATE_ALLPRODUCT_DATA, payload:data});
            return data;
        }
    } catch (error) {
        dispatch({type:types.ALLPRODUCT_ERROR})
    }
}

export  const deleteAllProductData =  (id, type='allproduct')=>async(dispatch)=>{
    dispatch({type:types.ALLPRODUCT_LOADING});
    try {
        let data = await fetchDeleteAllProductData(id, type);
        if(data){
            
            dispatch({type:types.DELETE_ALLPRODUCT_DATA, payload:id});
            return data;
        }
    } catch (error) {
        dispatch({type:types.ALLPRODUCT_ERROR})
    }
}



