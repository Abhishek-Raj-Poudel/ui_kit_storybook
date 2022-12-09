import React from "react";
import "./Checkbox.css";

export default function Checkbox({ variant = "default", children, ...rest }) {
  return (
    <label class={`checkbox_label ${variant}`}>
      <input className={`checkbox`} type="checkbox" name="checkbox" {...rest} />
      <span>{children}</span>
    </label>
  );
}
