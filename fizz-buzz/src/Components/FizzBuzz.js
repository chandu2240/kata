import React from 'react';
import {FizzBuzzConstants} from '../Constants/AppConstants'

class FizzBuzz extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <form className="fizz-buzz-input-form" onSubmit={this._validateAndDoFizzBuzz}>
                <label htmlFor="maxFizzBuzz">
                {FizzBuzzConstants.MAX_FIZZ_BUZZ_LABEL}
                </label>
                <br />
                <input
                    id="maxFizzBuzz"
                    type="number"
                    min={FizzBuzzConstants.MIN_FIZZ_BUZZ_INPUT}
                    className="max-fizz-buzz-input"
                    autoFocus={true}
                    value={this.state.maxFizzBuzzNo}
                />
                <input type='submit' value={FizzBuzzConstants.SUBMIT} />
          </form>
        );
    }
}

export default FizzBuzz;