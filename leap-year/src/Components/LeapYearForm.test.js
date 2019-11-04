import React from 'react';
import {shallow} from 'enzyme';
import LeapYearForm from './LeapYearForm';

describe('Leap year form component', () => {
    let wrapper = shallow(<LeapYearForm />);
    const YEAR_1000 = 1000;
    const YEAR_2000 = 2000;
    const YEAR_2016 = 2016;

    it('Should render the form and year input and submit button', () => {
        expect(wrapper.find('form').length).toEqual(1);
        expect(wrapper.find('input[type="number"]').length).toEqual(1);
        expect(wrapper.find('input[type="submit"]').length).toEqual(1);  
    });

    it('Should return true if the year is a leap year otherwise return false', () => {
        const instance = wrapper.instance();
        expect(instance._isLeapYear(YEAR_1000)).toBe(false);
        expect(instance._isLeapYear(YEAR_2000)).toBeTruthy();
        expect(instance._isLeapYear(YEAR_2016)).toBeTruthy();
        
    });
});
