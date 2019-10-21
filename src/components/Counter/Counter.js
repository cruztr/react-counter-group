import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {number : 0};
    }

    incrementNumber = () => {
        this.setState({number : this.state.number+1});
        this.props.onCounterValueChange(1);
    };

    decrementNumber = () => {
        this.setState({number : this.state.number-1});
        this.props.onCounterValueChange(-1);
    };

    render() {
        return(
            <div className = "counter">
                {/*<div className="counter-line">*/}
                    <button onClick={this.decrementNumber}>-</button>
                    <div>
                        {this.state.number}
                    </div>
                    <button onClick={this.incrementNumber}>+</button>
                {/*</div>*/}
            </div>
        );
    }
}

export default Counter;