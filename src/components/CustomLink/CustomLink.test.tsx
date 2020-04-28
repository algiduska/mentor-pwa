import React from 'react';
import { shallow } from 'enzyme';
import CustomLink from './CustomLink';

describe('CustomLink', () => {
  const toProp: string = '/new';
  const childrenProp: string = 'New page';

  it('should display correct text and to props', () => {
    const wrapper = shallow(
      <CustomLink to={toProp}>{childrenProp}</CustomLink>
    );
    expect(wrapper.find('Link').props().to).toEqual(toProp);
    expect(wrapper.find('Link').props().children).toEqual(childrenProp);
  });
});
