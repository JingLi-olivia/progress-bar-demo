import React from 'react';
import { render } from '@testing-library/react';
import Progressbar from './Progressbar';
import {shallow} from 'enzyme';
import { mount } from 'enzyme';

const buttons=[10,20,-20,-10];
let bars=[30,40,50];
const limit = 200;

test('gererate multiple bars based on given number', () => {
  const wrapper = mount(<Progressbar buttons={buttons} bars={bars} limit={limit}/>);
  expect(wrapper.find('div.progress-bar').length).toEqual(3);

});

test('gProgress bar displayed correct initial value', () => {
  const wrapper = mount(<Progressbar buttons={buttons} bars={bars} limit={limit}/>);
  expect(wrapper.find('div.progress-bar').length).toEqual(3);
  for(var i=0; i<wrapper.find('div.progressbar-value').length;i++){
    var val = bars[i].toString()+"%";
    expect(wrapper.find('div.progressbar-value').at(i).prop('style')).toHaveProperty('width', val);
  }

});



test('click "+10" button progress bar value increase 10', () => {
  const wrapperbefore = mount(<Progressbar buttons={buttons} bars={bars} limit={limit}/>);
  var currentbar = wrapper.find('div.progressbar-value').at(0);
  wrapper.find('button').at(0).simulate('click');
  bars[0]= bars[0]+10;
 




})


