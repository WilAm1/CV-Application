import React, { Component } from "react";
import Input from "./InputBox";
import TextArea from "./TextArea";

export default class ExperienceSet extends Component {
  render() {
    const { company, position, startDate, endDate, description } =
      this.props.experience;
    return (
      <div className="inputs-container">
        <Input
          value={company}
          handleChange={this.props.handleChange}
          placeholder={"Company"}
          type={"text"}
          name={"company"}
        />
        <Input
          value={position}
          handleChange={this.props.handleChange}
          placeholder={"Position"}
          type={"text"}
          name={"position"}
        />
        <Input
          value={startDate}
          handleChange={this.props.handleChange}
          placeholder={"Start Date"}
          type={"text"}
          name={"startDate"}
        />
        <Input
          value={endDate}
          handleChange={this.props.handleChange}
          placeholder={"End Date"}
          type={"text"}
          name={"endDate"}
        />
        <TextArea
          value={description}
          handleChange={this.props.handleChange}
          placeholder={"Tells us about your work"}
          name={"description"}
        />
        <button onClick={this.props.handleClick} className="delete-btn">
          Delete
        </button>
      </div>
    );
  }
}
