import React from 'react';
import Counter from "../Counter/Counter";
import './CounterGroup.css';

class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input : this.props.defaultCount,
            numberOfCounters : this.props.defaultCount,
            sum : 0
        };
    }

    counterUpdateCallback = changeNum => {
        this.setState({sum : this.state.sum + changeNum});
    };

    handleChange = (e) => {
        this.setState({input : e.target.value});
    };

    regenerateCounters = (e) => {
        this.setState({ numberOfCounters: this.state.input });
    };

    renderCounters = () => {
        let counters = [];
        for(let count=0; count < this.state.numberOfCounters; count++){
            counters.push(
                <Counter
                    key = {count}
                    onCounterValueChange={this.counterUpdateCallback}
                />
            )
        }
        return counters;
    };

    render() {
        let counters = this.renderCounters();
        return (
            <div className="counter-group">
                <div className="regenerate">
                    <input value={this.state.input} type="text" onChange={this.handleChange}/>
                    <button onClick={this.regenerateCounters}>
                        Regenerate counters
                    </button>
                    <span>Sum : {this.state.sum}</span>
                </div>
                <div>
                    {counters}
                </div>
            </div>
        );
    }
}

export default CounterGroup;