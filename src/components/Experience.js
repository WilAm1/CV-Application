import React, { Component } from "react";
import ExperienceSet from "./ExperienceSet";

// * Experience will render the array of Experience Sets
// TODO Add Button -> updates the work array (Adds another entry)
// TODO Make map function -> ExperienceSet
// TODO  - Add Delete Button (Use filter / Slice(req IDX))

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, idx) {
    this.props.handleWorkChange(event, idx);
  }
  render() {
    return (
      <section>
        <h3>Work Experience</h3>
        {this.props.experience.map((obj, idx) => (
          <ExperienceSet
            experience={obj}
            idx={idx}
            key={obj.id}
            handleChange={(e) => this.handleChange(e, idx)}
            handleClick={() => this.props.handleDeleteWork(idx)}
          />
        ))}
        <button onClick={this.props.handleAddWork}>Add</button>
      </section>
    );
  }
}
