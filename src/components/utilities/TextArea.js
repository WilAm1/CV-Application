import React, { Component } from "react";

export default class TextArea extends Component {
  render() {
    return (
      <textarea
        onChange={this.props.handleChange}
        value={this.props.value}
        placeholder={this.props.placeholder}
        name={this.props.name}
      ></textarea>
    );
  }
}
