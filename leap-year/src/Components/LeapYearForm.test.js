import React from 'react';
import {shallow} from 'enzyme';
import LeapYearForm from './LeapYearForm';

describe('Leap year form component', () => {
    let wrapper = shallow(<LeapYearForm />);
    
    const STRING_VAL = "test";
    const NEGATIVE_VAL = -1;
    const POSITIVE_VAL = 20;
    const EMPTY_VAL = "";

    const YEAR_1900 = 1900;
    const YEAR_2000 = 2000;
    const YEAR_2001 = 2001;
    const YEAR_2016 = 2016;
    
    const instance = wrapper.instance();
    it('Should render the form and year input and submit button', () => {
        expect(wrapper.find('form').length).toEqual(1);
        expect(wrapper.find('input[type="text"]').length).toEqual(1);
        expect(wrapper.find('input[type="submit"]').length).toEqual(1);  
    });
    
    it('Year input should not accept alphabets', () => {
        expect(instance._validateInput(STRING_VAL)).toBe(false);
    });

    it('Year input should not accept negative values', () => {
        expect(instance._validateInput(NEGATIVE_VAL)).toBe(false);
    });

    it('Year input should accept positive numbers', () => {
        expect(instance._validateInput(POSITIVE_VAL)).toBe(true);
    });

    it('Year input should not accept empty values', () => {
        expect(instance._validateInput(EMPTY_VAL)).toBe(false);
    });

    it('Should return false for the year 1900', () => {
        expect(instance._isLeapYear(YEAR_1900)).toBe(false);        
    });

    it('Should return true for the year 2000', () => {
        expect(instance._isLeapYear(YEAR_2000)).toBeTruthy();        
    });

    it('Should return false for the year 2001', () => {
        expect(instance._isLeapYear(YEAR_2001)).toBe(false);        
    });

    it('Should return true for the year 2016', () => {
        expect(instance._isLeapYear(YEAR_2016)).toBeTruthy();
    });

});
