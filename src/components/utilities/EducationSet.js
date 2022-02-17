import React, { Component } from "react";
import Input from "./InputBox";
import TextArea from "./TextArea";

export default class EducationSet extends Component {
  render() {
    const { course, university, startDate, endDate, description } =
      this.props.education;
    return (
      <div className="inputs-container">
        <Input
          value={course}
          handleChange={this.props.handleChange}
          placeholder={"Course"}
          type={"text"}
          name={"course"}
        />
        <Input
          value={university}
          handleChange={this.props.handleChange}
          placeholder={"University"}
          type={"text"}
          name={"university"}
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
          placeholder={"Some description?"}
          name={"description"}
        />
        <button onClick={this.props.handleClick} className="delete-btn">
          Delete
        </button>
      </div>
    );
  }
}
