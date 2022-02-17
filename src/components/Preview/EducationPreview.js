import React, { Component } from "react";
import EducationSubSection from "./EducationSubSection";

export default class EducationPreview extends Component {
  render() {
    return (
      <section id="preview-education">
        <h3>Education</h3>
        {this.props.education.map((item) => {
          return <EducationSubSection education={item} key={item.id} />;
        })}
      </section>
    );
  }
}
