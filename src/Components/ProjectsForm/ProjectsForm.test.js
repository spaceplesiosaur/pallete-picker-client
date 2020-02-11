import React from 'react';
import { shallow } from 'enzyme';
import ProjectsForm from './ProjectsForm'

describe('ProjectsForm', () => {
  let wrapper;
  let mockEvent;

  beforeEach(() => {
    wrapper = shallow(<ProjectsForm
        addNewProject={jest.fn()}
      />)

    mockEvent = {target: {value: "Gazebo"}}
  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
