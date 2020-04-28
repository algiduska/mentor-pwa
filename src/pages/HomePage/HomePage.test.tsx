import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('HomePage', () => {
  test('renders about page heading logo', () => {
    const { getByText } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(getByText('Welcome to Mentoring For Women!')).toBeInTheDocument();
  });

  test('shows all elements on the page', () => {
    const wrapper = shallow(<HomePage />);

    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(3);
    expect(wrapper.find('CustomLink')).toHaveLength(1);
  });
});
