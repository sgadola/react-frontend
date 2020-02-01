// Main Counter-container component

import React, {Component} from 'react';

import CounterButton from './CounterButton';

import './Counter.css'


export default class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }


    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>

                <span className="count">{this.state.counter}</span>

                <div>
                    <button className="reset" onClick={this.reset}>reset</button>
                </div>
            </div>
        );
    }


    reset(by) {
        console.log('reset from parent');

        this.setState({
            counter: 0
        })
    }


    increment(by) {
        console.log('increment from parent');

        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            })
    }


    decrement(by) {
        console.log('decrement from parent');

        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            })
    }
}
