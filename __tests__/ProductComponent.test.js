import { mount } from "enzyme";
import ProductComponent from "../Component/ProductComponent";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter()});
jest.mock('react-redux');
describe('ProductComponent', () => {
    it("should render my component", () => {
        const wrapper = shallow(<ProductComponent />);
      })

})