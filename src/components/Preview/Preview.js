import React from "react";
import ExperiencePreview from "./ExperiencePreview";
import PersonalPreview from "./PersonalPreview";
import EducationPreview from "./EducationPreview";

export default function Preview({ person, experience, education }) {
  return (
    <section id="preview-section">
      <PersonalPreview person={person} />
      <ExperiencePreview experience={experience} />
      <EducationPreview education={education} />
    </section>
  );
}
