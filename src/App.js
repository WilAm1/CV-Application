import React, { Component } from "react";
import InputBox from "./components/utilities/InputBox";
import Header from "./components/Header";
import Preview from "./components/Preview/Preview";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        text: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    this.setState({
      input: {
        text: target.value,
      },
    });
  }
  render() {
    return (
      <div>
        <Header />
        <InputBox
          value={this.state.input.text}
          handleChange={this.handleChange}
        />
        <Preview value={this.state.input.text} />
      </div>
    );
  }
}
