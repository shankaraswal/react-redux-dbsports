import React, { Component } from 'react';

  class Counter extends Component {

  state = { count: 0 }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h2>Counter: using component local state</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span><h1> [ {this.state.count} ] </h1></span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter;