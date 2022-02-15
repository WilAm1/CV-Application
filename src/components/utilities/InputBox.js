import React, { Component } from "react";

export default class InputBox extends Component {
  render() {
    return (
      <input
        onChange={this.props.handleChange}
        type="text"
        value={this.props.value}
      ></input>
    );
  }
}
