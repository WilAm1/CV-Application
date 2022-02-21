import React from "react";
import Input from "./InputBox";
import TextArea from "./TextArea";

export default function ExperienceSet({
  experience,
  handleChange,
  handleClick,
}) {
  const { company, position, startDate, endDate, description } = experience;
  return (
    <div className="inputs-container">
      <Input
        value={company}
        handleChange={handleChange}
        placeholder={"Company"}
        type={"text"}
        name={"company"}
      />
      <Input
        value={position}
        handleChange={handleChange}
        placeholder={"Position"}
        type={"text"}
        name={"position"}
      />
      <Input
        value={startDate}
        handleChange={handleChange}
        placeholder={"Start Date"}
        type={"text"}
        name={"startDate"}
      />
      <Input
        value={endDate}
        handleChange={handleChange}
        placeholder={"End Date"}
        type={"text"}
        name={"endDate"}
      />
      <TextArea
        value={description}
        handleChange={handleChange}
        placeholder={"Tells us about your work"}
        name={"description"}
      />
      <button onClick={handleClick} className="delete-btn btn">
        Delete
      </button>
    </div>
  );
}
