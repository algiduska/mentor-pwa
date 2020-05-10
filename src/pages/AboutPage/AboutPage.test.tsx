import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('AboutPage', () => {
  it('should render about page heading', () => {
    const { getByText } = render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );
    expect(getByText('Mentoring For Women!')).toBeInTheDocument();
  });

  it('should show all elements on the page', () => {
    const wrapper = shallow(<AboutPage />);

    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h2')).toHaveLength(2);
    expect(wrapper.find('p')).toHaveLength(3);
    expect(wrapper.find('CustomLink')).toHaveLength(1);
  });
});
