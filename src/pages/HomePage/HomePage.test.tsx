import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  test('renders about page heading logo', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText('Welcome to Home page')).toBeInTheDocument();
  });
});
