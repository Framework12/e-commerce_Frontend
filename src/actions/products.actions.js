import axios from "../helpers/axios";
import { productConstansts } from "./constants.js";

const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: productConstansts.GET_ALL_PRODUCTS_REQUEST });
      const res = await axios.post(`product/getProducts`);
      console.log(res.data)
      if (res.status === 200) {
        const { products } = res.data;
        dispatch({
          type: productConstansts.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products },
        });
      } else {
        dispatch({ type: productConstansts.GET_ALL_PRODUCTS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProduct = (form) => {
  return async (dispatch) => {
    try {
      dispatch({ type: productConstansts.ADD_PRODUCT_REQUEST });
      const res = await axios.post("product/create", form);
      // console.log(res);
      if (res.status === 201) {
        dispatch({
          type: productConstansts.ADD_PRODUCT_SUCCESS,
        });
        dispatch(getProducts());
      } else {
        dispatch({
          type: productConstansts.ADD_PRODUCT_FAILURE,
          payload: { error: res.data.error },
        });
      }
    } catch (error) {
      console.log(error)
    }
  };
};

export const deleteProductById = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`product/deleteProductById`, {
        data: { payload },
      });
      dispatch({ type: productConstansts.DELETE_PRODUCT_BY_ID_REQUEST });
      if (res.status === 202) {
        dispatch({ type: productConstansts.DELETE_PRODUCT_BY_ID_SUCCESS });
        dispatch(getProducts());
      } else {
        const { error } = res.data;
        dispatch({
          type: productConstansts.DELETE_PRODUCT_BY_ID_FAILURE,
          payload: {
            error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
