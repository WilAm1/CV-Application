import React from "react";

export default function EducationSubSection({ education }) {
  const { course, university, startDate, endDate, description } = education;
  return (
    <section className="education main-detail">
      <div className="dates">
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <div className="details-wrapper">
        <p className="bold-text">{university}</p>
        <p>{course}</p>
        <p className="light-font">{description}</p>
      </div>
    </section>
  );
}
