import React from 'react';
import { shallow } from 'enzyme';
import GeneratePalette from './GeneratePalette'

describe('GeneratePalette', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GeneratePalette
      randomizeColors={jest.fn()}
      />)
  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
