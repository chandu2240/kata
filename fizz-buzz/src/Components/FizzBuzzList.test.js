import React from 'react';
import { shallow } from 'enzyme';
import FizzBuzzList from './FizzBuzzList';
import * as fizzBuzzConst from '../Constants/AppConstants';
    
describe('List item', () => {
    const props = {
		items: [{
			key: 'FIZZ',
			val:'FIZZ'
		},{
			key: 'BUZZ',
			val:'BUZZ'
		},
		{
			key: 'FIZZBUZZ',
			val:'FIZZBUZZ'
		}]
	};
    let wrapper = shallow(<FizzBuzzList {...props} />);
    it('initial render', () => {
        expect(wrapper.find('ul').length).toEqual(1);
    });
});
