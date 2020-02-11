import React from 'react';
import { shallow } from 'enzyme';
import PalettesContainer from './PalettesContainer'

describe('PalettesContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PalettesContainer />)

  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
