import React from "react";
import { render } from "@testing-library/react-native"
import Loginwithgoogle from "../screen/Loginwithgoogle";
import Adapter from "enzyme-adapter-react-16"
import enzyme from 'enzyme';
import renderer from 'react-test-renderer';
enzyme.configure({ adapter: new Adapter() });
describe('<Loginwithgoogle />', () => {
  jest.mock('@react-native-google-signin/google-signin', () => {
    const mockGoogleSignin = require.requireActual('@react-native-google-signin/google-signin');
  
    mockGoogleSignin.GoogleSignin.hasPlayServices = () => Promise.resolve(true);
    mockGoogleSignin.GoogleSignin.configure = () => Promise.resolve();
    mockGoogleSignin.GoogleSignin.currentUserAsync = () => {
      return Promise.resolve({
        name: 'name',
        email: 'test@example.com',
      });
    };
    test('renders correctly', () => {
        const rendered = renderer.create(<Loginwithgoogle />).toJSON();
        expect(rendered).toBeTruthy();
        
    });
   
      
      
  })
});