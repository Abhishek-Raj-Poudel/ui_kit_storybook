import React from "react";
import "./Badge.css";

export default function Badge({ variant = "primary", children, ...rest }) {
  return (
    <div className={`badge ${variant}`} {...rest}>
      {children}
    </div>
  );
}
