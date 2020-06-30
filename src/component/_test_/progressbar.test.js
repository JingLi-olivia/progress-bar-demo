import React from 'react';
import { render } from '@testing-library/react';
import Progressbar from '../progressbar';
import {shallow} from 'enzyme';
import { mount } from 'enzyme';

const buttons=[10,20,-20,-10];
let bars=[30,40,50];
const limit = 200;

test('gererate multiple bars based on given number', () => {
  const wrapper = mount(<Progressbar bars={bars}  currentBar={0}/>);
  expect(wrapper.find('div.progress-bar').length).toEqual(3);

});

test('Progress bar displayed correct initial value', () => {
  const wrapper = mount(<Progressbar bars={bars} currentBar={0}/>);
  for(var i=0; i<wrapper.find('div.progressbar-value').length;i++){
    var val = bars[i].toString()+"%";
    expect(wrapper.find('div.progressbar-value').at(i).prop('style')).toHaveProperty('width', val);
  }
});

test('change bars colour after go over 100%', () => {
    const wrapper = mount(<Progressbar bars={[101,40,50]} currentBar={0}/>);

    expect(wrapper.find('div.progressbar-value').at(0).hasClass('warning')).toEqual(true);
 
  });

  //test('limit bar after go over the limit', () => {
    //bars[0]=bars[0]+171; 
    //const wrapper = mount(<Progressbar bars={[201,40,50]} limit={limit}/>);

    //expect(wrapper.find('span.progressbar-label').at(0).text()).toEqual('200%')
 
  //});
