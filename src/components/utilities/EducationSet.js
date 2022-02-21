import React from "react";
import Input from "./InputBox";
import TextArea from "./TextArea";

export default function EducationSet({ education, handleChange, handleClick }) {
  const { course, university, startDate, endDate, description } = education;
  return (
    <div className="inputs-container">
      <Input
        value={course}
        handleChange={handleChange}
        placeholder={"Course"}
        type={"text"}
        name={"course"}
      />
      <Input
        value={university}
        handleChange={handleChange}
        placeholder={"University"}
        type={"text"}
        name={"university"}
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
        placeholder={"Some description?"}
        name={"description"}
      />
      <button onClick={handleClick} className="delete-btn btn">
        Delete
      </button>
    </div>
  );
}
