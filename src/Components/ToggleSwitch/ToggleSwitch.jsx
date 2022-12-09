import React from "react";
import "./ToggleSwitch.css";

export default function ToggleSwitch({
  variant = "default",
  title,
  children,
  ...rest
}) {
  return (
    <label class={`toggle_label ${variant}`}>
      <input className={`toggle`} type="checkbox" name="checkbox" {...rest} />
      <div>
        <span>{title}</span>
        <p className="subtitle">{children}</p>
      </div>
    </label>
  );
}
