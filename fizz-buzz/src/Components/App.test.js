import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('Fizz buzz app', () => {
    let wrapper = shallow(<App />);
    it('should render fizzbuzz component', () => {
        debugger;
        expect(wrapper.props().children[1].type.displayName).toBe('Connect(FizzBuzz)');
    });
});