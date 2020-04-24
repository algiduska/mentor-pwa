import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('App', () => {
  test('renders flyDays logo', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const logoElement = getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders Routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Routes')).toHaveLength(1);
  });
});
