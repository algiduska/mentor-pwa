import React from 'react';
import { render } from '@testing-library/react';
import SignUpPage from './SignUpPage';

describe('SignUpPage', () => {
  test('renders about page heading logo', () => {
    const { getByText } = render(<SignUpPage />);
    expect(getByText('Sign up form')).toBeInTheDocument();
  });
});
