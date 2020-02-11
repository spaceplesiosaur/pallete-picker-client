import React from 'react';
import { shallow } from 'enzyme';
import SavePaletteForm from './SavePaletteForm'

describe('SavePaletteForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SavePaletteForm />)
  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
