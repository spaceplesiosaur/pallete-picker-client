import React from 'react';
import { shallow } from 'enzyme';
import Palette from './Palette'

describe('Palette', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Palette
      freezeColor={jest.fn()}
      name={"The Eighties"}
      color={"#DFE9FD"}
      frozen={false}
      />)

  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
