import React, { Component } from "react";
import ExperienceSet from "./ExperienceSet";

// * Experience will render the array of Experience Sets
// TODO Add Button -> updates the work array (Adds another entry)
// TODO Make map function -> ExperienceSet
// TODO  - Add Delete Button (Use filter / Slice(req IDX))

export default class Experience extends Component {
  render() {
    return (
      <section>
        <h3>Work Experience</h3>
        {this.props.experience.map((obj, idx) => (
          <ExperienceSet experience={obj} data-idx={idx} key={obj.id} />
        ))}
        <button onClick={this.props.handleAddWork}>Add</button>
      </section>
    );
  }
}
