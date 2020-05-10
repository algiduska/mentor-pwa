import React from 'react';
import Mentor from './Mentor';
import { shallow } from 'enzyme';

describe('Mentor', () => {
  const mentor = {
    name: 'Luna Lovegood',
    title: 'UX Designer',
    description:
      'Self-taught from videos online. Learning is so easy these days! ',
    keywords: [
      'painting',
      'nature',
      'people',
      'colourful socks',
      'jewelry making',
    ],
    profileImage: null,
    email: 'luna@and.digital',
    isMentor: true,
  };

  const wrapper = shallow(<Mentor {...mentor} />);

  it('should contain all components', () => {
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('span')).toHaveLength(mentor.keywords.length);
    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('should show correct text in each field', () => {
    expect(wrapper.find('img').prop('alt')).toEqual(mentor.name);
    expect(wrapper.find('h3').prop('children')).toEqual(mentor.name);
    expect(wrapper.find('h4').prop('children')).toEqual(mentor.title);
    expect(wrapper.find('p').prop('children')).toEqual(mentor.description);
    wrapper.find('span').forEach((element: any, index) => {
      expect(element.props('children').children).toEqual([
        '#',
        mentor.keywords[index],
        ' ',
      ]);
    });
    expect(wrapper.find('Button').prop('children')).toEqual('Learn more');
  });
});
