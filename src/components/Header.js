import React, { Component } from 'react';

export default class Header extends Component {
  state = {
    count: 0,
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  asyncIncrement = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h2>{this.props.headerTitle}</h2>
        <button onClick={this.increment}>Increament</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.asyncIncrement}>asyncIncrement</button>
      </div>
    );
  }
}

// view=f(state)
