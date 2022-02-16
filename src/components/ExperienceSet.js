import React, { Component } from "react";
import Input from "./utilities/InputBox";
import TextArea from "./utilities/TextArea";

export default class ExperienceSet extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.handleChange(event, this.props.idx);
  }
  render() {
    const { company, position, startDate, endDate, description } =
      this.props.experience;
    return (
      <div>
        <Input
          value={company}
          handleChange={this.handleChange}
          placeholder={"Company"}
          type={"text"}
          name={"company"}
        />
        <Input
          value={position}
          handleChange={this.handleChange}
          placeholder={"Position"}
          type={"text"}
          name={"position"}
        />
        <Input
          value={startDate}
          handleChange={this.handleChange}
          placeholder={"Start Date"}
          type={"text"}
          name={"startDate"}
        />
        <Input
          value={endDate}
          handleChange={this.handleChange}
          placeholder={"End Date"}
          type={"text"}
          name={"endDate"}
        />
        <TextArea
          value={description}
          handleChange={this.handleChange}
          placeholder={"Tells us about your work"}
          name={"description"}
        />
        <button>Delete</button>
      </div>
    );
  }
}
