const FizzBuzz = (state = 0, action) => {
	switch (action.type) {
	case 'SET_FIZZ_BUZZ_LIST':
		return {list: action.list};
	default:
		return state;

	}
};
export default FizzBuzz;
