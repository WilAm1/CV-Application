import React, { Component } from "react";
import ExperienceSubSection from "./ExperienceSubSection";

export default class ExperiencePreview extends Component {
  render() {
    return (
      <section id="preview-experience">
        <h3>Experience</h3>
        {this.props.experience.map((item) => {
          return <ExperienceSubSection experience={item} key={item.id} />;
        })}
      </section>
    );
  }
}
