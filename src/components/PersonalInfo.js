import React from "react";
import Input from "./utilities/InputBox";
import TextArea from "./utilities/TextArea";

export default function PersonalSection(props) {
  const { person, handleChange } = props;

  return (
    <section id="personal-section">
      <h3>Personal Information</h3>
      <div className="inputs-container">
        <Input
          value={person.lName}
          handleChange={handleChange}
          placeholder={"Last Name"}
          type={"text"}
          name={"lName"}
        />
        <Input
          value={person.fName}
          handleChange={handleChange}
          placeholder={"First Name"}
          type={"text"}
          name={"fName"}
        />
        <Input
          value={person.mName}
          handleChange={handleChange}
          placeholder={"Middle Name"}
          type={"text"}
          name={"mName"}
        />
        <Input
          value={person.jobTitle}
          handleChange={handleChange}
          placeholder={"Title"}
          type={"text"}
          name={"jobTitle"}
        />
        <Input
          value={person.address}
          handleChange={handleChange}
          placeholder={"Address"}
          type={"text"}
          name={"address"}
        />
        <Input
          value={person.number}
          handleChange={handleChange}
          placeholder={"Phone Number"}
          type={"number"}
          name={"number"}
        />
        <Input
          value={person.email}
          handleChange={handleChange}
          placeholder={"Email"}
          type={"email"}
          name={"email"}
        />

        <TextArea
          value={person.description}
          handleChange={handleChange}
          placeholder={"Tells us about Yourself"}
          name={"description"}
        />
      </div>
    </section>
  );
}
