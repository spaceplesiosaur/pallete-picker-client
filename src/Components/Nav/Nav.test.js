import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav'

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav />)
  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
