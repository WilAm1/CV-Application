import React from "react";
import ExperienceSet from "./utilities/ExperienceSet";

export default function Experience(props) {
  const { handleWorkChange, handleDeleteWork, handleAddWork, experience } =
    props;

  function handleChange(event, idx) {
    handleWorkChange(event, idx);
  }
  return (
    <section id="experience-section">
      <h3>Work Experience</h3>
      {experience.map((obj, idx) => (
        <ExperienceSet
          experience={obj}
          idx={idx}
          key={obj.id}
          handleChange={(e) => handleChange(e, idx)}
          handleClick={() => handleDeleteWork(idx)}
        />
      ))}
      <button onClick={handleAddWork} className="add-btn btn">
        Add
      </button>
    </section>
  );
}
