import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <>
                <div className="counter">
                    <button onClick={(e) => this.decrement(e)}>Minus--</button>
                    <h3>{this.state.count}</h3>
                    <button onClick={(e) => this.increment(e)}>Plus++</button>
                </div>
                <button className="reset" onClick={(e) => this.reset(e)}>Reset</button>
            </>
        );
    }
}

export default Counter;
