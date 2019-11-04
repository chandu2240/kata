
import * as types from '../Constants/AppConstants';
import * as actions from './index';

describe('Fizz buzz actions', () => {
    it('setFizzBuzzList should create SET_FIZZ_BUZZ_LIST action', () => {
		expect(actions.setFizzBuzzList(['Fizz','Buzz'])).toEqual({
			type: types.SET_FIZZ_BUZZ_LIST,
			list: ['Fizz', 'Buzz']
		});
	});
});