import React from 'react';
import { shallow } from 'enzyme';
import ProjectsContainer from './ProjectsContainer'

describe('ProjectsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectsContainer />)

  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
