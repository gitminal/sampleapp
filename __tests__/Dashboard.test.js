import {render,screen } from 'react-native-testing-library'
import React from 'react';
import enzyme from 'enzyme';
import { Provider } from 'react-redux'
import {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import Dashboard from '../screen/Dashboard';
import { FlatList ,View} from 'react-native';
describe('Dashboard ', () => {
  const initialState = {
    productReducer: {
       product: [],
       loading:false,
       error:'',
    },
  };
  const middlewares = [thunk];
  const mockStoreConfigure = configureMockStore(middlewares);
  const store = mockStoreConfigure({ ...initialState });
  const originalDispatch = store.dispatch;
  store.dispatch = jest.fn(originalDispatch)
    enzyme.configure({ adapter: new Adapter() });
  const mockDataproduct = [
    {
      id: 'id-1',
      name: 'Todo-1',
    },
    {
      id: 'id-2',
      name: 'Todo-2',
    },
    {
      id: 'id-3',
      name: 'Todo-3',
    },
  ]
  test('flatlist component should be render', () => {
    const createTestProps = (props) => ({
      navigation: {
        navigate: jest.fn(),
      },
      ...props
    });
    const componentTree = render(
      <Provider store={store}>
      <Dashboard  todos={mockDataproduct}  />
  </Provider>
    )
    expect(componentTree.UNSAFE_getAllByType(FlatList).length).toBe(1)
    expect(componentTree.UNSAFE_getAllByType( View).length).toMatchSnapshot();

  })

})
