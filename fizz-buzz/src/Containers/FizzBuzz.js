import { connect } from 'react-redux';
import FizzBuzz from '../Components/FizzBuzz';
import { setFizzBuzzList } from '../Actions';

const mapStateToProps = state => ({
    list: state.FizzBuzz.list
});

export default connect(mapStateToProps, {setFizzBuzzList})(FizzBuzz);