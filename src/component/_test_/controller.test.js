import React from 'react';
import { render } from '@testing-library/react';
import Progressbar from '../progressbar';
import ProgressbarContainer from '../ProgressbarContainer'
import Controller from '../controller';
import {shallow} from 'enzyme';
import { mount } from 'enzyme';
import { spy, stub } from 'sinon';

const buttons=[10,20,-20,-10];
let bars=[30,40,50];
const limit = 200;

test('gererate select options based on given number', () => {
    const wrapper = mount(<Controller bars={bars} limit={limit} buttons={buttons} currentBar={0}/>);
    expect(wrapper.find('option').length).toEqual(bars.length);
  
  });



test('gererate multiple buttons based on given number', () => {
  const wrapper = mount(<Controller bars={bars} limit={limit} buttons={buttons} currentBar={0}/>);
  expect(wrapper.find('button').length).toEqual(buttons.length);

});


test('should check handle click', () => {
    spy(Controller.prototype, 'handlebuttonOnClick');
    const onChange = stub();
    const wrapper = mount(<Controller bars={bars} limit={limit} buttons={buttons} currentBar={0} onChange={onChange}/>);
    wrapper.find("button").at(0).simulate('click');
    expect(Controller.prototype.handlebuttonOnClick.callCount).toEqual(1);
  
  });

  test('should check onChange', () => {
    const onChange = stub();
    const wrapper = mount(<Controller bars={bars} limit={limit} buttons={buttons} currentBar={0} onChange={onChange}/>);
    wrapper.find("button").at(0).simulate('click');
    expect(onChange.callCount).toEqual(1);
  
  });

  test('should check handle select', () => {
    spy(Controller.prototype, 'handleDropdownchange');
    const onChange = stub();
    const wrapper = mount(<Controller bars={bars} limit={limit} buttons={buttons} currentBar={0} onChange={onChange}/>);
    wrapper.find("select").simulate('change', '', { value: ['val'] })
    expect(Controller.prototype.handleDropdownchange.callCount).toEqual(1);
  
  });



  


