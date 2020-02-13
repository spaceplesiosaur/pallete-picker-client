import React from 'react';
import { shallow } from 'enzyme';
import { SavePaletteForm, mapStateToProps, mapDispatchToProps } from './SavePaletteForm';
import { setAllProjects, setPalettes } from '../../actions';
import { getData, postProject } from '../../apiCalls';

jest.mock('../../apiCalls.js');

describe('SavePaletteForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SavePaletteForm
      colorList={["test1, test2"]}
      allSetProjects={["test", "test"]} />)
  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })
});

describe('mapStateToProps', () => {

  it('should return an object with current state used in component', () => {
    const mockState = {
      allSetProjects: [
        { "name": "Bathroom walls",
        "current": true}
      ]
    };

    const expected = {
      allSetProjects: mockState.allSetProjects,
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

