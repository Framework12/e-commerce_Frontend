import axios from "../helpers/axios";
import { categoryConstansts, initialDataConstants, productConstansts ,orderConstants, } from "./constants";

export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axios.post("/initialdata");
    if (res.status === 200) {
        const {categories,products,orders} = res.data
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
        payload:{categories}
      });
      dispatch({
        type: productConstansts.GET_ALL_PRODUCTS_SUCCESS,
        payload: { products},
      });
       dispatch({
         type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
         payload: { orders },
       });
    } else {
      dispatch({
        type: initialDataConstants.GET_ALL_INITIAL_DATA_FAILURE,
        payload: res.data.error,
      });
    }
  };
};
