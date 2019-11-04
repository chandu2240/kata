import * as types from '../Constants/AppConstants';

export const setFizzBuzzList = (fizzBuzzList) => ({
	type: types.SET_FIZZ_BUZZ_LIST,
	fizzBuzzList: fizzBuzzList
});
