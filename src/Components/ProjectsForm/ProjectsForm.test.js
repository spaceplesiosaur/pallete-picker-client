import React from 'react';
import { shallow, mount } from 'enzyme';
import ProjectsForm, { nameState } from './ProjectsForm'

describe('ProjectsForm', () => {
  let wrapper;
  let mockEvent;
  let fakeFunction = jest.fn()

  beforeEach(() => {

    wrapper = shallow(<ProjectsForm
        addNewProject={fakeFunction}
      />)

    mockEvent = {target: {value: "Gazebo"}}
  })

  it('should render with the correct properites', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should change the input value to the event target value when input is changed', () => {
    expect(wrapper.find('.formInput').props().value).toEqual('')
    wrapper.find('.formInput').simulate('change', mockEvent)
    // wrapper.update()
    expect(wrapper.find('.formInput').props().value).toEqual(mockEvent.target.value)
  })

  it('should call addNewProject when button is clicked', () => {
    wrapper.find('.saveProjectButton').simulate('click')

    expect(fakeFunction).toHaveBeenCalled()
  })


})
