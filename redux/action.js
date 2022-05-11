export const PRODUCT_SHOW = 'PRODUCT_SHOW';
export const GET_APISHOW = 'GET_APISHOW';
export const ERROR_SHOW = 'ERROR_SHOW';
import axios from "axios";

export const getproduct = () => {
  try {
    return async dispatch => {
      const res = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
      console.log("res", res.data[0].name);
      if (res.data) {

        dispatch({
          type: PRODUCT_SHOW,
          payload: res.data,

        })
      } else {
        dispatch({ type: ERROR_SHOW, payload: "unable to fetch" });

      }
    };
  } catch (error) {
    dispatch({ type: ERROR_SHOW, payload: error });
  }
};