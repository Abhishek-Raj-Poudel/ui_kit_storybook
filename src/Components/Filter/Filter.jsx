import React from "react";
import { useState } from "react";
import "./Filter.css";
export default function Filter({ variant = "primary", children, ...rest }) {
  //   let labels = ["Left", "Middle1", "Middle2", "Right"];
  const [active, setActive] = useState({ active: true, index: null });

  let labels = [...children];
  return (
    <ul className="filter_menu">
      {labels.map((label, index) => (
        <li
          key={index}
          className={`filter_item ${variant} ${
            active.active && active.index === index ? "filter_item_active" : ""
          } `}
          onClick={() => {
            setActive(() => ({ active: true, index: index }));
          }}
        >
          {label}
        </li>
      ))}
    </ul>
  );
}
