import React from "react";
import { useState } from "react";
import "./InputField.css";

export default function InputField({
  variant = "primary",
  label,
  placeholder,
  disabled,
  readonly,
  error,
}) {
  const [labelHidden, setLabelHidden] = useState(true);
  return (
    <>
      <label
        className={`input_label ${variant} ${
          disabled ? "input_label_disabled" : ""
        } ${readonly ? "input_field_readonly" : ""} `}
        onClick={() => {
          setLabelHidden(!labelHidden);
        }}
      >
        <span hidden={labelHidden}>{label}</span>
        <input
          className="input_field"
          type="text"
          placeholder={placeholder ? placeholder : label}
        />
      </label>
      <span className="input_error">{error}</span>
    </>
  );
}
