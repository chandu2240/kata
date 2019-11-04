import React from 'react';
import { shallow } from 'enzyme';
import FizzBuzz from './FizzBuzz';
import {FizzBuzzConstants} from '../Constants/AppConstants';

describe('FizzBuzz', () => {
	let wrapper;
	beforeEach(() => wrapper = shallow(<FizzBuzz />));

	it('should render a <form />', () => {
		expect(wrapper.find('form').length).toEqual(1);
        expect(wrapper.find('input[type="number"]').length).toEqual(1);
        expect(wrapper.find('input[type="submit"]').length).toEqual(1);
    });

    it('do the fizz buzz', () => {
		const instance = wrapper.instance();
        let fizzBuzzList = instance._doFizzBuzz(20);        
        expect(fizzBuzzList[2].val).toEqual(FizzBuzzConstants.FIZZ_BUZZ_KEYS.FIZZ);
        expect(fizzBuzzList[4].val).toEqual(FizzBuzzConstants.FIZZ_BUZZ_KEYS.BUZZ);
        expect(fizzBuzzList[14].val).toEqual(FizzBuzzConstants.FIZZ_BUZZ_KEYS.FIZZBUZZ);
        expect(fizzBuzzList[7].val).toEqual(8);
    });

    it('should render a fizzbuzzlist component', () => {
		expect(wrapper.find('FizzBuzzList').length).toEqual(1);
    });

});