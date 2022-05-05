import React from "react";
import { render } from "@testing-library/react-native"
import Login from "../screen/Login";
import { shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import enzyme from 'enzyme';
import { fireEvent, screen } from "react-native-testing-library";
import renderer from 'react-test-renderer';
import { debug } from "react-native-reanimated";
import { View, Text, TouchableOpacity,styles ,TextInput} from 'react-native';
import Signup from "../screen/Signup";
enzyme.configure({ adapter: new Adapter() });
describe('<Login />', () => {
    it('renders correctly', () => {
        const rendered = renderer.create(<Signup />).toJSON();
        expect(rendered).toBeTruthy();
    });
    it('render default element', () => {
        const { getAllByText, getByPlaceholderText } = render(<Signup />)
        expect(getAllByText("SIGN UP").length).toBe(1);
        expect(getAllByText("Welcome Home My Friend").length).toBe(1);
        expect(getByPlaceholderText("Name"));
        expect(getByPlaceholderText("Email"));
        expect(getByPlaceholderText("Password"));
        expect(getByPlaceholderText("Password Retype"));

    })
    it('show Invalid Username and password', () => {
        const { getByTestId, getByText, queryAllByText, getByPlaceholderText } = render(<Signup />)
        expect(getByPlaceholderText("Name"));
        fireEvent.changeText(getByTestId("Email"));
        fireEvent.changeText(getByTestId("Password"));
        expect(getByPlaceholderText("Password Retype"));
        queryAllByText('Name must be enter');
        queryAllByText('email address must be enter');
        expect(queryAllByText('Password  must be enter').length).toBe(0);
    })
   
    it('go to Login', () => {
        const navigation = { navigate: () => { } }
        spyOn(navigation, 'navigate');
        const page = render(<Signup navigation={navigation} />)
        const Login = page.getByTestId('Signuptest');
        fireEvent.press(Login);
        expect(navigation.navigate).toHaveBeenCalledWith("Login");
    })
//   
    it('validate user inputs, and provides error messages', async () => {
        const { getByTestId, getByText, queryByTestId } = render(<Signup />)
        fireEvent.changeText(getByTestId("Email"), {
            target: { onchangetext: "" },
        });
        fireEvent.changeText(getByTestId("Password"), {
            target: { onchangetext: "" },
        });
        fireEvent.press(queryByTestId("Signup"));
        expect(getByText("Enter email.")).toBeInTheDocument();
    })

//     })
//     const handlePassword = jest.fn();
//     const eventData = {
//         nativeEvent: {
//             email : "",
//         },
//     };
//            let wrapper;
//     wrapper = shallow(<Login />);
//     // mock $(...).modal and localStorage.setItem
//     wrapper.instance().handleValidEmail({ Email: { value: '' } });
//     expect(wrapper.setEmail).toEqual({ Email: '', titleError: "email invalid" });
//     wrapper = shallow(<App />);
//     // mock $(...).modal and localStorage.setItem
//     wrapper.setState({ title: '' });
//     wrapper.instance().onEditNote({ target: { value: '0' } });
//     expect(wrapper.state.titleError).toEqual({ body: '', bodyError: "password invalid" });

//     const handleValidEmail = jest.fn();
//     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

// const Email = 'Jon@jon.com';

// const { getByPlaceholderText } = render(
//   <View>
//     <TextInput placeholder="Email" onChangeText={handleValidEmail} />
//   </View>
// );

// fireEvent.changeText(getByPlaceholderText('Email'), Email);
    
//       it('increment counter correctlry', () => {
//         const setEmail = jest.fn();
//         const useStateSpy = jest.spyOn(React, 'useState');
//         useStateSpy.mockImplementation((init) => [init, setEmail]);
//          expect(setEmail).toHaveBeenCalledWith(1);
//     })
//     it('go to signup1', () => {
//         const instanceOf = renderer.create(<Login />).getInstance();
//       const   handleValidEmail =('jon@jon.com');
//         expect(handleValidEmail).toEqual('jon@jon.com')
//     });

//     // it("should validate form fields", async () => {
//     //     const mockhandleValidEmail = jest.fn();
//     //     render(<Login handleValidEmail={mockhandleValidEmail} />);
//     //     fireEvent.input(screen.getByTestId("Emailtest"), {
//     //       target: {
//     //         value:"Email"
//     //       }
//     //     });

//     //     fireEvent.input(screen.getByRole("Passwordtest", { Password: "Passwordtest" }), {
//     //       target: { value:"password" }
//     //     });

//     //     fireEvent.submit(screen.getByRole("button", { name: Email}));
//     //     expect(await screen.findAllByRole("alert")).toHaveLength(3);
//     //     expect(mockSave).not.toBeCalled();
//     //   });
});