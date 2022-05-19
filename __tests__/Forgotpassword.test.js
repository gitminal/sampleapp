import React from "react";
import { render } from "@testing-library/react-native"
import Forgotpassword from "../screen/Forgotpassword";
import Adapter from "enzyme-adapter-react-16"
import enzyme from 'enzyme';
import { fireEvent, screen } from "react-native-testing-library";
import renderer from 'react-test-renderer';
enzyme.configure({ adapter: new Adapter() });

describe('<Forgotpass />', () => {
    test('renders correctly', () => {
        const rendered = renderer.create(<Forgotpassword />).toJSON();
        expect(rendered).toBeTruthy();
    });
    it('go to Login', () => {
        const navigation = { navigate: () => { } }
        spyOn(navigation, 'navigate');
        const page = render(<Forgotpassword navigation={navigation} />)
        const Login = page.getByTestId('Logintest');
        fireEvent.press(Login);
        expect(navigation.navigate).toHaveBeenCalledWith("Login");
    })
    it('render default ', () => {
        const { getAllByText, getByPlaceholderText,queryAllByText } = render(<Forgotpassword />)
        expect(getAllByText("SUBMIT").length).toBe(1);
        expect(getAllByText("Welcome Home My Friend").length).toBe(1);
        expect(getAllByText("Please").length).toBe(1);
        expect(getByPlaceholderText("Email"));
    })
    it('show Invalid Username and password', () => {
        const { getByTestId, getByText, queryAllByText, getAllByText } = render(<Forgotpassword />)
        fireEvent.changeText(getByTestId("Forgot"));
        queryAllByText('email address must be enter');
        expect(queryAllByText('Password  must be enter').length).toMatchSnapshot();
    })
})