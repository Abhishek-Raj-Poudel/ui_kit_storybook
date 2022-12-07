import React from "react";
import "./Checkbox.css";

export default function Checkbox({ variant = "primary", children, ...rest }) {
  return (
    <label className="checkbox_label">
      <input type="checkbox" className={`checkbox ${variant}`} {...rest} />
      <input type="radio" className={`checkbox ${variant}`} {...rest} />
      <span>{children}</span>
    </label>
  );
}
