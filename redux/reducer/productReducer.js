import {ERROR_SHOW} from '../action';
import {GET_APISHOW} from '../action';
import {PRODUCT_SHOW} from '../action';

 export const productstate={
product:[],
error: '',
loading: false
};

function productReducer(state = productstate, action) {
  switch (action.type) {
     case GET_APISHOW:
        return {...state,loading:true};
    case PRODUCT_SHOW:
      return {...state, product: action.payload,loading:false};
    case ERROR_SHOW:
      return {...state,error:action.payload,loading:false};
      default:
      return state;
  }
}
export default productReducer;