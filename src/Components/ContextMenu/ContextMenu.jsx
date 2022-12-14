import React from "react";
import "./ContextMenu.css";
import { TbChecks } from "react-icons/tb";

export default function ContextMenu() {
  return (
    <ul className="context_menu">
      <li className="item" checked>
        <span>Canada</span>
        <TbChecks className="checkmark" />
      </li>
      <li className="item">USA</li>
      <li className="item">Gremany</li>
    </ul>
  );
}
