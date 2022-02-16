import React from "react";

export default function Preview({ personalInfo }) {
  return (
    <section id="preview-form">
      <h1>
        {personalInfo.lName +
          " " +
          personalInfo.fName +
          " " +
          personalInfo.mName}
      </h1>
      <h2>{personalInfo.jobTitle}</h2>
      <p>{personalInfo.description}</p>
      <div className="personal-details">
        <p>{personalInfo.address}</p>
        <p>{personalInfo.number}</p>
        <p>{personalInfo.email}</p>
      </div>
    </section>
  );
}
