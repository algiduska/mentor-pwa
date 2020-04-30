import React from 'react';
import { render } from '@testing-library/react';
import SignUpPage from './SignUpPage';
import { mount } from 'enzyme';

describe('SignUpPage', () => {
  it('renders about page heading logo', () => {
    const { getByText } = render(<SignUpPage />);
    expect(getByText('Sign up form')).toBeInTheDocument();
    expect(getByText('Email')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
  });

  it('should have two form fields and a submit button', () => {
    const wrapper = mount(<SignUpPage />);

    expect(wrapper.find('Formik')).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(2);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('Button')).toHaveLength(1);
  });
});
