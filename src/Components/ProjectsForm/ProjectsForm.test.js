import React from 'react';
import { shallow } from 'enzyme';
import ProjectsForm from './ProjectsForm'

describe('ProjectsForm', () => {
  let wrapper;
  let mockEvent;

  beforeEach(() => {
    wrapper = shallow(<ProjectsForm
        addNewProject={jest.fn()}
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

  it('should call handleNameChange when input is changed', () => {
    expect(wrapper.find('.formInput').props().value).toEqual('')
    wrapper.find('.formInput').simulate('change', mockEvent)
    // wrapper.update()
    expect(wrapper.find('.formInput').props().value).toEqual(mockEvent.target.value)
  })
  //test formInput
  //test button
  //mock out makeProject
  //mock out handleNameChange
  //mock out useState
})
