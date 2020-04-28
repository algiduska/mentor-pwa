import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('Routes', () => {
  const wrapper = shallow(<Routes />);

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
