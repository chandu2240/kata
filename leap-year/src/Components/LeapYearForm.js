import React from 'react';
import {LeapYearFormConstants} from '../Constants/AppConstants';
class LeapYearForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    onChange = (e) => {
        this.setState({
            year: e.target.value,
            bLeapYear: undefined
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let year = this.state.year;
        this.setState({
            bLeapYear: this._isLeapYear(year)
        });
    }

    _isLeapYear = (year) => {
        return (year % LeapYearFormConstants.FOUR === 0 && 
                    (year % LeapYearFormConstants.HUNDRED !== 0 || year % LeapYearFormConstants.FOUR_HUNDRED === 0));
    }

    render(){
        return <div className='leap-year-form-container'>
            <form onSubmit={this.onSubmit}>
                <label htmlFor='leapYearInput'>{LeapYearFormConstants.LEAP_YEAR_INPUT_LABEL}</label>
                <input type='number' min={LeapYearFormConstants.MIN_YEAR} value={this.state.year} onChange={this.onChange}/>
                <input type='submit' value={LeapYearFormConstants.SUBMIT_LABEL} />
            </form>
            {
                (typeof this.state.bLeapYear !== 'undefined') 
                    ? (!this.state.bLeapYear 
                        ? (<h2 className='not-leap-year-message'> {LeapYearFormConstants.NOT_LEAP_YEAR_MESSAGE}</h2>) 
                        : (<h2 className='leap-year-message'>{LeapYearFormConstants.LEAP_YEAR_MESSAGE}</h2>)) 
                    : null
            }
        </div>;
    }
}

export default LeapYearForm;