import React, { Component } from "react";
import ExperiencePreview from "./ExperiencePreview";

export default class Preview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { personalInfo } = this.props;
    return (
      <section id="preview-root">
        <section id="preview-form">
          <h1>
            {personalInfo.lName +
              " " +
              personalInfo.fName +
              " " +
              personalInfo.mName}
          </h1>
          <h2>{personalInfo.jobTitle}</h2>
          <p>{personalInfo.description}</p>
          <div className="personal-details">
            <p>{personalInfo.address}</p>
            <p>{personalInfo.number}</p>
            <p>{personalInfo.email}</p>
          </div>
        </section>
        <ExperiencePreview experience={this.props.experience} />
      </section>
    );
  }
}
