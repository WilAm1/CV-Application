import React from "react";

export default function EducationSubSection({ education }) {
  const { course, university, startDate, endDate, description } = education;
  return (
    <section className="education">
      <p>{course}</p>
      <p>{university}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <p>{description}</p>
    </section>
  );
}
