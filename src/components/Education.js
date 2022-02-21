import React from "react";
import EducationSet from "./utilities/EducationSet";

export default function Education(props) {
  const {
    handleAddEducation,
    handleEducationChange,
    handleDeleteEducation,
    education,
  } = props;
  function handleChange(event, idx) {
    handleEducationChange(event, idx);
  }
  return (
    <section id="education-section">
      <h3>Education</h3>
      {education.map((obj, idx) => (
        <EducationSet
          education={obj}
          idx={idx}
          key={obj.id}
          handleChange={(e) => handleChange(e, idx)}
          handleClick={() => handleDeleteEducation(idx)}
        />
      ))}
      <button onClick={handleAddEducation} className="add-btn btn">
        Add
      </button>
    </section>
  );
}
