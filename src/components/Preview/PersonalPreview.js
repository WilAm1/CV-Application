import React from "react";

export default function PersonalPreview({ person }) {
  const { lName, fName, mName, jobTitle, description, address, number, email } =
    person;
  return (
    <section id="preview-personal">
      <h2 id="name">{lName + " " + fName + " " + mName}</h2>
      <h2 id="job-title">{jobTitle}</h2>
      <p className="light-font">{description}</p>
      <div className="personal-details">
        <p>{address}</p>
        <p>{number}</p>
        <p>{email}</p>
      </div>
    </section>
  );
}
