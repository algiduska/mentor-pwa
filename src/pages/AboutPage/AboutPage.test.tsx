import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('AboutPage', () => {
  test('renders about page heading logo', () => {
    const { getByText } = render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );
    expect(getByText('Welcome to Mentoring For Women!')).toBeInTheDocument();
  });

  test('shows all elements on the page', () => {
    const wrapper = shallow(<AboutPage />);

    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(3);
    expect(wrapper.find('CustomLink')).toHaveLength(1);
  });
});
