import React from 'react';
import {LeapYearFormConstants} from '../Constants/AppConstants';
class LeapYearForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    onSubmit = (e) => {
        e.preventDefault();
        let year = this.state.year;
        this.setState({bLeapYear: this._isLeapYear(year)});
    }

    _isLeapYear = (year) => {
        return (year % LeapYearFormConstants.FOUR === 0 && 
                    (year % LeapYearFormConstants.HUNDRED !==0 || year % LeapYearFormConstants.FOUR_HUNDRED === 0));
    }

    render(){
        return <div>
            <form onSubmit={this.onSubmit}>
                <label htmlFor='leapYearInput'>{LeapYearFormConstants.LEAP_YEAR_INPUT_LABEL}</label>
                <input type='number' min={LeapYearFormConstants.MIN_YEAR} value={this.state.year} />
                <input type='submit' value={LeapYearFormConstants.SUBMIT_LABEL} />
            </form>
        </div>;
    }
}

export default LeapYearForm;