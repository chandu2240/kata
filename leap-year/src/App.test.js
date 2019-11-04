import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

describe('Leap year app', () => {;
  let wrapper = shallow(<App />);
  it("App should render the Leap year component", () => {
    expect(wrapper.find("LeapYearForm").length).toEqual(1)
  });
});
