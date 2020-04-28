import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  const props = {
    children: 'Content',
  };
  const wrapper = shallow(<Container {...props} />);

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
