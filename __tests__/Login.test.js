import React from "react";
import { render } from "@testing-library/react-native"
import Login,{validate} from "../screen/Login";
import { shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import enzyme from 'enzyme';
import { fireEvent, screen } from "react-native-testing-library";
import renderer from 'react-test-renderer';
import { debug } from "react-native-reanimated";
import { View, Text, TouchableOpacity,styles ,TextInput} from 'react-native';
enzyme.configure({ adapter: new Adapter() });

// let wrapper;
// const setState = jest.fn();
// const useStateSpy = jest.spyOn(React, "useState")
// useStateSpy.mockImplementation((init) => [init, setState]);

// beforeEach(() => {
//     wrapper = enzyme.mount(enzyme.shallow(<Login />).get(0))
// });

// afterEach(() => {
//     jest.clearAllMocks();
// });
describe('<Login />', () => {
    test('renders correctly', () => {
        const rendered = renderer.create(<Login />).toJSON();
        expect(rendered).toBeTruthy();
    });
    it('render default element', () => {
        const { getAllByText, getByPlaceholderText } = render(<Login />)
        expect(getAllByText("Login").length).toBe(1);
        expect(getAllByText("Welcome Home My Friend").length).toBe(1);
        expect(getByPlaceholderText("Email"));
        expect(getByPlaceholderText("Password"));
    })
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
    
     
      const handleValidEmail = jest.fn();
      const END_EDITING = 'content';
      
      const { getByPlaceholderText } = render(
        <View>
          <TextInput placeholder="Email" onEndEditing={handleValidEmail} />
        </View>
      );
      fireEvent.changeText(getByPlaceholderText('Email'),END_EDITING);
      
      test('it changes the value in <TextInput />', () => {
        const handleValidEmail = jest.fn()
        const { queryAllByTestId } = render(<Login onEndEditing={handleValidEmail} />)
        const newTestValue = 'Enter email'
        const input = queryAllByTestId('Emailtest')
        fireEvent.changeText(input, newTestValue) 
        expect(input.handleValidEmail).toHaveBeenCalled(1)
      })
      
      test('it has a placeholder prop', () => {
        const handleValidEmail = jest.fn()
        const { queryAllByTestId } = render(
          <Login onChangeText={handleValidEmail} placeholder="Email" />,
        )
        const input = queryAllByTestId('Emailtest')
        expect(input).toHaveProp('placeholder')
      })
      test('pass', () => {
        const { getByPlaceholderText, queryAllByText } = render(
          <Login />
        );
        fireEvent.changeText(
          getByPlaceholderText('Email'),
          'pen@gmail.com'        );
        const bananaElements = queryAllByText('pen@gmail.com');
        expect(bananaElements).toHaveLength('bananaElements'); 
        console.log(bananaElements);
      });



});