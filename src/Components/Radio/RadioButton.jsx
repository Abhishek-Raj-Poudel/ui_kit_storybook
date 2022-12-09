import React from "react";
import "./RadioButton.css";

export default function RadioButton({
  variant = "default",
  children,
  ...rest
}) {
  return (
    <label className={`radio_label ${variant}`}>
      <input className="radio_button" type="radio" name="radio" {...rest} />
      {children}
    </label>
  );
}
