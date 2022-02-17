import React from "react";

export default function ExperienceSubSection({ experience }) {
  const { company, position, startDate, endDate, description } = experience;
  return (
    <section className="experience">
      <p>{company}</p>
      <p>{position}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <p>{description}</p>
    </section>
  );
}
