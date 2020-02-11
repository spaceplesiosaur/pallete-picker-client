import React from 'react';
import { shallow } from 'enzyme';
import Project from './Project'

describe('Project', () => {
  let wrapper;
  let mockProject;
  let mockMatchedPalettes;
  let fakeRemoveFunction = jest.fn()

  beforeEach(() => {
    mockProject = {
      id: 1,
      name: "Bathroom walls",
      current: true,
    }

    mockMatchedPalettes = [
    {
      id: 4,
      name: "Ocean",
      color1: "#DFE9FD",
      color2: "#053BA7",
      color3: "#B3C0F7",
      color4: "#4B93FB",
      color5: "#00A8CF",
      project_id: 1
    },
    {
      id: 5,
      name: "Seascape",
      color1: "#180353",
      color2: "#00A8CF",
      color3: "#F7EDB7",
      color4: "#EDE0D7",
      color5: "#DFE9FD",
      project_id: 1
    }
  ]
    wrapper = shallow(<Project
      name={mockProject.name}
      id={mockProject.id}
      palettes={mockMatchedPalettes}
      removeProject={fakeRemoveFunction}
       />)

  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call addNewProject when button is clicked', () => {
    wrapper.find('.project-delete-button').simulate('click')

    expect(fakeRemoveFunction).toHaveBeenCalled()
  })
})
