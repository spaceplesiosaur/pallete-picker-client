import React from 'react';
import { shallow, mount } from 'enzyme';
import { getData, postProject, deleteProject } from '../../apiCalls.js';
import { setAllProjects, setPalettes } from '../../actions';
import { ProjectsContainer, mapDispatchToProps, mapStateToProps } from './ProjectsContainer';

jest.mock('../../apiCalls.js');

describe('ProjectsContainer', () => {
  let wrapper;
  let mockProjects;
  let mockPalettes;

  beforeEach(() => {
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
    wrapper = mount(<ProjectsContainer
      setAllProjects={jest.fn()}
      setPalettes={jest.fn()}
      allSetProjects={mockProjects}
      allPalettes={mockPalettes}
      />)

  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })


  it('should kick off fetches for projects and palettes when the component mounts', () => {
    getData.mockImplementation(() => {
      return (
        Promise.resolve(mockProjects)
      )
    })

    wrapper = mount(<ProjectsContainer
      setAllProjects={jest.fn()}
      setPalettes={jest.fn()}
      allSetProjects={mockProjects}
      allPalettes={mockPalettes}
      />)

    expect(wrapper.find('Project')).toHaveLength(4)
    expect(wrapper.find({name: 'Bathroom walls'})).toHaveLength(1)
    expect(wrapper.find({name: 'Kid bedroom'})).toHaveLength(1)
    expect(wrapper.find({name: 'Living room'})).toHaveLength(1)
  })

})

describe('mapStateToProps', () => {

  it('should return an object with current state used in component', () => {
    const mockState = {
      allSetProjects: [
        { "name": "Bathroom walls",
        "current": true}
      ],
      allPalettes: [
        {
        "name": "Seascape",
        "color1": "#180353",
        "color2": "#00A8CF",
        "color3": "#F7EDB7",
        "color4": "#EDE0D7",
        "color5": "#DFE9FD",
        "project_id": 12
        }
      ]
    };

    const expected = {
      allSetProjects: mockState.allSetProjects,
      allPalettes: mockState.allPalettes
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })

})

describe('mapDispatchToProps', () => {

  const mockDispatch = jest.fn();

  const mockProject = {
    "name": "Kid bedroom",
    "current": false
  };

  const mockPalette = {
    "name": "Verde Luz",
    "color1": "#548a0f",
    "color2": "#90b292",
    "color3": "#bbe3f2",
    "color4": "#74ba8c",
    "color5": "#86f7c6",
    "project_id": 13
  }

  it('should dispatch setAllProjects', () => {
    const actionToDispatch = setAllProjects(mockProject);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setAllProjects(mockProject);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should dispatch setPalettes', () => {
    const actionToDispatch = setPalettes(mockPalette);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setPalettes(mockPalette);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

})
