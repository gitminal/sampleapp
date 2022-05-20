import React from "react";
import ProductDetail from "../screen/ProductDetail";
import { shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import enzyme from 'enzyme';  
import renderer from 'react-test-renderer';

enzyme.configure({ adapter: new Adapter() });

describe('component', () => {
  
  it("test", () => {
    const item = {
      rating: "rating",
      norating: "norating",
      product_colors: "product_colors",
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
test('renders correctly', () => {
  const item = {
    rating: "rating",
    norating: "norating",
    product_colors: "product_colors",
    price: 20,
    description: "description",
    productType: "productType"
  };
  const mockedParams = {
    route: { params: { item: item } },
    navigation: ''
  };

  const tree = renderer.create(<ProductDetail {...mockedParams} />).toJSON();
  expect(tree).toBeTruthy();
});


describe("App Component", () => {
  const item = {
    rating: "rating",
    norating: "norating",
    product_colors: "product_colors",
    price: 20,
    description: "description",
    productType: "productType"
  };
  let wrapper;
  beforeEach(() =>
    wrapper = mount(<ProductDetail { ...initialProps }/>),
    wrapper.setState({ item: item }),
  )
it("sets the 'user.isStarred' state to 'active' or 'idle'", () => {
 

  expect(wrapper.state("item.rating==null").toBeTruthy("norating"));

  invokeStarHandler();

  expect(wrapper.state("item.rating==null").toBeTruthy("norating"));
});

})
// it("sets the 'user.isStarred' state to 'active' or 'idle'", () => {
 

//   expect(("item.rating==null").toEqual("item.rating"));


//   expect(("item.rating==null").toEqual("item.rating"));
// });


})