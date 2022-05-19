import React from "react";
import ProductDetail from "../screen/ProductDetail";
import { shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import enzyme from 'enzyme';  
import renderer from 'react-test-renderer';

enzyme.configure({ adapter: new Adapter() });

describe('Dropdown component', () => {
  test('renders correctly', () => {
    const mockedParams = {
      route: { params: { item: 'whatever-id' } },
      navigation: ''
    };

    const tree = renderer.create(<ProductDetail {...mockedParams} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('Dropdown component', () => {
    const props = {
      options: [{ key: 'key',text: 'text',value: 'value'}],
      value: 'value',
      placeholder: 'placeholder',
      onSelect: jest.fn(),
    }
  });



  it("should find text content in all children", () => {
    const item = {
      rating: "rating",
      norating: "norating",
      product_colors: "product_colors",
      // "image": "./assets/images/avata.png",
      price: 20,
      description: "description",
      productType: "productType"
    };
    describe('product', () => {
      const wrapper = mount(
        <ProductDetail item={item} />
      );
    
      it('renders child correctly', () => {
          expect(wrapper.find('view').children()).to.have.length(item.length);
          expect(wrapper.find('view').children().find('Text')).to.have.length(item.length);
    
      });
  });

 

})
});
