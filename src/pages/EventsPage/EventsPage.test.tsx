import React from 'react';
import { render } from '@testing-library/react';
import EventsPage from './EventsPage';

describe('EventsPage', () => {
  it('should render events page ', () => {
    const { getByText } = render(<EventsPage />);
    expect(getByText('Upcoming events')).toBeInTheDocument();
    expect(getByText('Past events')).toBeInTheDocument();
  });
});
