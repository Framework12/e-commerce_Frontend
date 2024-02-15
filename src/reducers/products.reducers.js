import { productConstansts } from "../actions/constants"

const initState={
    products:[],
    error:null,
    loading:false
}

export default (state=initState , action)=>{
    switch(action.type){
        case productConstansts.GET_ALL_PRODUCTS_REQUEST:
            state={
                ...state,
                loading:true
            }
            break
        case productConstansts.GET_ALL_PRODUCTS_SUCCESS:
            state={
                ...state,
                products:action.payload.products,
                loading:false
            }
            break
        case productConstansts.GET_ALL_PRODUCTS_FAILURE:
            state={
                ...state,
                loading:false,
                error:action.payload.error
            }
            break
    }
    return state
}