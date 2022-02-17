import React, { Component } from "react";
import EducationSet from "./utilities/EducationSet";

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, idx) {
    this.props.handleEducationChange(event, idx);
  }
  render() {
    return (
      <section>
        <h3>Education</h3>
        {this.props.education.map((obj, idx) => (
          <EducationSet
            education={obj}
            idx={idx}
            key={obj.id}
            handleChange={(e) => this.handleChange(e, idx)}
            handleClick={() => this.props.handleDeleteEducation(idx)}
          />
        ))}
        <button onClick={this.props.handleAddEducation}>Add</button>
      </section>
    );
  }
}
