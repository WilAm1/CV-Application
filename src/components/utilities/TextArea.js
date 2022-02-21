import React from "react";

export default function TextArea({ handleChange, value, placeholder, name }) {
  return (
    <textarea
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      name={name}
    ></textarea>
  );
}
