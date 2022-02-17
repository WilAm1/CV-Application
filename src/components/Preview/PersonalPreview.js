import React, { Component } from "react";

export default class PersonalPreview extends Component {
  render() {
    const {
      lName,
      fName,
      mName,
      jobTitle,
      description,
      address,
      number,
      email,
    } = this.props.person;
    return (
      <section id="preview-personal">
        <h1>{lName + " " + fName + " " + mName}</h1>
        <h2>{jobTitle}</h2>
        <p>{description}</p>
        <div className="personal-details">
          <p>{address}</p>
          <p>{number}</p>
          <p>{email}</p>
        </div>
      </section>
    );
  }
}
