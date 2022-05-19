import {PRODUCT_SHOW} from '../redux/action/utility';
import { productstate } from "../redux/reducer/productReducer";
import product from "../redux/reducer/productReducer"
describe('the user reducer', () => {
  const productstate = {
    product:[],
    error: '',
    loading: false
  };

  it('should return the initialState', () => {
    expect(product(undefined, {})).toEqual(productstate);
  });

  it('should handle the GET_APISHOW action', () => {
    const action = { type: 'GET_APISHOW' };
    const expectedState = { ...productstate, loading: true };

    expect(product(productstate, action)).toEqual(expectedState);
  });

  it('should handle the PRODUCT_SHOW action', () => {
    const productlist = [{name:"liner",price:"20"}];
    const action = {
      type: 'PRODUCT_SHOW',
      payload: { product: productlist },
    };
    const expectedState = { ...productstate, product: productlist };

    expect(product(productstate, action)).toMatchSnapshot();
  });
  
  it('should handle the ERROR_SHOW action', () => {
    const action = { type: 'ERROR_SHOW' };
    const expectedState = { ...productstate, loading: false };

    expect(product(productstate, action)).toMatchSnapshot();
  });
});




