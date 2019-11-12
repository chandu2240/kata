import React from 'react';
import {LeapYearFormConstants} from '../Constants/AppConstants';
class LeapYearForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage: null
        };
    }

    onChange = (e) => {
        if(this._validateInput(e.target.value)){
            this.setState({
                year: e.target.value,
                isLeapYear: undefined,
                errorMessage: null
            });
        }
        else if(e.target.value){
            //e.target.value = "";
            this.setState({
                year: e.target.value, 
                isLeapYear: undefined, 
                errorMessage: LeapYearFormConstants.YEAR_INPUT_ERROR
            });
        }
        else{
            this.setState({
                year: undefined, 
                isLeapYear: undefined, 
                errorMessage: null
            });
        }
    }
    _validateInput = (input) => {
        //validation: input is number or not
        if(isNaN(input)){
            return false;
        }
        //validation: input should greater than 0
        return  (input > 0);
    }

    onSubmit = (e) => {
        e.preventDefault();
        let year = this.state.year;
        this.setState({
            isLeapYear: this._isLeapYear(year)
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
                <input type='text' value={this.state.year} onChange={this.onChange} />
                <input type='submit' value={LeapYearFormConstants.SUBMIT_LABEL} disabled={this.state.errorMessage || !this.state.year}/>
                {this.state.errorMessage ? <div className='input-error'>{this.state.errorMessage}</div> : null}
            </form>
            {
                (typeof this.state.isLeapYear !== 'undefined') 
                    ? (!this.state.isLeapYear 
                        ? (<h2 className='not-leap-year-message'> {LeapYearFormConstants.NOT_LEAP_YEAR_MESSAGE}</h2>) 
                        : (<h2 className='leap-year-message'>{LeapYearFormConstants.LEAP_YEAR_MESSAGE}</h2>)) 
                    : null
            }
        </div>;
    }
}

export default LeapYearForm;
