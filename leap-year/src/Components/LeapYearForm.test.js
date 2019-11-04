import React from 'react';
import {shallow} from 'enzyme';
import LeapYearForm from './LeapYearForm';

describe('Leap year form component', () => {
    let wrapper = shallow(<LeapYearForm />);
    it('should render the form and year input and submit button', () => {
        expect(wrapper.find('form').length).toEqual(1);
        expect(wrapper.find('input[type="number"]').length).toEqual(1);
        expect(wrapper.find('input[type="submit"]').length).toEqual(1);  
    });
});
