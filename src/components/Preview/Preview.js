import React, { Component } from "react";
import ExperiencePreview from "./ExperiencePreview";
import PersonalPreview from "./PersonalPreview";
import EducationPreview from "./EducationPreview";
export default class Preview extends Component {
  render() {
    return (
      <section id="preview-root">
        <PersonalPreview person={this.props.person} />
        <ExperiencePreview experience={this.props.experience} />
        <EducationPreview education={this.props.education} />
      </section>
    );
  }
}
