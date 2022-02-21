import React from "react";
import EducationSubSection from "./EducationSubSection";

export default function EducationPreview({ education }) {
  return (
    <section id="preview-education">
      <h3>Education</h3>
      {education.map((item) => {
        return <EducationSubSection education={item} key={item.id} />;
      })}
    </section>
  );
}
