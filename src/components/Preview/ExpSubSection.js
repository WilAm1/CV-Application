import React from "react";

export default function ExperienceSubSection({ experience }) {
  const { company, position, startDate, endDate, description } = experience;
  return (
    <section id="preview-form">
      <p>{company}</p>
      <p>{position}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <p>{description}</p>
    </section>
  );
}
