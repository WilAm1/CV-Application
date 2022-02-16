import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <input
        onChange={this.props.handleChange}
        type={this.props.type}
        value={this.props.value}
        placeholder={this.props.placeholder}
        name={this.props.name}
      ></input>
    );
  }
}
