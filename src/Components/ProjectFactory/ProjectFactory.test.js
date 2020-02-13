import React from 'react';
import { shallow } from 'enzyme';
import ProjectFactory from './ProjectFactory'

describe('ProjectFactory', () => {
  let wrapper;
  let mockProjects;
  let mockPalettes;

  beforeEach(() => {

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
  }
]

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
    wrapper = shallow(<ProjectFactory
      projects={mockProjects}
      palettes={mockPalettes}
      removeProject={jest.fn()}
      fetchPalettes={jest.fn()}
      />)

  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
