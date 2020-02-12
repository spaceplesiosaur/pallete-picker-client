import React from 'react';
import { shallow } from 'enzyme';
import { SavePaletteForm, mapStateToProps, mapDispatchToProps } from './SavePaletteForm'

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
})
