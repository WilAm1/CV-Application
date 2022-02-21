import React from "react";
import ExperienceSubSection from "./ExperienceSubSection";

export default function ExperiencePreview({ experience }) {
  return (
    <section id="preview-experience">
      <h3>Experience</h3>
      {experience.map((item) => {
        return <ExperienceSubSection experience={item} key={item.id} />;
      })}
    </section>
  );
}
