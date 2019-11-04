import React from 'react';
import { shallow } from 'enzyme';
import FizzBuzz from './FizzBuzz';

describe('FizzBuzz', () => {
	let wrapper;
	beforeEach(() => wrapper = shallow(<FizzBuzz />));

	it('should render a <form />', () => {
		expect(wrapper.find('form').length).toEqual(1);
        expect(wrapper.find('input[type="number"]').length).toEqual(1);
        expect(wrapper.find('input[type="submit"]').length).toEqual(1);
    });
});