import { LoginManager } from 'react-native-fbsdk'
import { Loginwithfacebook } from '../screen/Loginwithfacebook';
import renderer from 'react-test-renderer';
import React from "react";
import { shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import enzyme from 'enzyme';

enzyme.configure({ adapter: new Adapter() });

    it("Shows an alert when an error occurs", () => {

      jest.mock( '../screen/Loginwithfacebook', () => ({
        ...jest.requireActual('react-native-fbsdk'),
        LoginManager: {
          logInWithPermissions: jest.fn(),
        },
       result:{
         iscancelled:'',
         public_profile:'',
         
       },
      }));
      const result = Loginwithfacebook(result);
      expect(result).toEqual('');
    })
      let wrapper = null
  const spyNavigate = jest.fn()
  const props = {
    navigation: {
      navigate: spyNavigate,
      state: {}
    }
  }
  const params = {
    token: 'randomToken'
  }

  beforeEach(() => {
    wrapper = shallow(<Loginwithfacebook {...props} />)
    wrapper.setState({ params: params })
  })

 
      
     
    
   
