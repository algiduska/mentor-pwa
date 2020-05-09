import React from 'react';
import { render } from '@testing-library/react';
import DashboardPage from './DashboardPage';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('DashboardPage', () => {
  it('should render dashboard page heading', () => {
    const { getByText } = render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    );
    expect(
      getByText(
        'This is your dashboard where you can find or list current mentors'
      )
    ).toBeInTheDocument();
  });

  it('should show all Mentors on the page', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper.find('Mentor')).toHaveLength(5);
  });
});
