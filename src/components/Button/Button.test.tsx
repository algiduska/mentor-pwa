import React from 'react';
import { shallow } from 'enzyme';
import Button, { ButtonTypeEnum } from './Button';

describe('Button', () => {
  const props = {
    onClick: jest.fn(),
    type: ButtonTypeEnum.Button,
    children: 'New Button',
    disabled: false,
  };

  it('should display correct props', () => {
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper.find('button').props().onClick).toEqual(props.onClick);
    expect(wrapper.find('button').props().children).toEqual(props.children);
    expect(wrapper.find('button').props().type).toEqual(props.type);
    expect(wrapper.find('button').props().disabled).toEqual(props.disabled);
  });
});
