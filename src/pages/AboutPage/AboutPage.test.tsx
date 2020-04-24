import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  test('renders about page heading logo', () => {
    const { getByText } = render(<AboutPage />);
    expect(getByText('Welcome to about page')).toBeInTheDocument();
  });
});
