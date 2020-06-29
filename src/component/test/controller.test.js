import React from 'react';
import { render } from '@testing-library/react';
import Progressbar from '../progressbar';
import ProgressbarContainer from '../ProgressbarContainer'
import Controller from '../controller';
import {shallow} from 'enzyme';
import { mount } from 'enzyme';

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


  


