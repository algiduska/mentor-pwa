import React from 'react';
import { render } from '@testing-library/react';
import SignUpPage from './SignUpPage';
import { mount } from 'enzyme';

describe('SignUpPage', () => {
  it('renders sign up page with correct fields', () => {
    const { getByText } = render(<SignUpPage />);
    expect(getByText('Sign up form')).toBeInTheDocument();
    expect(getByText('Email')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
    expect(getByText('Confirm password')).toBeInTheDocument();
  });

  it('should have three form fields and a submit button', () => {
    const wrapper = mount(<SignUpPage />);

    expect(wrapper.find('Formik')).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(3);
    expect(wrapper.find('input')).toHaveLength(3);
    expect(wrapper.find('Button')).toHaveLength(1);
  });
});
