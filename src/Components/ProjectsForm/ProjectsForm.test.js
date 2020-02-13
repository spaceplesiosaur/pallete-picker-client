import React from 'react';
import { shallow, mount } from 'enzyme';
import { getData, postProject } from '../../apiCalls.js';
import ProjectsForm from './ProjectsForm';
import ProjectFactory from '../ProjectFactory/ProjectFactory'

jest.mock('../../apiCalls.js')

describe('ProjectsForm', () => {
  let wrapper;
  let wrapperFactory;
  let mockEvent;
  let fakeFunction = jest.fn();
  let mockProjects;
  let mockPalettes

  beforeEach(() => {

    mockEvent = {target: {value: "Gazebo"}}

    mockPalettes = [
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
  },
  {
    id: 6,
    name: "Sunset",
    color1: "#FA1E88",
    color2: "#ff6100",
    color3: "#F8DF3A",
    color4: "#B3C0F7",
    color5: "#000000",
    project_id: 2
  }
]

    mockProjects = [
  {
    id: 1,
    name: "Bathroom walls",
    current: true,
  },
  {
    id: 2,
    name: 'Kid bedroom',
    current: false,
  },
  {
    id: 3,
    name: 'Living room',
    current: false,
  },
  {
    id: 4,
    name: "Dining room",
    current: false
  }
]

wrapper = mount(<ProjectsForm
    addNewProject={fakeFunction}
  />)

wrapperFactory = shallow(<ProjectFactory
  projects={mockProjects}
  palettes={mockPalettes}
  removeProject={jest.fn()}
  fetchPalettes={jest.fn()}
  />)
})

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should change the input value to the event target value when input is changed', () => {
    expect(wrapper.find('.formInput').props().value).toEqual('')
    wrapper.find('.formInput').simulate('change', mockEvent)
    // wrapper.update()
    expect(wrapper.find('.formInput').props().value).toEqual(mockEvent.target.value)
  })

  it('should call addNewProject when button is clicked', () => {
    wrapper.find('.saveProjectButton').simulate('click')

    expect(fakeFunction).toHaveBeenCalled()
  })

  it('should call add a new project when button is clicked', async () => {
    let mockReturnProject = {id: 1, name: "Dining room", current: false}

    postProject.mockImplementation(() => {
      return (
        Promise.resolve(mockReturnProject)
      )
    })

    getData.mockImplementation(() => {
      return (
        Promise.resolve(mockProjects)
      )
    })

    await wrapper.find('.saveProjectButton').simulate('click')
    console.log('wrapper', wrapper.debug())
    console.log('wrapperFactory', wrapperFactory.debug())
    expect(wrapperFactory.find('Project')).toHaveLength(4)
    expect(wrapperFactory.find({name: 'Bathroom walls'})).toHaveLength(1)
    expect(wrapperFactory.find({name: 'Kid bedroom'})).toHaveLength(1)
    expect(wrapperFactory.find({name: 'Living room'})).toHaveLength(1)
    expect(wrapperFactory.find({name: 'Dining room'})).toHaveLength(1)
  })

})
