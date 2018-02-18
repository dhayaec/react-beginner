import React, { Component } from 'react';

export default class MagicButton extends Component {
  state = {
    disabled: false,
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <div>
        <button disabled={this.state.disabled}>My button</button>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}
