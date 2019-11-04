import React from 'react';

class FizzBuzzList extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    _getFizzBuzzListItems = () => {
        const list = this.props.list;
        if( list && list.length)
        {
            return list.map((item,index) => {
                return (<li className={item.key} key={item.key+index}>
                            <span >{item.val}</span>
                </li>) ;
            });
        }
    }

    render(){
        let fizzBuzzItems = this._getFizzBuzzListItems();
        return (<div>
            <ul className='fizz-buzz-list'>
            {fizzBuzzItems}
            </ul>
        </div>);
    }
}
export default FizzBuzzList;
