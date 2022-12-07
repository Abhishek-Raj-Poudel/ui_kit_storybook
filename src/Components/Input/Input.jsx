import React from "react";
import "./Input.css";

export default function Input({ size = "medium", ...rest }) {
  return <input className={`input ${size}`} {...rest} />;
}
