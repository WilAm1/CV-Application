import React, { Component } from "react";
import ExperienceSubSection from "./ExpSubSection";

export default class ExperiencePreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="preview-experience">
        <h3>Experience</h3>
        {/* Add a Map function later */}
        {this.props.experience.map((item) => {
          return <ExperienceSubSection experience={item} key={item.id} />;
        })}
      </section>
    );
  }
}
