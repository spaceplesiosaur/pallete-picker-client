import React from 'react';
import { shallow } from 'enzyme';
import { getData, postProject, deleteProject } from '../../apiCalls.js';
import { setAllProjects, setPalettes } from '../../actions';
import { ProjectsContainer, mapDispatchToProps, mapStateToProps } from './ProjectsContainer';

jest.mock('../../apiCalls.js');

describe('ProjectsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectsContainer
      setAllProjects={jest.fn()}
      />)

  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
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
