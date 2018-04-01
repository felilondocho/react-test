import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Item from '../components/Item';

Enzyme.configure({ adapter: new Adapter() });

describe('Item', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Item />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});