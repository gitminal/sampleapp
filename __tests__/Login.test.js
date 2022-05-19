import React from "react";
import { render } from "@testing-library/react-native"
import Login,{validate} from "../screen/Login";
import { shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import enzyme from 'enzyme';
import { fireEvent } from "react-native-testing-library";
import renderer from 'react-test-renderer';
enzyme.configure({ adapter: new Adapter() });


describe('<Login />', () => {
    test('renders correctly', () => {
        const rendered = renderer.create(<Login />).toJSON();
        expect(rendered).toBeTruthy();
    });
    // it('render default element', () => {
    //     const { getAllByText, getByPlaceholderText } = render(<Login />)
    //     expect(getAllByText("Login").length).toBe(1);
    //     expect(getAllByText("Welcome Home My Friend").length).toBe(1);
    //     expect(getByPlaceholderText("Email"));
    //     expect(getByPlaceholderText("Password"));
    // })
    it('show Invalid Username and password', () => {
        const { getByTestId, getByText, queryAllByText, getAllByText } = render(<Login />)
        fireEvent.changeText(getByTestId("Emailtest"));
        fireEvent.changeText(getByTestId("Passwordtest"));
        queryAllByText('email address must be enter');
        expect(queryAllByText('Password  must be enter').length).toMatchSnapshot();
    })
  
    it('go to signup', () => {
        const navigation = { navigate: () => { } }
        spyOn(navigation, 'navigate');
        const page = render(<Login navigation={navigation} />)
        const Signup = page.getByTestId('Signup');
        fireEvent.press(Signup);
        expect(navigation.navigate).toHaveBeenCalledWith("Signup");
    })
    it('go to Forgot', () => {
        const navigation = { navigate: () => { } }
        spyOn(navigation, 'navigate');
        const page = render(<Login navigation={navigation} />)
        const Forgotpassword = page.getByTestId('Forgotpassword');
        fireEvent.press(Forgotpassword);
        expect(navigation.navigate).toHaveBeenCalledWith("Forgotpassword");

    })
  
   
      const container = shallow(<Login />);

      it('should set the password value on change event with trim', () => {
        container.find('TextInput[placeholder="Email"]').simulate('change', {
          target: {
            onchageText: 'Email',
          },
        });
        console.log("container",container);
        expect(container.find('TextInput[placeholder="Email"]').prop('onchageText')).toEqual(
          undefined,
        );
      });
    
     
      // const handleValidEmail = jest.fn();
      // const END_EDITING = 'content';
      
      


});