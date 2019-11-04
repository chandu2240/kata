import React from 'react';
import {LeapYearFormConstants} from '../Constants/AppConstants';
class LeapYearForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return <div>
            <form>
                <label htmlFor='leapYearInput'>{LeapYearFormConstants.LEAP_YEAR_INPUT_LABEL}</label>
                <input type='number' min={LeapYearFormConstants.MIN_YEAR} value={this.state.year} />
                <input type='submit' value={LeapYearFormConstants.SUBMIT_LABEL} />
            </form>
        </div>;
    }
}

export default LeapYearForm;