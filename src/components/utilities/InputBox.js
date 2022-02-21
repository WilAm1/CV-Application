import React from "react";

export default function Input({
  handleChange,
  type,
  value,
  placeholder,
  name,
}) {
  return (
    <input
      onChange={handleChange}
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
    ></input>
  );
}
