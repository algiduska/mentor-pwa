import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let wrapper: any;
  let links: any;

  beforeEach(() => {
    wrapper = shallow(<Header />);
    links = wrapper.find('Link');
  });

  it('should have correct amount of Link elements', () => {
    expect(links).toHaveLength(4);
  });

  it('should have correct link on a link element', () => {
    const expectedLinks = ['/', '/dashboard', '/about', '/events'];
    const actualLinks = links.map((linkElement: any) => linkElement.props().to);
    expect(actualLinks).toEqual(expectedLinks);
  });

  it('should have correct name on navigation bar', () => {
    expect(links.at(1).props().children).toEqual('Dashboard');
    expect(links.at(2).props().children).toEqual('About');
    expect(links.at(3).props().children).toEqual('Events');
  });
});
