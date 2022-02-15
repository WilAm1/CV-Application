import React, { Component } from "react";

export default class Preview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="preview-form">
        <div>{this.props.value}</div>
      </section>
    );
  }
}
