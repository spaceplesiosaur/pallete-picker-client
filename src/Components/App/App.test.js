import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App
      />)
  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
