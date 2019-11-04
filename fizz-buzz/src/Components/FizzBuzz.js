import React from 'react';
import {FizzBuzzConstants} from '../Constants/AppConstants'
import FizzBuzzList from './FizzBuzzList';
import PropTypes from 'prop-types';

class FizzBuzz extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    static propTypes = {
        setFizzBuzzList: PropTypes.func.isRequired,
        list: PropTypes.array.isRequired
     };
    
    _handleChange = (e) => {
        this.setState({maxFizzBuzzNo: e.target.value});
    }

    _onSubmit = (e) => {
        e.preventDefault();
        let fizzBuzzList = this._doFizzBuzz(this.state.maxFizzBuzzNo)
        this.props.setFizzBuzzList(fizzBuzzList);
        console.log(this.props);
    }

    _doFizzBuzz = (maxFizzBuzzNo) => {
        let fizzBuzzList = [];
        for (let i = 1; i <= maxFizzBuzzNo; i++) {
            var item =
                i % 15 === 0
                    ? { key: FizzBuzzConstants.FIZZ_BUZZ_KEYS.FIZZBUZZ, val: FizzBuzzConstants.FIZZ_BUZZ_KEYS.FIZZBUZZ }
                    : i % 5 === 0
                    ? { key: FizzBuzzConstants.FIZZ_BUZZ_KEYS.BUZZ, val: FizzBuzzConstants.FIZZ_BUZZ_KEYS.BUZZ }
                    : i % 3 === 0
                    ? { key: FizzBuzzConstants.FIZZ_BUZZ_KEYS.FIZZ, val: FizzBuzzConstants.FIZZ_BUZZ_KEYS.FIZZ }
                    : { key: i, val: i };
            fizzBuzzList.push(item);
        }
        return fizzBuzzList;
    }

    render(){
        return (
            <div className='fizz-buzz-form-container'>
                <form className="fizz-buzz-input-form" onSubmit={this._onSubmit}>
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
                        onChange = {this._handleChange}
                    />
                    <input type='submit' value={FizzBuzzConstants.SUBMIT} />
                </form>
                <FizzBuzzList list={this.props.list} />
          </div>
        );
    }
}

export default FizzBuzz;