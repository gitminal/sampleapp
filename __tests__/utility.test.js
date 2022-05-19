import axios from 'axios';
import mockAxios from 'axios'
import GET_APISHOW from '../redux/action/utility';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();
afterEach(() => jest.resetAllMocks());
jest.mock('axios');
const dispatch = jest.fn();
const middlewares = [thunk] 
jest.mock('../redux/action/utility');
test("test1",() => {
  const res={
    data:""
  }
  module.exports = {
  get: jest.fn((url) => {
    if (res.data === '/something') {
      const dispatch = jest.fn();
        return  dispatch({
          type: GET_APISHOW,
          payload: res.data,
        })
      }})
    }
})

  function getproduct () {
    return async dispatch => {
      await mockAxios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
      return  dispatch({
        type: 'PRODUCT_SHOW',
      })
    };
  }
it('should execute axios data', () => {
  const store = mockStore({})
  return store.dispatch(getproduct())
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toMatchSnapshot()
    })
});
it('should handle TEST_API_SUCCESS action', async () => {
  const dispatch = jest.fn();
  const response = '{"items": [{"id": 1}]}';
  await store.dispatch(getproduct('/test', response));
  expect(store.getActions()).toMatchSnapshot();
  global.fetch = jest.fn();

fetch.mockResponseIsSuccess = (body) => {
  fetch.mockImplementationForOnce (
    () => Promise.resolve({json: () => Promise.resolve(JSON.parse(body))})
  );
};


});
jest.mock("axios", () => ({
  get: jest.fn((url) => { 
    return new Promise((resolve) => {
      url = url
      resolve(true)
    })
  })
}))
it('should handle TEST_API_FAILURE action', async () => {
  const mockError = new Error('I am an error.');
  await store.dispatch(getproduct('/test', mockError));
  expect(store.getActions()).toMatchSnapshot();
  fetch.mockResponseIsFailure = (error) => {
    fetch.mockImplementationForOnce(
      () => Promise.reject(error)
    );
  };
});

