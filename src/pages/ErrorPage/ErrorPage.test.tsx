import React from 'react';
import { render } from '@testing-library/react';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('should render error page ', () => {
    const { getByText } = render(<ErrorPage />);
    expect(getByText('Error')).toBeInTheDocument();
  });
});
