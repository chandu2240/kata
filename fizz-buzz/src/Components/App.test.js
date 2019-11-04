import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('Fizz buzz app', () => {
    let wrapper = shallow(<App />);
    it('should render fizzbuzz component', () => {
        expect(wrapper.find('FizzBuzz').length).toEqual(1);
    });
});