import React from "react";

export default function ExperienceSubSection({ experience }) {
  const { company, position, startDate, endDate, description } = experience;
  return (
    <section className="experience main-detail">
      <div className="dates">
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <div className="details-wrapper">
        <p className="bold-text">{company}</p>
        <p>{position}</p>
        <p className="light-font">{description}</p>
      </div>
    </section>
  );
}
