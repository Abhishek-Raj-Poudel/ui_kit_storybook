import React from "react";

import "./Button.css";

export function Button({ variant = "primary", children, ...rest }) {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}
