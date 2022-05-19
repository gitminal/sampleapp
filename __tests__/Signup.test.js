import React from "react";
import { render } from "@testing-library/react-native"
import Adapter from "enzyme-adapter-react-16"
import enzyme from 'enzyme';
import { fireEvent, screen } from "react-native-testing-library";
import renderer from 'react-test-renderer';
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
    // it('validate user inputs, and provides error messages', async () => {
    //     const { getByTestId, getByText, queryByTestId } = render(<Signup />)
    //     fireEvent.changeText(getByTestId("Email"), {
    //         target: { onchangetext: "" },
    //     });
    //     fireEvent.changeText(getByTestId("Password"), {
    //         target: { onchangetext: "" },
    //     });
    //     fireEvent.press(queryByTestId("Signup"));
    //     expect(getByText("Enter email.")).toBeInTheDocument();
    // })

    // it('calling the clickFollowHandler method from App Component has the expected effect on the state of the first user', () => {
    //     const AppComponent = shallow(<Signup />)
    //     const wrapper = AppComponent.instance()
    //     expect(wrapper.state.chName==true).toMatch('emailValidError')
    //   })
    
    //   it('calling the clickStarHandler method from App Component has the expected effect on the state of the second user', () => {
    //     const AppComponent = shallow(<Signup />)
    //     const wrapper = AppComponent.instance()
    //     expect(wrapper.state.chName==false).toEqual('emailValidError')
    //   })
    
});